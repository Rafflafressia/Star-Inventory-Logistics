const router = require('express').Router();
const { Product, Category } = require('../../models');
const multer = require('multer');
const upload = multer({ dest: 'public/assets/save' });

// GET all Products
router.get('/', async (req, res) => {
    
    try {
        
        const productData = await Product.findAll({
            include: [{model: Category}]
        });

        res.status(200).json(productData);

    } catch (err) {
        res.status(404).json({message: "Could not get products"});
    }
});

// Get one product
router.get('/:id', async (req, res)=>{
    try {
        const productData = await Product.findByPk(req.params.id,{
            include: {model: Category}
        })

        if (!productData){
            res.status(404).json({message: "Babobb: Product could not be found"});
        }

        res.status(200).json(productData);
    } catch(err) {
        res.status(404).json({message:"Baboob:This product does not exist"});
    }
});


// Create a new product
router.post('/', upload.single('image'), async (req, res) => {
    /*
        {
            product_name:
            price:
            stock:
            description:
            category_id:
            iamge:
        }
    */

    // check if image_url or file are uploaded
    let image_path;
    if(req.body.image_url){
        image_path = req.body.image_url;
    }else if(req.file.filename){
        image_path = '\\assets\\save\\' + req.file.filename
    }else{
        image_path = "To update"
    }
   

    const product_data = {
        "product_name": req.body.product_name,
        "price":req.body.price,
        "stock":req.body.stock,
        "description":req.body.description,
        "category_id":req.body.category_id,
        "image":image_path
    }
    
    const productData = await Product.create(product_data);

    

    res.status(200).json(productData);


    
});

// update details for a product
router.put("/:id", async (req, res)=>{
    
    try {
        const productData = await Product.update(req.body, {
            where: {id: req.params.id},
        });

        if (!productData[0]) {
            res.status(404).json({message: 'No product found'});
        }

        res.status(200).json(productData);
    } catch(err) {
        res.status(500).json(err);
    }
});

// delete a product 
router.delete('/:id', async (req, res)=> {
    try {

        const productData = await Product.findByPk(req.params.id);

        if (!productData) {

            return res.status(404).json({message: "Product could not be found"});

        }

        await Product.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({message: 'Product has been deleted successfully'});

    } catch (err){

        console.error('Error deleting product: ' , err);

        res.status(500).json({error: 'Internal server error'});

    }
});

module.exports = router; 