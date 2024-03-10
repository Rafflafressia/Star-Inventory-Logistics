const router = require('express').Router();
const { UserData, Category, Employee, Product } = require('../models');
const withAuth = require('../utils/auth');


// main page router, shows default category
router.get('/', async (req, res) => {
  try {

    const categoryData = await Category.findAll({
      attributes:['category_name'],
      include: {model: Product, attributes: ['product_name']}
    });

    const productData = await Product.findAll({
      attributes:['product_name']
    });

    const products = productData.map((product) => product.get({plain: true}));
    const categories = categoryData.map((category) => category.get({plain: true}));
    //TODO get produt data here and render
    res.render('homepage', {products, categories});
  } catch (err) {
    res.status(500).json(err);
  }
});


// login page
//  router.get('/', async(req, res) => {
  
//   res.render('login');
// });


// // show product details
// router.get('/product-detail', async(req, res) => {
//   res.render('productDetail');
// })



module.exports = router;