const { Category } = require('../models');

const categoryData = [
  {
    "category_name": "String Instruments"
  },
  {
    "category_name": "Wind Instruments"
  },
  {
    "category_name": "Percussion Instruments"
  },
  {
    "category_name": "Keyboard Instruments"
  },
  {
    "category_name": "Folk Instruments"
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
