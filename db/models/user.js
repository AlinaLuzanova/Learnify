'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Course}) {
      // define association here
      User.belongsToMany(Course, {through: 'UserCourse', foreignKey:'user_id', otherKey: 'course_id'})
      User.belongsToMany(Course,{through:'Rating', foreignKey:'user_id'} )
    }
  }
  User.init({
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
