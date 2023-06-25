const router = require('express').Router();

router.get('/', (req, res) => {
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
  res.render('places/${req.params.id}');
});

module.exports = router;