const { UserInfo } = require('../models');

const userData = [
  {
    tag_name: 'rock music',
  }
];

const seedUserInfo = () => UserInfo.bulkCreate(userData);

module.exports = seedUserInfo;
