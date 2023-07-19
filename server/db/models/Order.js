const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  completed: Sequelize.BOOLEAN,
})

module.exports = Order;
