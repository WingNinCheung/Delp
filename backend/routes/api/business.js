const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
// const { handleValidationErrors } = require("../../utils/validation");
// const { check } = require("express-validator");

const { Business, User } = require("../../db/models");

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
    console.log("id is ", id);
    const business = await Business.findByPk(id);
    await Business.destroy({
      where: { id: business.id },
    });
    return res.json(id);
  })
);
module.exports = router;
