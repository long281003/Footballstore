const db = require('../models/index')

const cartproduct = async () => {
    try {
        let cart = await db.Cart.findAll({
            attributes: ['image', 'nameproduct', 'quantity', 'price'],
            raw: true
        })
        return {
            EM: 'success!',
            EC: 0,
            DT: cart
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrong',
            EC: 1,
            DT: ''
        }
    }
}

module.exports = {
    cartproduct
}