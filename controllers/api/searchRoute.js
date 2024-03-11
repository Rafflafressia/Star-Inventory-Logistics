
const router = require('express').Router();
const { Product, Category } = require('../../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    const product_name = req.query.product_name;
    
    let productData;

    if (product_name){
            productData = await Product.findAll({
                where: {
                    product_name: {[Op.like]: `%${product_name}%`}
                },
                include: [{ model: Category }]
        });

    }else {
     
        productData = await Product.findAll({
            include: [{ model: Category }]
        });
    }
    
    res.status(200).json(productData);

});

module.exports = router; 