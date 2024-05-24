'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    }
    Order.init({
        UserId: DataTypes.INTEGER,
        nameProduct: DataTypes.STRING,
        status: DataTypes.STRING,
        image: DataTypes.STRING,
        total: DataTypes.INTEGER,
        bookingdate: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};