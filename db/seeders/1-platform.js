'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Platforms', [
      {
        name: 'Coursera',
        website: 'https://www.coursera.org',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Udemy',
        website: 'https://www.udemy.com',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stepik',
        website: 'https://www.stepik.org',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'GeekBrains',
        website: 'https://gb.ru',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'edX',
        website: 'https://www.edx.org',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекториум',
        website: 'https://www.lektorium.tv',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Open Education',
        website: 'https://openedu.ru',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LinkedIn Learning',
        website: 'https://learning.linkedin.com/',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Skillshare',
        website: 'https://www.skillshare.com',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pluralsight',
        website: 'https://www.pluralsight.com/',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Codecademy',
        website: 'https://www.codecademy.com',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Khan Academy',
        website: 'https://www.khanacademy.org',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Яндекс Практикум',
        website: 'https://praktikum.yandex.ru',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Skillbox',
        website: 'https://skillbox.ru',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML Academy',
        website: 'https://htmlacademy.ru',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Java Rush',
        website: 'https://javarush.com',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хекслет',
        website: 'https://ru.hexlet.io',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netology',
        website: 'https://netology.ru',
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Platforms', null, {});

  }
};
