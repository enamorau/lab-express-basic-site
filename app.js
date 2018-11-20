// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// cat route:
app.get('/page2', (request, response, next) => {
  response.sendFile(__dirname + '/views/page_2.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});