const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET ALL CATEGORIES
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({

            // We only want the name of the Category
            attributes: ['category_name'],
            include: {model: Product, attributes: ['product_name'] }

        });

        res.status(200).json(categoryData);

    } catch(err){

        res.status(500).json(err);

    }
});

module.exports = router;