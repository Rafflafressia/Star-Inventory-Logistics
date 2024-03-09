const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    cost: 7.99,
    stock: 14,
    description: "Plain white T-Shirt, 100% cotton, machine washeable",
    category_id: 1
  },
  {
    product_name: 'Orange T-Shirt',
    price: 14.99,
    cost: 7.99,
    stock: 14,
    description: "Plain orange T-Shirt, 100% cotton, machine washeable",
    category_id: 1
  },
  {
    product_name: 'Blue T-Shirt',
    price: 14.99,
    cost: 7.99,
    stock: 14,
    description: "Plain blue T-Shirt, 100% cotton, machine washeable",
    category_id: 1
  },
  {
    product_name: 'Red T-Shirt',
    price: 14.99,
    cost: 7.99,
    stock: 14,
    description: "Plain red T-Shirt, 100% cotton, machine washeable",
    category_id: 1
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
