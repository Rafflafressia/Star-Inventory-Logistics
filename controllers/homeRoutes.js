const router = require('express').Router();
const { UserData, Category, Employee, Product } = require('../models');
const withAuth = require('../utils/auth');


// main page router, shows default products
router.get('/', async (req, res) => {
  try {

    const categoryData = await Category.findAll({
      attributes:['category_name'],
      include: {model: Product, attributes: ['product_name']}
    });

    const productData = await Product.findAll({
      include:[{model:Category}]
    });   

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

});


// show product details
// HTTP REQUEST TO GET PRODUCTDETAIL PAGE
router.get('/productDetail/:product_id', async(req, res) => {

  try {

    const productData = await Product.findByPk(req.params.product_id, {
      attributes: ['product_name', 'price', 'stock', 'description'],
    });

    if (!productData){
      return res.status(404).json({message: "Baboob: Product could not be found"});
    }

  const productDetails = productData.get({plain: true});

  res.render('productDetail', { productDetails });

  } catch(err) {

  res.status(404).json({message:"Maboob:This product does not exist"});

  }

});


// this is the page to update catalog and add employee for manager
router.get('/manage-option', async(req, res) => {
  res.render('manageOption');
});

router.get('/manage-option/product-related', async(req, res) => {
  res.render('productRelated');
});

//page to add product
router.get('/manage-option/productRelated/add-product', async(req, res) => {
  res.render('addProduct');
  });
  
// page to search a product
router.get('/manage-option/productRelated/search-product', async(req, res) => {
  res.render('searchProduct');
});

//page to add employee
router.get('/manage-option/add-employee', async(req, res) => {
  res.render('addEmployee');
});


module.exports = router;