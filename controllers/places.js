const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => res.render('places/index', { places }))
  .catch(err => {
    console.log(err);
    res.render('error404');
  });
});

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => res.redirect('/places'))
  .catch(err => {
    console.log(err);
    res.render('error404');
  });
});

router.get('/new', (req, res) => {
  res.render('places/new');
});

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => res.render('places/show', { place }))
  .catch(err => {
    console.log(err);
    res.render('error404');
  });
});

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub');
});

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub');
});

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub');
});

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub');
});

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub');
});

module.exports = router;


/* router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/table-in-restaurant.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
  }];
  res.render('places/index', { places });
});

router.post('/', (req, res) => {
  if (!req.body.pic) { req.body.pic = 'http://placekitten.com/400/400' }
  if (!req.body.city) { req.body.city = 'Anytown' }
  if (!req.body.state) { req.body.state = 'USA' }
  places.push(req.body);
  res.redirect('/places');
});

router.get('/new', (req, res) => {
  res.render('places/new');
});

router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) res.render('error404');
  else res.render('places/show', { place: places[id], id });
});

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) res.render('error404');
  else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) res.render('error404');
  else res.render('places/edit', { place: places[id] });
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id) || !places[id]) res.render('error404');
  else {
    if (!req.body.pic) req.body.pic = 'http://placekitten.com/400/400';
    if (!req.body.city) req.body.city = 'Anytown';
    if (!req.body.state) req.body.state = 'USA';
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

module.exports = router; */