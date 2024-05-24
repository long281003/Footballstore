'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Group);
            Product.belongsTo(models.User);
            Product.belongsToMany(models.Cart, { through: 'Cart_item' })

        }
    }
    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.STRING,
        groupId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};