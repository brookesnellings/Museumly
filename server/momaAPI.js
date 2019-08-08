const axios = require('axios');
const db = require('../database');

const populateAndSeedData = () => {
  axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects`).then(response => {
    response.data.objectIDs.forEach(object => {
      axios
        .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`)
        .then(async function(response) {
          if (
            response.data.primaryImage.length > 1 &&
            response.data.title.length > 1 &&
            response.data.artistDisplayName.length > 1
          ) {
            console.log('VERY COOL');
            await db.seedDB(response.data);
          }
        })
        .catch(error => {
          console.log('WHOOPS', error);
        });
    });
  });
};

populateAndSeedData();
