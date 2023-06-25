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

module.exports = router;