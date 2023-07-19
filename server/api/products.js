const router = require("express").Router();

const { Product } = require("../db");

//GET ALL Products 
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router; 