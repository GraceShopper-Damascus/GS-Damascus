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

// update product quantity: PUT /api/product/:productId
router.put('/:id', async (req,res,next) => {
  try{
    const product = await Product.findByPk(req.params.id)
    res.send(await product.update(req.body))
  }
  catch(err){
    next(err)
  }
})

// Delete product from cart: Delete /api/product/:productId
router.delete('/:id', async (req,res,next) => {
  try{
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.json({message: 'Product Removed!' });
  }
  catch(err){
    next(err);
  }
})

module.exports = router; 