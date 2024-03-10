const router = require('express').Router();
const { Product, Category } = require('../../models');

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
            res.status(404).json({message: "Product could not be found"});
        }

        res.status(200).json(productData);
    } catch(err) {
        res.status(404).json({message:"This product does not exist"});
    }
});


// Create a new product
router.post('/', async (req, res) => {
    /*
        {
            product_name:
            price:
            stock:
            description:
            category_id:
        }
    */
    try {
        const productData = await Product.create(req.body);

        res.status(200).json(productData);

    } catch(err){

        res.status(400).json({message: "Could not create new post"});

    }
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