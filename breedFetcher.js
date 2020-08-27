const request = require('request');
const fs = require('fs');
//allow the user to specify the breed name using command line arguments
const input = process.argv[2];



//Make a request to the server, set error, status and body parameters; parse body as JSON and return relevant information
const url = 'https://appi.thecatapi.com/v1/breeds/search?q=' + input;
console.log(url);
request(url, (error, response, body) => {
  if (error.code === 'ENOTFOUND') {
    console.log('We couldn\'t find that page');
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    //handle the case where the page is not found
    if (!data.length) {
      console.log('We couldn\'t find that breed.');
    } else {
      console.log(data[0].description);
    }
  }
});