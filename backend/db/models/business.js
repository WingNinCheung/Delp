"use strict";
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      ownerId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      description: DataTypes.TEXT,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.INTEGER,
    },
    {}
  );
  Business.associate = function (models) {
    // associations can be defined here
    Business.hasMany(models.Review, {
      foreignKey: "businessId",
    });
    Business.belongsTo(models.User, {
      foreignKey: "ownerId",
    });
  };
  return Business;
};
