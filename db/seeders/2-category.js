'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [
      { name: 'Programming for Kids', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Programming', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Science', createdAt: new Date(), updatedAt: new Date()},
      { name: 'Marketing', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Analytics', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Design', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Management', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Work and Hobby', createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Categories', null, {});

  }
};
