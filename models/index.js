const Auth = require('./Auth.js');
const UserInfo = require('./UserInfo.js');
const Category = require('./Category.js');
const Product =require('./Product.js');
const Tag = require('./Tag.js');

//TODO add delete here
// one auth account only has one user info
Auth.hasOne(UserInfo, {foreignKey: 'user_id',onDelete: "CASCASE"});
UserInfo.belongsTo(Auth, {foreignKey: 'user_id',onDelete: "CASCASE"});

//one category may inlcude many product
Category.hasMany(Product, {foreignKey: 'category_id',onDelete: "SET NULL"});
Product.belongsTo(Category, {foreignKey: 'category_id',onDelete: "SET NULL"});

Product.hasMany(Tag, {foreignKey: 'product_id',onDelete: "SET NULL"});
Tag.belongsTo(Product, {foreignKey: 'product_id',onDelete: "SET NULL"});




module.exports = {
    Auth,
    UserInfo,
    Category,
    Product,
    Tag

}