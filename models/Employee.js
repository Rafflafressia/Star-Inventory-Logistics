const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');



class Employee extends Model {};

Employee.init({
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'userdata',
            key: 'user_id'
        }
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    position:{
        type: DataTypes.STRING,
        allowNull: false
    },
},    
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
});

module.exports = Employee;