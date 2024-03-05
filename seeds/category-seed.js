const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
