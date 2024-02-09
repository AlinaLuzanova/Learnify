'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Course}) {
      // define association here
      Platform.hasMany(Course, {foreignKey: 'platform_id'})
    }
  }
  Platform.init({
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    rating: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Platform',
  });
  return Platform;
};
