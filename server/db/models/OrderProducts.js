const Sequelize = require('sequelize');
const db = require('../db');

const OrderProducts = db.define('orderProducts', {
  quantity: Sequelize.INTEGER,
  price: Sequelize.FLOAT,
})

module.exports = OrderProducts;
