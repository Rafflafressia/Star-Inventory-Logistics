const seedCategories = require('./category-seed');
const seedProducts = require('./product-seed');
const seedTags = require('./tag-seed');
const seedAuth = require('./auth-seed');
const seedUserInfo = require('./userinfo-seed')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedAuth();
  console.log('\n----- AUTH SEEDED -----\n');

  await seedUserInfo();
  console.log('\n----- USER INFO SEEDED -----\n');


  process.exit(0);
};

seedAll();
