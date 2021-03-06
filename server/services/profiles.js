module.exports = function initialize(params) {
  const knex = params.knex;
  const util = params.util;
  const emails = params.emails;

  function listProfiles(loggedIn, limit, offset, filters = {}, order) {
    let query = knex('users').whereNotNull('pw_hash').select('users.*');
    if (limit !== undefined) query = query.limit(limit);
    if (offset !== undefined) query = query.offset(offset);
    if (filters.domain !== undefined) {
      query = query.whereExists(function whereExists() {
        this.select('user_id')
          .from('skills')
          .whereRaw('users.id = skills.user_id and heading = ? and type = ?',
            [filters.domain, 'domain']);
      });
    }
    if (filters.position !== undefined) {
      query = query.whereExists(function whereExists() {
        this.select('user_id')
          .from('skills')
          .whereRaw('users.id = skills.user_id and heading = ? and type = ?',
            [filters.position, 'position']);
      });
    }
    if (filters.location !== undefined) {
      query = query.whereRaw("users.data->>'location' = ?", [filters.location]);
    }

    if (filters.special_skill !== undefined) {
      query = query.whereExists(function whereExists() {
        this.select('user_id')
          .from('user_special_skills')
          .whereRaw('users.id = user_special_skills.user_id and heading = ?',
            [filters.special_skill]);
      });
    }

    if (filters.specialization !== undefined) {
      query = query.whereExists(function whereExists() {
        this.select('user_id')
          .from('user_educations')
          .whereRaw("users.id = user_educations.user_id and data->>'specialization' = ?",
            [filters.specialization]);
      });
    }
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() + (currentDate.getMonth() / 12);
    if (filters.child_age !== undefined) {
      if (filters.child_age === 'Raskaana') {
        query = filterByChildrenAge(query, currentYear, currentYear + 0.75);
      } else if (filters.child_age === '0 vuotta') {
        query = filterByChildrenAge(query, currentYear - 1, currentYear);
      } else if (filters.child_age === '1-3 vuotta') {
        query = filterByChildrenAge(query, currentYear - 4, currentYear - 1);
      } else if (filters.child_age === '4-6 vuotta') {
        query = filterByChildrenAge(query, currentYear - 7, currentYear - 4);
      } else if (filters.child_age === '7-10 vuotta') {
        query = filterByChildrenAge(query, currentYear - 11, currentYear - 7);
      } else if (filters.child_age === '11-14 vuotta') {
        query = filterByChildrenAge(query, currentYear - 15, currentYear - 11);
      } else if (filters.child_age === '15-17 vuotta') {
        query = filterByChildrenAge(query, currentYear - 18, currentYear - 15);
      } else if (filters.child_age === '18- vuotta') {
        query = filterByChildrenAge(query, currentYear - 200, currentYear - 18);
      }
    }

    if (order === undefined || order === 'recent') {
      query = query
        .leftOuterJoin('ads', 'users.id', 'ads.user_id')
        .leftOuterJoin('answers', 'users.id', 'answers.user_id')
        .groupBy('users.id')
        .orderByRaw('greatest(max(ads.created_at), max(answers.created_at), users.modified_at) desc nulls last');
    }

    if (order === 'alphaDesc') {
      query = query.orderByRaw("lower(users.data->>'name') desc");
    }

    if (order === 'alphaAsc') {
      query = query.orderByRaw("lower(users.data->>'name') asc");
    }

    return query
      .then(resp => resp.map(user => util.formatUser(user, loggedIn)));
  }

  function profileSkills(user_id) {
    return knex('skills').where({ user_id });
  }

  function profileEducations(user_id) {
    return knex('user_educations').where({ user_id }).then(rows => rows.map(row => row.data));
  }

  function profileSpecialSkills(user_id) {
    return knex('user_special_skills').where({ user_id }).then(rows => rows.map(row => row.heading));
  }


  function addContact(loggedInUser, toUserId, introductionText) {
    if (typeof introductionText !== 'string' || introductionText.length < 10) {
      return Promise.reject({ status: 400, msg: 'Introduction text is mandatory' });
    }

    if (loggedInUser.id === toUserId) {
      return Promise.reject({ status: 400, msg: 'User cannot add contact to himself' });
    }

    const businessCard = util.formatBusinessCard(loggedInUser.data.business_card);
    if (!businessCard) {
      return Promise.reject('User has no business card');
    }
    if (businessCard.phone.length === 0 && businessCard.email.length === 0) {
      return Promise.reject('User is missing details from business card');
    }
    return knex('contacts').where({ from_user: loggedInUser.id, to_user: toUserId })
      .then(resp => {
        if (resp.length === 0) {
          return knex('contacts').insert({
            from_user: loggedInUser.id,
            to_user: toUserId,
            intro_text: introductionText,
          }, 'id')
            .then(data => knex('events').insert({ type: 'add_contact', data: { contact_id: data[0] } }))
            .then(() => util.userById(toUserId))
            .then(receiver =>
              emails.sendNotificationForContact(receiver, loggedInUser, introductionText)
            );
        }

        return Promise.reject('User has already given their business card to this user');
      });
  }

  function listContacts(loggedInUser) {
    return knex('contacts').where('to_user', loggedInUser.id).then(rows => {
      const promises =
            rows.map(row => util.userById(row.from_user).then(fromUser => ({
              user: util.formatUser(fromUser, true),
              business_card: util.formatBusinessCard(fromUser.data.business_card || {}),
              intro_text: row.intro_text || '',
              created_at: row.created_at,
            })));
      return Promise.all(promises);
    });
  }

  function contactExists(from, to) {
    return knex('contacts').where({
      from_user: from.id,
      to_user: to.id,
    }).then(resp => resp.length > 0);
  }

  function filterByChildrenAge(query, minYear, maxYear) {
    return query.whereExists(function whereExists() {
      this.select('id').from(knex.raw("(select name, id,y+(m-1)/12 as year from (select data->>'name' as name, id,(jsonb_array_elements(data->'children')->>'year')::float as y, (jsonb_array_elements(data->'children')->>'month')::float as m from users) s ) s2 where year > ? and year <= ? and users.id=id", [minYear, maxYear]));
    });
  }

  return {
    listProfiles,
    profileSkills,
    profileEducations,
    profileSpecialSkills,
    addContact,
    listContacts,
    contactExists,
  };
};
