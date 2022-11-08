const { User } = require('../models');

const userData =
[
  {
    username: "Adam",
    email: "adamsherrill2@gmail.com",
    password: "password123"
  },
  {
    username: "Sam",
    email: "sam@email.com",
    password: "password1234"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;