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
        // include: {
        //   cartProduct
        // }
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


// Add a product to the cart for the logged-in user
// POST /api/users/:userId/cart
router.post("/:userId/cart", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;

    // Check if the logged-in user id is a match
    if (req.params.userId !== userId) {
      return res.status(403).json({ message: "unauthorized user!" });
    }

    // Find the user and their associated cart
    const user = await User.findByPk(userId, {
      include: { model: Cart },
    });

    // Find the product to be added to the cart
    const product = await Product.findByPk(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    // Add the product to the cart with quantity 1
    await user.cart.addProduct(product, { through: { quantity: 1 } });

    // Fetch the updated user with the cart
    const updatedUser = await User.findByPk(userId, {
      include: { model: Cart },
    });

    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});



//get individual users cart: GET api/users/:userId/cart
router.get("/:userId/cart", async (req,res,next) => {
  try{
    const { userId } = req.params;

    const user = await User.findByPk (userId, {
      // attributes: ["id", "email"],
      include: {
        model: Cart,
        include: { model: Product},
      },
    })

    res.json(user.cart);
  } catch (err) {
    next(err)
  }

});




// Delete User from db: Delete /api/users/:userId
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();

    //create object to hold updated product info and a update message
    const details = {
      message: "User Deleted 🗑️ ",
      user,
    };
    //send details object as JSON response
    res.json(details);
  } catch (err) {
    next(err);
  }
});