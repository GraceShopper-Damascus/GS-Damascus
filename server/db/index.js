//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Order = require('./models/Order')
const OrderProduct = require('./models/OrderProduct')
const Cart = require('./models/Cart')
const CartProduct = require('./models/CartProduct')

//associations here!
User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(OrderProduct)
Product.hasMany(OrderProduct)

OrderProduct.belongsTo(Order)
OrderProduct.belongsTo(Product)

User.hasOne(Cart)
Cart.belongsTo(User)

Product.hasMany(CartProduct)
Cart.hasMany(CartProduct)

CartProduct.belongsTo(Cart)
CartProduct.belongsTo(Product)


module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderProduct,
    Cart,
    CartProduct,
  },
}
