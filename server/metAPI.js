const axios = require('axios');
const db = require('../database');

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
              response.data.artistDisplayName.length > 1 &&
              response.data.classification === 'Paintings'
            ) {
              console.log('VERY COOL');
              setTimeout(() => {
                db.seedDB(response.data);
              }, 2);
            }
          })
          .catch(error => {
            console.log('WHOOPS');
          });
      });
    })
    .catch(error => {
      console.log('DOUBLE WHOOPS');
    });
};

populatePaintingsAndSeedDB();
