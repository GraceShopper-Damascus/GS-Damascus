const Sequelize = require('sequelize');
const db = require('../db');

const OrderProduct = db.define('orderProduct', {
  quantity: Sequelize.INTEGER,
  price: Sequelize.FLOAT,
})

module.exports = OrderProduct;
