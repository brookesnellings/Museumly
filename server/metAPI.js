const axios = require('axios');
const db = require('../database');

const objectIDs = [
  496641,
  496642,
  496643,
  629108,
  629121,
  629168,
  639775,
  639776,
  639777,
  639778,
  639779,
  639780,
  639812,
  639813,
  639814,
  639816,
  639817,
  639818,
  639819,
  639820,
  639821,
  639822,
  639823,
  639825,
  639826,
  639827,
  639828,
  639830,
  639898,
  639900,
  639901,
  639903,
  639904,
  642612,
  644639,
  646713,
  646714,
  649434,
  655814,
  655815,
  655819,
  655833,
  655944,
  655947,
  655949,
  655950,
  660888,
  695610,
  705956,
  716497,
  716521,
  716523,
  716524,
  716525,
  732198,
  732199,
  732201,
  732226,
  732227,
  732228,
  732229,
  732230,
  732231,
  732232,
  732233,
  732234,
  732235,
  732236
];

const populatePaintingsAndSeedDB = objectIDs => {
  objectIDs.forEach(object => {
    // console.log(object);
    axios
      .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`)
      .then(response => {
        // console.log(response);
        if (
          response.data.primaryImage.length > 1 &&
          response.data.title.length > 1 &&
          response.data.artistDisplayName.length > 1
        ) {
          console.log('VERY COOL');
          db.seedDB(response.data);
        } else {
          console.log('SKIPPED');
        }
      })
      .catch(error => {
        console.log('WHOOPS');
      });
  });
};

populatePaintingsAndSeedDB(objectIDs);
