const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { Business, User, Review } = require("../../db/models");

router.get("/", async (req, res) => {
  const businesses = await Business.findAll({
    include: User,
  });
  return res.json(businesses);
});

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const business = ({
      ownerId,
      title,
      imageUrl,
      description,
      address,
      city,
      state,
      zipCode,
    } = await Business.create(req.body));
    return res.json(business);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const {
      id,
      ownerId,
      title,
      imageUrl,
      description,
      address,
      city,
      state,
      zipCode,
      lat,
      lng,
    } = req.body;

    await Business.update(
      {
        ownerId,
        title,
        imageUrl,
        description,
        address,
        city,
        state,
        zipCode,
        lat,
        lng,
      },
      {
        where: { id },
      }
    );
    return res.json(id);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const business = await Business.findByPk(id);

    // const reviews = await Review.findAll({
    //   where: { businessId: business.id },
    // });

    await Review.destroy({
      where: { businessId: business.id },
    });

    await Business.destroy({
      where: { id: business.id },
    });
    return res.json(id);
  })
);
module.exports = router;
