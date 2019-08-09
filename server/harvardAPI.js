const axios = require('axios');
const db = require('../database');

const getMorePaintingsPlease = () => {
  axios
    .get(
      'https://api.harvardartmuseums.org/object?classification=Paintings&apikey=6da4cd00-b92b-11e9-8bc6-9108e1ae2170&gallery=1110|1320|1330&hasimage=1'
    )
    .then(response => {
      console.log(response.data.records[0].title);
      const data = response.data.records.map(object => {
        if (object.primaryimageurl && object.objectid && object.people[0].name && object.title) {
          return {
            id: object.objectid,
            artist: object.people[0].name,
            title: object.title,
            image: object.primaryimageurl
          };
        }
      });
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

getMorePaintingsPlease();
