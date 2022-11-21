"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Businesses",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        ownerId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Users" },
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
        imageUrl: {
          type: Sequelize.STRING(255),
        },
        description: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        address: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        city: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        state: {
          allowNull: false,
          type: Sequelize.STRING(20),
        },
        zipCode: {
          allowNull: false,
          type: Sequelize.INTEGER(5),
        },
        lat: {
          allowNull: true,
          type: Sequelize.DOUBLE,
        },
        lng: {
          allowNull: true,
          type: Sequelize.DOUBLE,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      options
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Businesses", options);
  },
};
