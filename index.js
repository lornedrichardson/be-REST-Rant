// Require needed modules
const express = require('express');

// Initialize the app object
const app = express();

// Create a homepage route
app.get('/', (req, res) => {
  res.send('Whatever you want to say');
});

// Listen for connections
app.listen(3000, () => {
  console.log('Awake and listening');
});