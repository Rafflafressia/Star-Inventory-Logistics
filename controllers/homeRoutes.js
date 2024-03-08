const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


// main page router, shows default category
router.get('/', async (req, res) => {
  try {
    //TODO get category data here and render
    res.render('homePage',{position: req.session.position});
  } catch (err) {
    res.status(500).json(err);
  }
});


// login page
router.get('/login', async(req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');

})


// show product details
router.get('/product-detail', withAuth, async(req, res) => {
  res.render('productDetail');
})



module.exports = router;