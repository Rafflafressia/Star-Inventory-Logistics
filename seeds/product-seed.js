const { Product } = require('../models');

const productData = [
  {
    "product_name": "Acoustic Guitar",
    "price": 199.99,
    "cost": 100.00,
    "stock": 50,
    "description": "High-quality acoustic guitar for beginners",
    "category_id": 1
  },
  {
    "product_name": "Electric Guitar",
    "price": 299.99,
    "cost": 150.00,
    "stock": 30,
    "description": "Professional electric guitar with amplifier",
    "category_id": 2
  },
  {
    "product_name": "Violin",
    "price": 249.99,
    "cost": 120.00,
    "stock": 20,
    "description": "Classic violin for music enthusiasts",
    "category_id": 3
  },
  {
    "product_name": "Piano",
    "price": 999.99,
    "cost": 500.00,
    "stock": 10,
    "description": "Grand piano for professional musicians",
    "category_id": 4
  },
  {
    "product_name": "Drum Set",
    "price": 399.99,
    "cost": 200.00,
    "stock": 15,
    "description": "Complete drum set for drummers",
    "category_id": 5
  },
  {
    "product_name": "Saxophone",
    "price": 349.99,
    "cost": 180.00,
    "stock": 25,
    "description": "Elegant saxophone for jazz players",
    "category_id": 1
  },
  {
    "product_name": "Flute",
    "price": 149.99,
    "cost": 80.00,
    "stock": 30,
    "description": "Beautiful flute for classical music",
    "category_id": 2
  },
  {
    "product_name": "Trumpet",
    "price": 199.99,
    "cost": 100.00,
    "stock": 20,
    "description": "Classic trumpet for brass players",
    "category_id": 3
  },
  {
    "product_name": "Cello",
    "price": 299.99,
    "cost": 150.00,
    "stock": 15,
    "description": "Versatile cello for orchestra performances",
    "category_id": 4
  },
  {
    "product_name": "Harp",
    "price": 499.99,
    "cost": 250.00,
    "stock": 5,
    "description": "Elegant harp for enchanting melodies",
    "category_id": 5
  },
  {
    "product_name": "Trombone",
    "price": 179.99,
    "cost": 90.00,
    "stock": 10,
    "description": "Powerful trombone for brass ensemble",
    "category_id": 1
  },
  {
    "product_name": "Clarinet",
    "price": 129.99,
    "cost": 70.00,
    "stock": 15,
    "description": "Smooth clarinet for woodwind players",
    "category_id": 2
  },
  {
    "product_name": "Xylophone",
    "price": 99.99,
    "cost": 50.00,
    "stock": 20,
    "description": "Colorful xylophone for percussionists",
    "category_id": 3
  },
  {
    "product_name": "Accordion",
    "price": 299.99,
    "cost": 150.00,
    "stock": 5,
    "description": "Traditional accordion for folk music",
    "category_id": 4
  },
  {
    "product_name": "Bagpipes",
    "price": 199.99,
    "cost": 100.00,
    "stock": 8,
    "description": "Authentic bagpipes for Celtic tunes",
    "category_id": 5
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
