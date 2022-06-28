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

    const data = await Review.create({
      userId,
      businessId,
      rating,
      reviewBody,
    });

    return res.json(data);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const review = await Review.findByPk(id);

    await Review.destroy({
      where: { id },
    });
    return res.json(id);
  })
);
module.exports = router;
