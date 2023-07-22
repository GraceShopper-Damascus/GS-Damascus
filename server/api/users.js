const router = require("express").Router();
const {
  models: { User, Cart, Product},
} = require("../db");
module.exports = router;

//get all users
// GET /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//get cart details for logged-in user
// GET /api/users/:userId
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ["id", "email"],
      include: {
        model: Cart,
      },
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
});

//edit cart as a logged in user
//PUT /api/users/:userId/cart/:productId

router.put("/:userId/cart/:productId", async (req, res, next) => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    // Check if the logged-in user id is a match
    if (req.params.id !== userId) {
      return res
        .status(403)
        .json({ message: "unauthorized user!" });
    }
    // Update the cart item quantity 
    await Cart.update(
      { quantity: quantity },
      {
        where: {
          UserId: userId,
          productId: productId,
        },
      }
    );

    // Fetch the updated user with the cart
    const user = await User.findByPk(userId, {
      include: { model: Cart },
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
});
