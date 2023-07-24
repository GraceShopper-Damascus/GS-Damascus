//this is the access point for all things database related!

const { Sequelize } = require('sequelize')
const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Order = require('./models/Order')
const Cart = require('./models/Cart')

// I think if you're using this, CartProducts.js can be deleted
const CartProduct = db.define("cartProduct", {
  quantity: Sequelize.INTEGER,
  // you might not need this -- the product already has a price, right?
  price: Sequelize.INTEGER,
})

const OrderProduct = db.define("orderProduct", {
  quantity: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
})

// associations go here!
User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Product.belongsToMany(Cart, {through: CartProduct, foreignKey: "productId"})
Cart.belongsToMany(Product, {through: CartProduct, foreignKey: "cartId"})

Order.belongsToMany(Product, {through: OrderProduct, foreignKey: "orderId"})
Product.belongsToMany(Order, {through: OrderProduct, foreignKey: "productId"})

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Cart,
    CartProduct,
    OrderProduct,
  },
}

