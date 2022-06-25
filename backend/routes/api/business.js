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
    const newBusiness = await Business.create(req.body);
    return res.redirect("/home");
  })
);

module.exports = router;
