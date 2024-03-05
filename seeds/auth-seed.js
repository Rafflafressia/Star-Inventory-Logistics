const { Auth } = require('../models');

const authData = [
  {
    user_name: 'JasonG',
  },
  {
    password: "password1234"
  }
];

const seedAuth = () => Auth.bulkCreate(authData);

module.exports = seedAuth;
