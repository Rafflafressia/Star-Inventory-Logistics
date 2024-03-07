const UserData = require('./UserData.js');
const Employee = require('./Employee.js');
const Category = require('./Category.js');
const Product =require('./Product.js');

//TODO add delete here
// one auth account only has one user info
UserData.hasOne(Employee, {foreignKey: 'user_id'});
Employee.belongsTo(UserData, {foreignKey: 'user_id',onDelete: "CASCADE",onUpdate: "CASCADE"});

//one category may inlcude many product
Category.hasMany(Product, {foreignKey: 'category_id',onDelete: "SET NULL"});
Product.belongsTo(Category, {foreignKey: 'category_id',onDelete: "SET NULL"});


module.exports = {
    UserData,
    Employee,
    Category,
    Product,
}