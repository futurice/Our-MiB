function dataForName(name) {
  return {
    name,
    business_card: {
      name,
      phone: '123456789'
    }
  }
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return knex('users').insert({
        id: 1,
        remote_id: -1,
        settings: {},
        data: dataForName('Tradenomi1')

      });
    }).then(() => {
      return knex('users').insert({
        id: 2,
        remote_id: -2,
        settings: {},
        data: dataForName('Tradenomi2')
      });
    }).then(() => {
      return knex('ads').insert({
        data: {heading: "foo", content: "bar"},
        user_id: 1,
        created_at: new Date(2017, 4, 1)
      });
    }).then(() => {
      return knex('ads').insert({
        data: {heading: "foo", content: "bar"},
        user_id: 1,
        created_at: new Date(2017, 4, 3)
      });
    }).then(() => {
      return knex('ads').insert({
        data: {heading: "foo", content: "bar"},
        user_id: 1,
        created_at: new Date(2017, 4, 2)
      });
    })
  ;
};
