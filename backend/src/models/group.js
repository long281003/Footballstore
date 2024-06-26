'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Group.hasMany(models.User)
            Group.hasMany(models.Product)
            Group.belongsToMany(models.Role, { through: 'Group_role', foreignKey: 'groupId' })
        }
    }
    Group.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Group',
    });
    return Group;
};