const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model {};

Product.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name:{
        type: DataTypes.STRING,
        allowNull: false

    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cost:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        
    },
    image:{
        type: DataTypes.STRING,
        allowNull:false
        
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'category_id'
        }
    }

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});

module.exports = Product;