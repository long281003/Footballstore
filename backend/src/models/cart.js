'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Cart.belongsTo(models.User)
            Cart.belongsToMany(models.Product, { through: 'Cart_item' })
        }
    }
    Cart.init({
        nameProduct: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Cart',
    });
    return Cart;
};