const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
    // we talked about this briefly earlier - I think this quantity/total is meant to represent the overall amount for the cart, right? will it get updated whenever you add a product?
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    total: {
        type: Sequelize.FLOAT,
        defaultValue: 0.00,
        validate: {
            min: 0.00
        }
    },
})

module.exports = Cart;
