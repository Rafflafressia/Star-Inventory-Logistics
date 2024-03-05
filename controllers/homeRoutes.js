const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


// main page router, shows default category
router.get('/', withAuth, async (req, res) => {
  try {
    //TODO get category data here and render
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});


// login page
router.get('/login', async(req, res) => {
  res.render('login');
})

// sign up page
router.get('/signup', async(req, res) => {
  res.render('signup');
})











module.exports = router;