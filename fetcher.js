const request = require('request');
const fs = require('fs');

const fetchArgs = process.argv.slice(2);

request(fetchArgs[0], (error, response, body) => {
 
  if (error) {
    console.log('An error occurred when retrieving the file. Process terminating.');
    process.exit();
  }
  if (response.statusCode !== 200) {
    console.log('Unexpected response received. Process terminating');
    process.exit();
  }
  fs.writeFile(fetchArgs[1], body, (err) => {
    if (err) {
      throw error;
    }
    console.log(`Downloaded and saved ${fs.statSync(fetchArgs[1])["size"]} bytes to ${fetchArgs[1]}`);
  });

});