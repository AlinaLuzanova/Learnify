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
    await queryInterface.bulkInsert('Courses', [{
      name: 'Frontend-developer',
      description: '6 months of learning tools for website layout and interface design. Contains 2 main blocks and 49 thematic modules. Suitable for IT beginners and specialists with a basic level. Promotes advancement in the profession of Frontend-developer. The program includes: web layout of sites and applications for all types of devices using JavaScript, adaptability tools. Training under the guidance of a supervisor. Diploma upon completion and employment assistance.',
      platform_id: 14,
      subcategory_id: 9,
      price: 131300,
      duration: 180,
      language: 'Russian',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        name: 'Professional HTML and CSS, Level 1',
        description: 'The course "Professional HTML and CSS, Level 1" is designed for web developers who know the basics of HTML and CSS and want to become a layout designer. It allows for 63 days of on-the-job training to master a popular profession. In the training program: live lectures, practical tasks, development and defense of a real project with full support of an individual mentor. This is 10-15 hours per week, or a total of 36 hours of theory and 90 hours of practice. The graduate will learn to work with Grid Layout, Flexible Boxes, Figma, Photoshop and JavaScript. A diploma is awarded.',
        platform_id: 15,
        subcategory_id: 9,
        price: 13900,
        duration: 180,
        language: 'Russian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Intensive "Full stack developer. JavaScript. Moscow',
        description: 'During the course, students solve hundreds of problems, master the JavaScript programming language and dozens of tools necessary for programmers, such as Express, Node.js, MongoDB, Polymer, React, and Git. At the end of the course, the HR Elbrus Coding Bootcamp team helps graduates find their dream job.',
        platform_id: 19,
        subcategory_id: 11,
        price: 305000,
        duration: 180,
        language: 'Russian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Faculty of  java-development',
        description: '12 months of in-depth study of Java language. Contains 5 blocks and 4 courses from partner companies. Suitable for beginners and programmers of related fields. Promotes advancement in the profession of Java developers. During the training students will develop a network chat, mobile game, cloud storage and online store, participate in team development. Mentor supervision and English for IT. Diploma graduates are guaranteed employment.',
        platform_id: 9,
        subcategory_id: 10,
        price: 199500,
        duration: 360,
        language: 'Russian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Profession Mobile Developer',
        description: 'You will learn how to create applications for iOS or Android devices from scratch. Practice on real tasks and add projects to your portfolio. You will be able to get a job as a mobile developer or work on a freelance basis.',
        platform_id: 14,
        subcategory_id: 12,
        price: 181672,
        duration: 730,
        language: 'Russian',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Courses', null, {});

  }
};
