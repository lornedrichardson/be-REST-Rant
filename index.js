// Require needed modules and globals
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rest-rant.f31yllr.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Initialize the app object
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

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