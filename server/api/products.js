const router = require("express").Router();

const {
  models: { Product },
} = require("../db");

//GET ALL Products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

//Single Product: GET /api/product/:productId
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});




// update product details: PUT /api/products/:productId
router.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);

    await product.update(req.body);

    //create object to hold updated product info and a update message
    const details = {
      message: "Product has been upated! 👍",
      product,
    };
    //send details object as JSON response
    res.json(details);
  } catch (err) {
    next(err);
  }
});

// Delete product from cart: Delete /api/product/:productId
router.delete("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();

    //create object to hold updated product info and a update message
    const details = {
      message: "Product Deleted 🗑️ ",
      product,
    };
    //send details object as JSON response
    res.json(details);
  } catch (err) {
    next(err);
  }
});

//create new product: POST /api/products  
router.post("/", async (req, res, next) => {
  try {
    const { name, price, quantity, description, image, upc, category} = req.body;

  
    const newProduct = await Product.create({
      name,
      price,
      quantity,
      description,
      //the following are optional
      image, 
      upc, 
      category,
    });

    // Send the newly created product as the response
    res.json(newProduct);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
