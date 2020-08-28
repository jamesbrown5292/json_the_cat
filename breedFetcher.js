const request = require('request');
//allow the user to specify the breed name using command line arguments



const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    //handle an error message where connection is not established e.g. nonexistent domain name
    const data = JSON.parse(body);
    //handle the case where the page is not found
    if (!data.length) {
      callback('We couldn\'t find that breed.', null);
    } else {
      callback(null, data[0].description);
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  });
};

module.exports = { fetchBreedDescription };