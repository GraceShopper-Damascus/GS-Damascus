const router = require('express').Router(); 
const { Product } = require ('../db');

// Single Product: GET /api/product/:productId
router.get('/:id', async(req,res,next)=>{
    try{
        const product = await Product.findByPk(req.params.id)
        res.json(product)
    }
    catch(err){
        next(err)
    }
})


module.exports = router