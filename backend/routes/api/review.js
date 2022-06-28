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

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const newReview = req.body;
    const { userId, businessId, rating, reviewBody } = newReview;

    await Review.create({ userId, businessId, rating, reviewBody });

    const review = await Review.findAll({
      where: { reviewBody },
      include: User,
    });
    // console.log(review);
    return res.json(review);
  })
);
module.exports = router;
