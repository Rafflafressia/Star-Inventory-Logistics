const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const managerRoutes = require('./managerRoutes.js');


router.use('/', homeRoutes);
router.use('/manager', managerRoutes);


module.exports = router;
