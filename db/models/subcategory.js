'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Course, Category}) {
      // define association here
      Subcategory.hasMany(Course,{foreignKey:'subcategory_id'})
      Subcategory.belongsTo(Category, {foreignKey:'category_id'})
    }
  }
  Subcategory.init({
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};
