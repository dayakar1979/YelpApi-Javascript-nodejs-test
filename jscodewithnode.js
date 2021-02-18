'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'wV6LiKOide921Z2lA9dmbe_uySVYXBP4LvT6BwJFC2LWOyPX0SqsTBEyN6Ro82xBH91WQZbIWm4VRdAdgtEjjdcRImlqZctn-QWisKsRya7OXF-NRZWhqx45cJYsYHYx';

const searchRequest = {
  term:'Ice Cream',
  location: 'alpharetta,ga'
};
const count = 5;
const businesses = [];


const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  response.jsonBody.businesses.forEach(iterate);
  
}).catch(e => {
  console.log(e);
});

function iterate(item, index) {
  if(index < count) {
      client.reviews(item.id).then(response => {
      console.log('Business Name: ' + item.name);
      console.log('Address ' + item.location.address1 +', ' + item.location.city + ', ' + item.location.state + '.');
      console.log('Review ' + response.jsonBody.reviews[0].text);
      console.log('Reviewer ' + response.jsonBody.reviews[0].user.name)
    })
  } 
}