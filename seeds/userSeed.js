const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'Tom Bombadil',
    email: 'test@test.com',
    password: 'password123',
  },
];

userData.password = bcrypt.hash(userData.password, 10);

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
