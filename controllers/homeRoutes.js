const router = require('express').Router();
const { UserData, Category, Employee, Product } = require('../models');
const {withAuth, isManager} = require('../utils/auth');


// main page router, shows default category
router.get('/', withAuth,async (req, res) => {
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
  res.render('login',{"logged_in": req.session.logged_in});

});


// show product details
router.get('/product-detail', withAuth, async(req, res) => {
  res.render('productDetail');
});


// this is the page to update catalog and add employee for manager
router.get('/manage-option', withAuth, (req, res) => {
  if(req.session.position === "manager"){
    res.render('manageOption');
  }
  else{
    
    res.redirect('/');
  }
  
  
});

router.get('/manage-option/product-related', withAuth, async(req, res) => {
  
  if(req.session.position === "manager"){
    res.render('productRelated');
  }
  else{
    res.redirect('/');
  }
});

//page to add product
router.get('/manage-option/productRelated/add-product', withAuth,async(req, res) => {
  

  if(req.session.position === "manager"){
    res.render('addProduct');
  }
  else{
    res.redirect('/');
  }
  });
  
// page to search a product
router.get('/manage-option/productRelated/search-product', withAuth,async(req, res) => {
  res.render('searchProduct');
});

//page to add employee
router.get('/manage-option/add-employee', withAuth, async(req, res) => {
  
  if(req.session.position === "manager"){
    res.render('addEmployee');
  }
  else{
    res.redirect('/');
  }
});


module.exports = router;