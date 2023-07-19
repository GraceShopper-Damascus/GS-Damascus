//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Order = require('./models/Order')
const OrderProducts = require('./models/OrderProducts')

//associations here!
User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(OrderProducts)
Product.hasMany(OrderProducts)

OrderProducts.belongsTo(Order)
OrderProducts.belongsTo(Product)


module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderProducts,
  },
}
