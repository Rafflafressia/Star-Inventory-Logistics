const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {};

Category.init({
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    category_name:{
        type: DataTypes.STRING,
        allowNull: false

    },
    description:{
        type: DataTypes.TEXT,
        
    },
    created_date:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
});

module.exports = Category;