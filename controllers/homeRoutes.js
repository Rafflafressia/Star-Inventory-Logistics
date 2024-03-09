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