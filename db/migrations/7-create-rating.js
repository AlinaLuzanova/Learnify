'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Courses',
          key:'id',
          onDelete:'CASCADE'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'id',
          onDelete:'CASCADE'
        }
      },
      rate:{
        type:Sequelize.STRING
      },
      comment:{
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ratings');
  }
};
