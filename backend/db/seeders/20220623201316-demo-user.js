"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user1@user.io",
          username: "icecreamLover",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user2@user.io",
          username: "Alex",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user3@user.io",
          username: "DelpLover",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user4@user.io",
          username: "Kobe",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user5@user.io",
          username: "BobaGuy",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user6@user.io",
          username: "BobaGirl",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user7@user.io",
          username: "Jeff Da Humble Child",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user8@user.io",
          username: "Theresa",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user9@user.io",
          username: "Ricky Delp",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user10@user.io",
          username: "App Academy",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};
