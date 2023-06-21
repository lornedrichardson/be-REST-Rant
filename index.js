// Require needed modules
require('dotenv').config();
const express = require('express');

// Initialize the app object
const app = express();

app.use('/places', require('controllers/places'));

// Create a homepage route
app.get('/', (req, res) => {
  res.send('Whatever you want to say');
});

// Create a wildcard route
app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>');
});

// Listen for connections
app.listen(process.env.PORT, () => {
  console.log('Awake and listening');
});