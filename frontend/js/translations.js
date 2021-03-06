const supportEmail = 'mibit@mib.fi';

const source = {
  common: {
    and: 'ja',
    supportEmail,
    dateFormat: 'd.M.y',
    readMore: 'lue lisää',
    cancel: 'Peru',
    login: 'Kirjaudu',
    logout: 'Kirjaudu ulos',
    tabs: {
      profile: 'Oma profiili',
      settings: 'Asetukset',
      contacts: 'Käyntikortit',
    },
    selectFilters: {
      domain: 'Valitse toimiala',
      position: 'Valitse tehtäväluokka',
      location: 'Valitse alue',
      childAge: 'Valitse lapsen ikä',
    },
    lengthHint: {
      needsNMoreChars: 'Vielä vähintään {.} merkkiä',
      fitsAtMostNCharsMore: 'Enää korkeintaan {.} merkkiä',
      tooLongByNChars: '{.} merkkiä liian pitkä',
    },
  },
  ad: {
    requestFailed: 'Ilmoituksen haku epäonnistui',
    noAnswersYet: 'Tällä ilmoituksella ei ole vielä yhtään vastausta',
    noAnswersHint: 'Lisää omasi ylhäällä',
    answerCount: {
      0: {
        heading: 'Tähän ilmoitukseen ei ole vastattu kertaakaan',
        hint: 'Kirjaudu sisään ja ole ensimmäinen',
      },
      1: {
        heading: 'Tällä ilmoituksella on yksi vastaus',
        hint: 'Kirjaudu sisään nähdäksesesi sen ja lisää omasi',
      },
      n: {
        heading: 'Tähän ilmoitukseen on vastattu {.} kertaa',
        hint: 'Kirjaudu sisään nähdäksesi vastaukset ja lisää omasi',
      },
    },
    leaveAnswerBox: {
      placeholder: 'Kirjoita napakka vastaus',
      submit: 'Jätä vastaus',
    },
    leaveAnswerPrompt: {
      isAsker: 'Muut käyttäjät voivat vastata ilmoitukseesi tällä sivulla. Näet vastaukset alla kun niitä tulee.',
      hasAnswered: 'Olet vastannut tähän ilmoitukseen. Kiitos kun autoit kanssamibiläistäsi!',
      hint: 'Kokemuksellasi on aina arvoa. Jaa näkemyksesi vastaamalla ilmoitukseen.',
      answerTooltip: 'Voit vastata muiden esittämiin kysymyksiin kerran',
      cannotAnswerTooltip: 'Et voi vastata tähän kysymykseen',
      submit: 'Vastaa ilmoitukseen',
    },
  },
  changePassword: {
    title: 'Vaihda salasanasi',
    oldPasswordPlaceholder: 'Vanha salasana',
    newPasswordPlaceholder: 'Uusi salasana',
    newPasswordPlaceholder2: 'Uusi salasana uudelleen',
    submit: 'Lähetä',
    success: 'Salasana vaihdettu!',
    failure: 'Jotain meni pieleen. Varmista, että kirjoitit vanhan salasanasi oikein.',
    networkError: 'Yhteydessä on ongelmia, salasanan vaihto ei onnistunut.',
  },
  contacts: {
    heading: 'Käyntikortit',
    info: 'Nämä henkilöt ovat lähettäneet sinulle MiBiT-käynttikorttinsa. Otathan heihin yhteyttä tai lähetät heille oman MiBiT-käynttikorttisi, sillä vain käyntikortin vastaanottaja voi nähdä lähettäjän yhteystiedot.',
  },
  createAd: {
    headingInputPlaceholder: 'Otsikko',
    adInputPlaceholder: 'Kirjoita ytimekäs ilmoitus',
    info: 'Ilmoituksen avulla voit esimerkiksi hakea muilta vinkkejä johonkin osaamisalueeseen, kysyä kokemuksia, pyytää apua, jakaa osaamistasi tai hakea seuraa. Huomioithan, että kuhunkin ilmoitukseen voi vastata vain kerran ja että omaan ilmoitukseen ei voi vastata.',
    filtersHeading: 'Kenen toivot vastaavan?',
    filtersInfo: 'Valitsemalla toimialan tai tehtävän varmistat, että kysymyksesi löytää vastaajansa. Valittu kohderyhmä saa myös ilmoituksesi sähköpostina.',
    submit: 'Julkaise ilmoitus',
    successHeading: 'Lähetys onnistui',
    successAdId: 'Ilmoituksen numero on: ',
    successContinue: 'Paina selaimesi päivitä-nappulaa jatkaaksesi',
    errorHeading: 'Jotain meni pieleen',
    errorContinue: 'Ole hyvä ja lataa sivu uudelleen',
  },
  errors: {
    badUrl: 'BadUrl ',
    timeout: 'Vastauksen saaminen kesti liian kauan, yritä myöhemmin uudelleen',
    networkError: 'Yhteydessä on ongelma, yritä myöhemmin uudelleen',
    badPayload: 'Jotain meni pieleen. Verkosta tuli\n\n{.}\n\nja virhe oli\n\n{.}',
    badStatus: `Haettua sisältöä ei löytynyt. Se on voitu poistaa tai osoitteessa voi olla virhe. Voit ottaa yhteyttä osoitteeseen ${supportEmail} halutessasi. Ota silloin kuvakaappaus sivusta ja lähetä se viestin liitteenä. {.}`,
    codeToUserVisibleMessage: `Jotain meni pieleen. Virheen tunnus on {.}. Meille olisi suuri apu, jos otat kuvakaappauksen koko sivusta ja lähetät sen osoitteeseen ${supportEmail}.`,
    errorResponseFailure: '{.} Järjestelmässä on jotain pahasti pielessä, tutkimme asiaa',
  },
  children: {
    becameMother: 'Äidiksi',
    child: 'Lapsi',
    children: 'Lapset',
    ageCategories: {
      unborn: 'odottaa',
      baby: 'vauva',
      playAge: 'leikki-ikäinen',
      schoolkid: 'kouluikäinen',
      teenager: 'teini-ikäinen',
      grownUpChildren: 'aikuinen lapsi',
    },
  },
  footer: {
    link0: {
      url: 'http://www.mothersinbusiness.fi/tietosuoja',
      text: 'Tietosuojaseloste',
    },
    link1: {
      url: 'http://www.mothersinbusiness.fi',
      text: 'Mothers in Business MiB ry',
    },
    link2: {
      url: 'http://www.mothersinbusiness.fi/jaseneksi/',
      text: 'Liity jäseneksi',
    },
    link3: {
      url: 'mailto:mibit@mib.fi',
      text: 'Ota yhteyttä',
    },
    linkStats: {
      text: 'Tilastoja',
    },
    socialButton: {
      facebookUrl: 'https://www.facebook.com/mibsuomi',
      twitterUrl: 'https://twitter.com/MiB_ry',
      linkedinUrl: 'https://www.linkedin.com/company/mothers-in-business-mib-ry',
      githubUrl: 'https://github.com/futurice/mibit',
    },
    createdBy: 'Palvelun tarjoaa ',
    futurice: 'Futuricen',
    chilicornFund: 'Chilicorn Fund',
    chilicornUrl: 'https://spiceprogram.org/chilicorn-fund/',
    futuriceUrl: 'https://www.futurice.com',
  },
  home: {
    introbox: {
      heading: 'Löydä mibiläinen',
      // createProfile: 'Luo oma profiili',
      register: 'Rekisteröidy',
      content: 'MiBiT on poistettu käytöstä. Kiitos teille, jotka olette palvelua käyttäneet! Mikäli sinulla on kysyttävää tiedoista tai profiilin poistamisesta, voit kysyä lisää osoitteesta info@mib.fi',
    },
    tradenomiittiInfo: {
      // \xad === &shy;, that is soft hyphen
      heading: 'Rakkaudesta uraan ja perheeseen',
      paragraph1: 'MiBiT on Mothers in Business MiB ry:n jäsenten omat kohtaamispaikka. MiBiT yhdistää MiB ry:n jäsenet ympäri Suomen. Haluatko tutustua samalla alalla oleviin muihin mibiläisiin, kasvattaa ammatillisia verkostojasi tai löytää samanhenkistä seuraa omalta paikkakunnaltasi? MiBiT yhdistää! Voit huhuilla kahvitteluseuraa perhevapaidesi aikana, etsiä vinkkejä ruuhkavuosiin tai vaikka sparrailukaveria ammatillisiin haasteisiin. Tule mukaan voimaannuttavaan verkostoon!',
      paragraph2: 'Luomalla profiilin pääset alkuun, loput on itsestäsi kiinni.',
    },
    listAds: {
      heading: 'Uusimmat ilmoitukset',
      buttonListAds: 'katso kaikki ilmoitukset',
      buttonCreateAd: 'jätä ilmoitus',
    },
    listUsers: {
      heading: 'Löydä mibiläinen',
      buttonListUsers: 'Katso kaikki mibiläiset',
      buttonEditProfile: 'Muokkaa omaa profiilia',
      buttonCreateProfile: 'Luo oma profiili',
    },
  },
  initPassword: {
    title: 'Aseta salasanasi',
    passwordPlaceholder: 'Salasana',
    password2Placeholder: 'Salasana uudelleen',
    buttonSubmit: 'Lähetä',
    success: 'Salasana asetettu!',
    successMessage: 'Salasanasi on nyt asetettu. Voit kirjautua sisään ja aloittaa MiBiTin käytön.',
    failure: 'Jotain meni pieleen. Linkkisi saattaa olla vanhentunut tai virheellinen.',
    networkError: 'Yhteydessä on ongelmia, salasanan asettaminen ei onnistunut',
  },
  listAds: {
    heading: 'Selaa ilmoituksia',
    info: 'Kirjautuneena käyttäjänä voit vastata muiden ilmoituksiin. Voit vastata kuhunkin ilmoitukseen yhden kerran. Sen jälkeen on suositeltavaa vaihtaa käyntikortteja, mikäli haluatte vielä jatkaa keskustelua. Omaan ilmoitukseesi et voi vastata.',
    sort: {
      date: 'Päivämäärä',
      answerCount: 'Vastauksia',
      newestAnswer: 'Uusin vastaus',
    },
  },
  listUsers: {
    heading: 'Selaa mibiläisiä',
    info: 'Selaa mibiläisiä ja ehdota käyntikorttien vaihtoa verkostosi kasvattamiseksi. Sinulle lähetyt käyntikortit löytyy Profiili-sivusi Käyntikortit-välilehdellä.',
    sort: {
      activity: 'Aktiivisuus',
      name: 'Nimi',
    },
    filters: {
      specialization: 'Valitse suuntautuminen / pääaine',
      skill: 'Valitse taito',
    },
  },
  loginNeeded: {
    heading: 'Kirjaudu sisään',
    info: 'MiBiT on poistettu käytöstä. Kiitos teille, jotka olette palvelua käyttäneet!',
    registerButton: 'Rekisteröidy',
  },
  login: {
    title: 'Kirjaudu sisään',
    hint: 'MiBiT on poistettu käytöstä. Kiitos teille, jotka olette palvelua käyttäneet!',
    emailPlaceholder: 'Sähköpostiosoite',
    passwordPlaceholder: 'Salasana',
    failure: 'Kirjautuminen epäonnistui. Varmista, että kirjoitit sähköpostiosoitteesi ja salasanasi oikein.',
    networkError: 'Yhteydessä on ongelmia, kirjautuminen ei onnistunut',
    renewButton: 'Unohtuiko salasanasi?',
  },
  main: {
    profile: 'Profiili',
    login: 'Kirjaudu',
    consentNeeded: {
      heading: 'Tervetuloa MiBiTiin!',
      content: 'Tehdäksemme palvelun käytöstä mahdollisimman vaivatonta hyödynnämme Mothers in Business MiB ry:n olemassa olevia jäsentietoja. Luomalla profiilin hyväksyt tietojesi käytön MiBiTissä. Voit muokata tietojasi myöhemmin.',
      iAcceptThe: 'Hyväksyn palvelun ',
      terms: 'käyttöehdot',
      createProfile: 'Luo profiili',
    },
    splashScreen: {
      logoWidth: '400px',
    },
    notImplementedYet: 'Tätä ominaisuutta ei ole vielä toteutettu',
  },
  navigation: {
    sr_open: 'Navigaation avaus',
    logoAlt: 'Logo',
    logoWidth: '44px',
    routeNames: {
      user: 'Käyttäjä {.}',
      profile: 'Oma Profiili',
      home: 'Home',
      info: 'Tietoa',
      notFound: 'Ei löytynyt',
      listUsers: 'Mibiläiset',
      listAds: 'Ilmoitukset',
      createAd: 'Jätä ilmoitus',
      showAd: 'Ilmoitus {.}',
      login: 'Kirjaudu',
      loginNeeded: 'Kirjautuminen vaaditaan',
      terms: 'Palvelun käyttöehdot',
      registerDescription: 'Rekisteriseloste',
      registration: 'Rekisteröinti',
      settings: 'Asetukset',
      contacts: 'Käyntikortit',
      changePassword: 'Vaihda salasana',
      renewPassword: 'Tilaa uusi salasana',
      initPassword: 'Aseta salasana',
    },
  },
  profile: {
    editProfile: {
      heading: 'Muokkaa profiilia',
      hint: 'Tehdäksemme MiBiTin käytöstä sinulle mahdollisimman vaivatonta, olemme luoneet sinulle profiilin Mothers in Business MiB ry:n jäsentietojen perusteella. Viimeistele profiilisi tarkastamalla jäsentietosi, muokkaamalla julkista profiiliasi ja täyttämällä henkilökohtainen käyntikorttisi.',
      nickNameMandatory: 'Kutsumanimi on pakollinen',
      buttonSave: 'Tallenna profiili',
      buttonEdit: 'Muokkaa profiilia',
    },
    membershipInfo: {
      profileUsesMembershipInfo: 'Profiilissa hyödynnetään yhdistyksen jäsentietoja. Tarkistathan, että tietosi ovat järjestelmässämme ajan tasalla. Jos päivität jäsentietojasi, näkyvät muutokset MiBiTissä aikaisintaan seuraavana päivänä.',
      notVisibleAsIs: 'Jäsentiedot eivät näy sellaisenaan muille.',
      buttonUpdateInfo: 'päivitä jäsentiedot',
    },
    publicInfo: {
      heading: 'Julkiset tiedot',
      hint: 'Valitse itsellesi käyttäjänimi (yleisimmin etunimi) ja kuvaava titteli. Täytäthän tiedot mahdollisimman kattavasti, jolloin profiilisi löytyy hakutuloksista helpommin ja näin muut mibiläiset pääsevät tutustumaan sinuun.\n\nRaskauden voit ilmoittaa merkitsemällä lasketun ajan.',
    },
    businessCard: {
      heading: 'Käyntikortti',
      hint: 'Täydennä alle tiedot, jotka haluat lähettää käyntikortin mukana. ',
      visibleForRecipients: 'Tiedot näkyvät vain niille, joille olet lähettänyt kortin.',
      notFound: 'Käyntikorttia ei löytynyt',
    },
    businessCardFields: {
      name: 'Koko nimi',
      title: 'Titteli, Työpaikka',
      location: 'Paikkakunta',
      phone: 'Puhelinnumero',
      email: 'Sähköposti',
      linkedIn: 'LinkedIn-linkki',
      facebook: 'Facebook-linkki',
    },
    competences: {
      editHeading: 'Muokkaa osaamistasi',
      hint: 'Kerro osaamisestasi valitsemalla toimiala, tehtäväluokka ja taitosi. Näin MiBiT voi palvellla sinua paremmin ja jotta muut mibiläiset löytävät sinut helpommin. Osaaminen näkyy kaikille käyttäjille.',
    },
    ownProfile: {
      notLoggedIn: 'Et ole kirjautunut',
    },
    educations: {
      heading: 'Koulutus',
      degree: 'Tutkintonimike',
      specialization: 'Suuntautuminen / pääaine',
    },
    viewUser: {
      showAllActivity: 'Näytä kaikki aktiivisuus',
      activity: 'Aktiivisuus',
    },
    editProfileBox: {
      hint: 'Onhan profiilisi ajan tasalla? Mielenkiintoinen ja aktiivinen profiili auttaa luomaan kontakteja',
      editProfile: 'Muokkaa profiilia',
    },
    userInfoBox: {
      nickNamePlaceholder: 'Miksi kutsumme sinua?',
      titlePlaceholder: 'Titteli',
      locationPlaceholder: 'Alue tai kaupunki',
      contributionPlaceholder: 'Mitä haluaisit opettaa muille?',
    },
    userDescriptionPlaceholder: 'Kirjoita napakka kuvaus itsestäsi',
    userIdForAdmins: 'Jäsentunniste: ',
    userDomains: {
      heading: 'Toimiala',
      question: 'Valitse toimialat, joista olet kiinnostunut tai sinulla on kokemusta',
      selectDomain: 'Valitse toimiala',
      selectDomainHint: 'Lisää toimiala, josta olet kiinnostunut tai sinulla on osaamista',
    },
    userSkills: {
      heading: 'Osaaminen',
      question: 'Mitä taitoja sinulla on?',
      addSkill: 'Lisää taito',
      selectSkill: 'Valitse taito',
    },
    userPositions: {
      heading: 'Tehtäväluokka',
      question: 'Missä tehtävissä olet toiminut tai haluaisit toimia?',
      selectPosition: 'Valitse tehtäväluokka',
      selectPositionHint: 'Lisää tehtäväluokka, josta olet kiinnostunut tai sinulla on osaamista',
    },
    educationsEditing: {
      hint: 'Lisää koulutus. Valitse omaa koulutustasi parhaiten vastaavat vaihtoehdot. Mikäli valikoista ei löydy oikeaa vaihtoehtoa, voit lisätä sen itse.',
      selectDegree: 'Valitse tutkintonimike',
      selectSpecialization: 'Valitse suuntautuminen / pääaine',
      addEducation: 'Lisää koulutus',
      degreeRequired: 'Tutkintonimike on pakollinen tieto',
    },
    childrenEditing: {
      heading: 'Lapset',
      placeholder: {
        month: 'KK',
        year: 'VVVV',
      },
      buttonAdd: 'Lisää',
    },
    membershipRegisterInfo: {
      heading: 'MiBin jäsentiedot',
      nickName: 'Kutsumanimi',
      firstName: 'Etunimi',
      lastName: 'Sukunimi',
      division: 'Paikallisjaosto',
      positions: 'Tehtäväluokat',
      domains: 'Toimiala',
      email: 'Sähköposti',
      phone: 'Matkapuhelinnumero',
      streetAddress: 'Lähiosoite',
      postalCode: 'Postinumero',
      postalCity: 'Postitoimipaikka',
      location: 'Alue',
      missingData: 'Jäsentiedot puuttuvat',
    },
  },
  renewPassword: {
    title: 'Unohtuiko salasanasi?',
    hint: 'Voit pyytää sähköpostiisi linkin, jonka avulla voit luoda itsellesi uuden salasanan.',
    emailPlaceholder: 'Sähköpostiosoite',
    buttonText: 'Lähetä',
    success: 'Salasananvaihtolinkki lähetetty!',
    failure: 'Jotain meni pieleen. Varmista, että kirjoitit sähköpostiosoitteesi oikein. Tai ehkä olet jo tilannut salasananvaihtolinkin?',
  },
  registration: {
    title: 'Rekisteröidy käyttäjäksi',
    text: 'MiBiT on poistettu käytöstä. Kiitos teille, jotka olette palvelua käyttäneet! MiB ry:hyn voit ',
    joinLink: 'liittyä tästä',
    joinUrl: 'http://www.mothersinbusiness.fi/jaseneksi/',
    emailPlaceholder: 'Sähköpostiosoite',
    consentText: 'Rekisteröitymällä hyväksyn MiB ry:n jäsentietojeni käytön MiBiT-palvelussa ja palvelumarkkinoinnissa ja viestinnässä. Tutustu MiB ry:n tietosuojaselosteeseen osoitteessa ',
    consentLink: 'http://mothersinbusiness.fi/tietosuoja/',
    buttonText: 'Lähetä',
    success: 'Rekisteröintilinkki lähetetty!',
    failure: 'Jotain meni pieleen. Varmista, että kirjoitit sähköpostiosoitteesi oikein. Huomioi myös, että palvelu on tarkoitettu vain MiBin jäsenille.',
    networkError: 'Yhteydessä on ongelmia, rekisteröityminen ei onnistunut.',
  },
  removal: {
    removeYour: {
      ad: 'Poista oma ilmoituksesi',
      answer: 'Poista oma vastauksesi',
    },
    iWantToRemoveMy: {
      ad: 'Haluan poistaa ilmoitukseni',
      answer: 'Haluan poistaa vastaukseni',
    },
    confirmationText: {
      ad: 'Tämä poistaa ilmoituksen ja kaikki siihen tulleet vastaukset pysyvästi. Oletko varma?',
      answer: 'Tämä poistaa vastauksen pysyvästi. Oletko varma?',
    },
  },
  settings: {
    heading: 'Asetukset',
    emailsHeading: 'Sähköpostit',
    emailsInfo: 'Voit itse valita missä tilanteissa MiBiT lähettää sinulle viestin sähköpostitse. Sähköposti varmistaa sen, että saat tiedon uusista kontakteista, sinua koskevista ilmoituksista ja saamistasi vastauksista.',
    emailAddress: 'Sähköpostiosoite',
    emailsForBusinesscards: 'Ilmoitus uudesta kontaktista/käyntikortista',
    emailsForAnswers: 'Ilmoitus uudesta vastauksesta jättämääsi kysymykseen',
    emailsForNewAds: 'Kootut sinulle suunnatut ilmoitukset (viikottainen)',
    buttonSave: 'Tallenna',
    buttonChangePassword: 'Vaihda salasanasi',
    sending: 'Tallenetaan…',
    success: 'Tallennus onnistui',
    error: 'Tallenuksessa meni jotain pieleen',
  },
  skill: {
    interested: 'Kiinnostunut',
    beginner: 'Vasta-alkaja',
    experienced: 'Osaaja',
    pro: 'Konkari',
  },
  user: {
    contactUser: {
      alreadySent: 'Olet lähettänyt käyntikorttisi tälle mibiläiselle. Hänellä on nyt yhteystietosi, jotka olet lisännyt profiilitietoihisi. Vain vastaanottaja näkee käyntikortin yhteystiedot.',
      mustContainPhoneOrEmail: 'Käyntikortissasi täytyy olla puhelinnumero tai sähköpostiosoite, jotta voisit lähettää sen. Lisää tiedot klikkaamalla nimeäsi yläpalkissa ja valitsemalla "Muokkaa profiilia".',
      businessCardIsAttached: 'Viestin mukana lähetät käyntikortin',
      editOrContactUserPrompt: 'Kirjoita napakka esittelyteksti',
      contactUserPlaceholder: 'Vähintään 10 merkkiä',
      hint: 'Voisiko {.} auttaa sinua? Jaa käyntikorttisi yhteydenottopyynnön kera tästä. Huomaathan, että vain käyntikortin vastaanottaja näkee lähettäjän yhteystiedot. ',
      contact: 'Ota yhteyttä',
      submit: 'Lähetä',
    },
  },
  workStatus: {
    on_leave: 'Vapaalla',
    working: 'Työelämässä',
  },
};


// transform into flat object with keys like "home.introbox.createProfile"
function flatten(object) {
  const flat = {};
  Object.keys(object).forEach(key => {
    if (typeof object[key] === 'object') {
      const innerFlat = flatten(object[key]);
      Object.keys(innerFlat).forEach(innerKey => {
        flat[`${key}.${innerKey}`] = innerFlat[innerKey];
      });
    } else {
      flat[key] = object[key];
    }
  });
  return flat;
}

const flatObject = flatten(source);
const list = Object.keys(flatObject).map(key => [key, flatObject[key]]);

export default list;
