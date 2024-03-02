const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Record extends Model {};

Record.init({
    record_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.STRING,
        references:{
            model:'user_info',
            key:'user_id'
        }

    },
    ori_price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    new_price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    ori_stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    new_stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'category_id'
        }
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
    modelName: 'record',
});

module.exports = Record;