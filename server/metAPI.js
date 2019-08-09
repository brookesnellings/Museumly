const axios = require('axios');
const db = require('../database');

const objectIDs = [
  237436,
  376033,
  479905,
  479906,
  479907,
  479908,
  479909,
  479910,
  479911,
  479912,
  479913,
  479914,
  479915,
  479916,
  479917,
  479918,
  479919,
  479920,
  479921,
  479922,
  479923,
  479924,
  479925,
  479926,
  479927,
  479928,
  479929,
  479930,
  479931,
  479932,
  479933,
  479934,
  479935,
  479936,
  479937,
  479938,
  479939,
  479940,
  479941,
  479942,
  479943,
  479944,
  479945,
  479946,
  479947,
  479948,
  479949,
  479950,
  479951,
  479952,
  479953,
  479954,
  479955,
  479956,
  479957,
  479958,
  479959,
  479960,
  479961,
  479962,
  479963,
  479964,
  479965,
  479966,
  479967,
  479968,
  479969,
  479970,
  479971,
  479972,
  479973,
  479974,
  479975,
  479976,
  479977,
  479978,
  479979,
  479980,
  479981,
  479982,
  479983,
  479984,
  479985,
  479986,
  479987,
  479988,
  479989,
  479990,
  479991,
  479992,
  479993,
  479994,
  479995,
  479996,
  479997,
  479998,
  479999,
  480000
];

const populatePaintingsAndSeedDB = () => {
  axios
    .get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=21')
    .then(response => {
      response.data.objectIDs.forEach(object => {
        axios
          .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`)
          .then(response => {
            if (
              response.data.primaryImage.length > 1 &&
              response.data.title.length > 1 &&
              response.data.artistDisplayName.length > 1
            ) {
              console.log('VERY COOL');
              db.seedDB(response.data);
            }
          })
          .catch(error => {
            console.log('WHOOPS', error);
          });
      });
    })
    .catch(error => {
      console.log('DOUBLE WHOOPS');
    });
};

populatePaintingsAndSeedDB();
