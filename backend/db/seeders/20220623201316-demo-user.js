"use strict";
const bcrypt = require("bcryptjs");
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user1@user.io",
          username: "IceCreamLover",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user2@user.io",
          username: "Alex",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user3@user.io",
          username: "Delpper",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user4@user.io",
          username: "Kobe",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user5@user.io",
          username: "Boba Guy",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user6@user.io",
          username: "Boba Girl",
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
    options.tableName = "Users";
    return queryInterface.bulkDelete(
      options,
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};
