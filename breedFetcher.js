const request = require('request');
const fs = require('fs');
//allow the user to specify the breed name using command line arguments
const input = process.argv[2];



//Make a request to the server, set error, status and body parameters; parse body as JSON and return relevant information
const url = 'https://api.thecatapi.com/v1/index' + input;
console.log(url);
request(url, (error, response, body) => {
  //handle an error message where connection is not established e.g. nonexistent domain name
  if (error) {
    if (error.code === 'ENOTFOUND') {
      console.log('We couldn\'t find that page');
    }
    //handle status codes
  } else if (response) {
    const code = response.statusCode;
    switch (code) {
    case 404:
      console.log("The page you are looking for doesn't exist on this website");
      break;
    case 403:
      console.log("You do not have sufficient permissions to read the page that is being accessed");
      break;
    case 401:
      console.log("You have not been authenticated or have not been authenticated correctly");
      break;
    case 500:
      console.log("Internal server errror. The server cannot process the request for an unknown reason");
      break;
    case 503:
      console.log("Service unavailable. The server is overloaded or under maintenance");
      break;
    }
  } else {
    const data = JSON.parse(body);
    //handle the case where the page is not found
    if (!data.length) {
      console.log('We couldn\'t find that breed.');
    } else {
      console.log(data[0].description);
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
});