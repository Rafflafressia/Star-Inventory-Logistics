const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const managerRoutes = require('./managerRoutes.js');
const apiRoutes = require('./api');


router.use('/', homeRoutes);
router.use('/manager', managerRoutes);
router.use('/api', apiRoutes);


router.use((req, res) => {
    res.send("<h1>Cannot Connect to Route!</h1>")
});

module.exports = router;
