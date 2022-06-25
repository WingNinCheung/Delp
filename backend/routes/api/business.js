const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { Business, User } = require("../../db/models");

router.get("/", async (req, res) => {
  const businesses = await Business.findAll({
    include: User,
  });
  return res.json(businesses);
});

module.exports = router;
