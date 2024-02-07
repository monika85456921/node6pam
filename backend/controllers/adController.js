const Ad = require("../models/adModels");
const asyncHandler = require("express-async-handler");

//@desc Set ads
//@route POST /api/ads
//@access PRIVATE

const setAd = asyncHandler(async (req, res) => {
  if (!req.body.text || !req.body.description || !req.body.price) {
    res.status(400);
    throw new Error("Please add required flields");
  }
  const ad = await Ad.create({
    text: req.body.text,
    description: req.body.description,
    price: req.body.price,
    user: req.user.id,
  });
  res.status(200).json(ad);
});

module.exports = { setAd };
