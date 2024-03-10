const router = require('express').Router();
const { UserData, Category, Employee, Product } = require('../models');
const withAuth = require('../utils/auth');


// main page router, shows default category
router.get('/', async (req, res) => {
  try {

    const productData = await Product.findAll({
      attributes:['product_name']
    })

    const products = productData.map((product) => product.get({plain: true}));
    //TODO get produt data here and render
    res.render('homepage', {products});
  } catch (err) {
    res.status(500).json(err);
  }
});


// // login page
 router.get('/login', async(req, res) => {
  
  res.render('login'); })


// show product details
router.get('/product-detail', async(req, res) => {
  res.render('productDetail');
})



module.exports = router;