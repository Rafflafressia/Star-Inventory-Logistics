const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/manage-option', async(req, res) => {
    res.render('manageOption');
})


module.exports = router;