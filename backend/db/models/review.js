"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: DataTypes.INTEGER,
      businessId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      reviewBody: DataTypes.TEXT,
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Business, {
      foreignKey: "businessId",
    });
    Review.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Review;
};
