const request = require('request');
const fs = require('fs');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib'
request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log(data, typeof data);
});