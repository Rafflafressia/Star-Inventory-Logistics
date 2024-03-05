const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// this is the page to update catalog and add employee for manager
router.get('/manage-option', async(req, res) => {
    res.render('manageOption');
})
  
router.get('/manage-option/product-related', async(req, res) => {
    res.render('productRelated');
})

//page to add product
router.get('/manage-option/productRelated/add-product', async(req, res) => {
    res.render('addProduct');
    })
    
    // page to search a product
    router.get('/manage-option/productRelated/search-product', async(req, res) => {
    res.render('searchProduct');
    })

//page to add employee
router.get('/manage-option/add-employee', async(req, res) => {
    res.render('addEmployee');
    
})







module.exports = router;