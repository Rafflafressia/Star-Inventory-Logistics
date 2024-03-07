const { UserData } = require('../models');

const authData = [
  {
    user_name: 'JasonG',
  },
  {
    password: "password1234"
  }
];

const seedAuth = () => UserData.bulkCreate(authData);

module.exports = seedAuth;
