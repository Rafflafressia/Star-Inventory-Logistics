const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const managerRoutes = require('./managerRoutes.js');
const employeeRoutes = require('./employeeRoutes.js');

router.use('/', homeRoutes);
router.use('/manager', managerRoutes);
router.use('/employee', employeeRoutes);


module.exports = router;
