const router = require('express').Router();
const { UserData, Category, Employee, Product } = require('../models');
const withAuth = require('../utils/auth');


// main page router, shows default category
router.get('/', async (req, res) => {
  try {

    const productData = await Product.findAll({
      include:[{model:Category}]
    })

    const categoryData = await Category.findAll({
      include:[{model:Product}]
    })

   

    const products = productData.map((product) => product.get({plain: true}));
    const categories = categoryData.map((category) => category.get({plain: true}));

    res.render('homepage', {products,categories});
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