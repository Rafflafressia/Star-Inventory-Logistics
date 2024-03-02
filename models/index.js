const Auth = require('./Auth.js');
const UserInfo = require('./UserInfo.js');
const Category = require('./Category.js');
const Product =require('./Product.js');
const Record = require('./Record.js');


// one auth account only has one user info
Auth.hasOne(UserInfo, {foreignKey: 'user_id'});
UserInfo.belongsTo(Auth, {foreignKey: 'user_id'});

// one user can have many record
UserInfo.hasMany(Record, {foreignKey: 'user_id'});
Record.belongsTo(UserInfo, {foreignKey: 'user_id'});

//one category may inlcude many product
Category.hasMany(Product, {foreignKey: 'category_id'});
Product.belongsTo(Category, {foreignKey: 'category_id'});

// one record only has one product
Record.hasOne(Product, {foreignKey: 'record_id'});
Product.belongsTo(Record, {foreignKey: 'record_id'});




module.exports = {
    Auth,
    UserInfo,
    Category,
    Product,
    Record

}