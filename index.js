// Require needed modules
require('dotenv').config();
const express = require('express');

// Initialize the app object
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/places', require('controllers/places'));

// Create a homepage route
app.get('/', (req, res) => {
  res.render('home');
});

// Create a wildcard route
app.get('*', (req, res) => {
  res.status(404).render('error404');
});

// Listen for connections
app.listen(process.env.PORT, () => {
  console.log('Awake and listening');
});