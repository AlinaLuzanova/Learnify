'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Platform, Subcategory}) {
      Course.belongsToMany(User, {through:'Favourite', foreignKey:'course_id'});
      Course.belongsTo(Platform, {foreignKey:'platform_id'});
      Course.belongsTo(Subcategory, {foreignKey:'subcategory_id'});
    }
  }
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    platform_id: DataTypes.INTEGER,
    subcategory_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    language: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
