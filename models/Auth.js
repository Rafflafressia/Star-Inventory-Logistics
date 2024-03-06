const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');


class Auth extends Model {
    checkPassword(loginPw) {
        console.log(this.password)
        return bcrypt.compareSync(loginPw, this.password);
    }
};

Auth.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
},    
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'auth',
});

module.exports = Auth;