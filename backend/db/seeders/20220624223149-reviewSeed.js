"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(
      options,
      [
        {
          userId: 2,
          businessId: 1,
          rating: 4,
          reviewBody: "One of the best ramen place I've ever been! 100% worth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          businessId: 2,
          rating: 2,
          reviewBody: "It tasted a bit weird. I will not come again",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          businessId: 3,
          rating: 5,
          reviewBody: "Love the food and waiters here!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          businessId: 4,
          rating: 1,
          reviewBody: "I've waited 30+mins for my food! DO NOT GO THERE GUYS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          businessId: 5,
          rating: 1,
          reviewBody:
            "Everything is bad here. I would rather go to McDonald's.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          businessId: 6,
          rating: 3,
          reviewBody:
            "Everything is average here. But this place has a good ocean view. Recommended for annivercity dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options, null, {});
  },
};
