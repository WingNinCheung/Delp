const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { Business, User, Review } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const reviews = await Review.findAll({
      where: { businessId: id },
      include: User,
    });
    return res.json(reviews);
  })
);

module.exports = router;