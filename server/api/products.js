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




//Single Product: GET /api/product/:productId
router.get('/:id', async(req,res,next)=>{
    try{
        const product = await Product.findByPk(req.params.id)
        res.json(product)
    }
    catch(err){
        next(err)
    }
})



// Cart
router.post('/', async (req, res) => {
  try {
    const { name, description, price, quantity, imageUrl, upc, productId } = req.body;
    const product = await Product.findByPk(productId);

  

    const cartProduct = {
      productId: productId,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      imageUrl: imageUrl,
      upc: upc,
    };

    const cart = [];

    cart.push(cartProduct);

    return res.status(200).json({ message: 'Product added to cart' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error in code' });
  }
});


module.exports = router; 
