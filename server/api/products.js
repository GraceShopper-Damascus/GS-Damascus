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