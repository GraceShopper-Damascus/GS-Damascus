const Sequelize = require('sequelize')
const db = require('../db')

// this is a small thing, but I notice that this table name ("CartProducts") starts with a capital letter, but none of the others do. I don't know if it will cause problems anywhere, but just wanted to point it out.
const CartProducts = db.define("CartProducts", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  // I think some of this information may be redundant with the product; if a product is connected to this table through an association, then doesn't it already have a description and price?
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = CartProducts;
