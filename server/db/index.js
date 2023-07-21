//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Order = require('./models/Order')
const Cart = require('./models/Cart')


User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Product.belongsToMany(Cart, {through: 'cartProducts'})
Cart.belongsToMany(Product, {through: 'cartProducts'})

Order.belongsToMany(Product, {through: 'orderProducts'})
Product.belongsToMany(Order, {through: 'orderProducts'})

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Cart,
  },
}
