const { Product } = require('../models');

const productData = [
  {
    "product_name": "Acoustic Guitar",
    "price": 199.99,
    "cost": 100.00,
    "stock": 50,
    "description": "High-quality acoustic guitar for beginners",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 1
  },
  {
    "product_name": "Electric Guitar",
    "price": 299.99,
    "cost": 150.00,
    "stock": 30,
    "description": "Professional electric guitar with amplifier",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 2
  },
  {
    "product_name": "Violin",
    "price": 249.99,
    "cost": 120.00,
    "stock": 20,
    "description": "Classic violin for music enthusiasts",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 3
  },
  {
    "product_name": "Piano",
    "price": 999.99,
    "cost": 500.00,
    "stock": 10,
    "description": "Grand piano for professional musicians",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 4
  },
  {
    "product_name": "Drum Set",
    "price": 399.99,
    "cost": 200.00,
    "stock": 15,
    "description": "Complete drum set for drummers",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 5
  },
  {
    "product_name": "Saxophone",
    "price": 349.99,
    "cost": 180.00,
    "stock": 25,
    "description": "Elegant saxophone for jazz players",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 1
  },
  {
    "product_name": "Flute",
    "price": 149.99,
    "cost": 80.00,
    "stock": 30,
    "description": "Beautiful flute for classical music",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 2
  },
  {
    "product_name": "Trumpet",
    "price": 199.99,
    "cost": 100.00,
    "stock": 20,
    "description": "Classic trumpet for brass players",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 3
  },
  {
    "product_name": "Cello",
    "price": 299.99,
    "cost": 150.00,
    "stock": 15,
    "description": "Versatile cello for orchestra performances",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 4
  },
  {
    "product_name": "Harp",
    "price": 499.99,
    "cost": 250.00,
    "stock": 5,
    "description": "Elegant harp for enchanting melodies",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 5
  },
  {
    "product_name": "Trombone",
    "price": 179.99,
    "cost": 90.00,
    "stock": 10,
    "description": "Powerful trombone for brass ensemble",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 1
  },
  {
    "product_name": "Clarinet",
    "price": 129.99,
    "cost": 70.00,
    "stock": 15,
    "description": "Smooth clarinet for woodwind players",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 2
  },
  {
    "product_name": "Xylophone",
    "price": 99.99,
    "cost": 50.00,
    "stock": 20,
    "description": "Colorful xylophone for percussionists",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 3
  },
  {
    "product_name": "Accordion",
    "price": 299.99,
    "cost": 150.00,
    "stock": 5,
    "description": "Traditional accordion for folk music",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 4
  },
  {
    "product_name": "Bagpipes",
    "price": 199.99,
    "cost": 100.00,
    "stock": 8,
    "description": "Authentic bagpipes for Celtic tunes",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 5
  },
  {
    product_name: 'Orange T-Shirt',
    price: 14.99,
    cost: 7.99,
    stock: 14,
    description: "Plain orange T-Shirt, 100% cotton, machine washeable",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    category_id: 1
  },
  {
    product_name: 'Blue T-Shirt',
    price: 14.99,
    cost: 7.99,
    stock: 14,
    description: "Plain blue T-Shirt, 100% cotton, machine washeable",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    category_id: 1
  },
  {
    product_name: 'Red T-Shirt',
    price: 14.99,
    cost: 7.99,
    stock: 14,
    description: "Plain red T-Shirt, 100% cotton, machine washeable",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    category_id: 1
  },
  {
    "product_name": "Clarinet",
    "price": 129.99,
    "cost": 70.00,
    "stock": 15,
    "description": "Smooth clarinet for woodwind players",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 2
  },
  {
    "product_name": "Xylophone",
    "price": 99.99,
    "cost": 50.00,
    "stock": 20,
    "description": "Colorful xylophone for percussionists",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 3
  },
  {
    "product_name": "Accordion",
    "price": 299.99,
    "cost": 150.00,
    "stock": 5,
    "description": "Traditional accordion for folk music",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 4
  },
  {
    "product_name": "Bagpipes",
    "price": 199.99,
    "cost": 100.00,
    "stock": 8,
    "description": "Authentic bagpipes for Celtic tunes",
    "image":"https://m.media-amazon.com/images/I/71emJAa5kaL._AC_SL1500_.jpg",
    "category_id": 5
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
