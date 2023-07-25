const router = require("express").Router();

const {
  models: { User, Cart, Product },
} = require("../db");

// GET all carts: GET /api/carts
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: {
        model: Cart,
        include: { model: Product },
      },
    });

    //get cart from each user
    const allCarts = users.map((user) => user.cart);
    res.json(allCarts);
  } catch (err) {
    next(err);
  }
});

// GET single cart: GET /api/carts/:cartId
router.get("/:cartId", async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const cart = await Cart.findByPk(cartId, {
      include: { model: Product },
    });

    //if cart not found:
    if (!cart) {
      return res.status(404).json({ message: "Cart not found! 😢 " });
    }

    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// PUT update cart details: PUT /api/cart/:cartId
router.put("/:cartId", async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const { quantity, total } = req.body;

    // Find the cart by its ID
    const cart = await Cart.findByPk(cartId);

    //if cart not found:
    if (!cart) {
      return res.status(404).json({ message: "Cart not found! 😢 " });
    }

    // Update the cart details
    await cart.update({ quantity, total });

    // get the updated cart
    const updatedCart = await Cart.findByPk(cartId);

    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
