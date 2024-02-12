'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const subcategories = [

      { name: 'Game Development for Kids', category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Animation and Storytelling', category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Robotics for Kids', category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mathematics and Logic', category_id: 1, createdAt: new Date(), updatedAt: new Date() },


      { name: 'Physics', category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chemistry', category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Biology', category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Medicine', category_id: 3, createdAt: new Date(), updatedAt: new Date() },


      { name: 'Frontend Development', category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Backend Development', category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fullstack Development', category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mobile Development', category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Data Science & Machine Learning', category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game Development', category_id: 2, createdAt: new Date(), updatedAt: new Date() },


      { name: 'Social Media Marketing', category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Search Engine Optimization (SEO)', category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Content Marketing', category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Email Marketing', category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Influencer Marketing', category_id: 4, createdAt: new Date(), updatedAt: new Date() },


      { name: 'Data Analysis', category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Data Visualization', category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Business Intelligence (BI)', category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Predictive Analytics', category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Big Data Analytics', category_id: 5, createdAt: new Date(), updatedAt: new Date() },


      { name: 'Graphic Design', category_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'UI/UX Design', category_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Web Design', category_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Motion Graphics', category_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Interior Design', category_id: 6, createdAt: new Date(), updatedAt: new Date() },


      { name: 'Project Management', category_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Leadership Skills', category_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Entrepreneurship', category_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Time Management', category_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Communication Skills', category_id: 7, createdAt: new Date(), updatedAt: new Date() },


      { name: 'English Language', category_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Personal Finance', category_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cooking and Baking', category_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Photography', category_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fitness and Wellness', category_id: 8, createdAt: new Date(), updatedAt: new Date() },

    ];

    // Добавляем подкатегории в базу данных
    await queryInterface.bulkInsert('Subcategories', subcategories, {});
  },

  async down(queryInterface, Sequelize) {
    // Добавьте здесь код для отката миграции, если необходимо
    await queryInterface.bulkDelete('Subcategories', null, {});
  }
};
