const product_middleware = require('./product.middleware');
const user_middleware = require('./user.middleware');
const vending_middleware = require('./vending.middleware');


module.exports = Object.freeze({
    product_middleware,
    user_middleware,
    vending_middleware
});