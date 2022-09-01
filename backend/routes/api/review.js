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

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const reviews = await Review.findAll();
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

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const newReview = req.body;
    const { userId, businessId, rating, reviewBody } = newReview;

    // console.log("*****", userId, businessId, rating, reviewBody);

    const data = await Review.update(
      {
        userId,
        businessId,
        rating,
        reviewBody,
      },
      {
        where: { id },
      }
    );

    const review = await Review.findAll({
      where: { id },
    });
    return res.json(id);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    await Review.destroy({
      where: { id },
    });

    return res.json(id);
  })
);
module.exports = router;
