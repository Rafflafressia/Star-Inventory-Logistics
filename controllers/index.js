const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');

// set up html router and api router
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


router.use((req, res) => {
    res.send("<h1>Cannot Connect to Route!</h1>")
});

module.exports = router;
