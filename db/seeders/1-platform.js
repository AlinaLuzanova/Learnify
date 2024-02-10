'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Platforms.jsx', [
      {
        name: 'Coursera',
        website: 'https://www.coursera.org',
        rating: null,
        image: 'https://marketingsatchel.com/wp-content/uploads/2019/08/coursera.png',
        description: 'Offers top-quality courses from renowned universities and institutions.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Udemy',
        website: 'https://www.udemy.com',
        rating: null,
        image: 'https://community.udemy.com/t5/image/serverpage/image-id/5269iACE5F3FBCEC35261?v=v2',
        description: 'Provides a vast selection of expert-led courses on various subjects.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stepik',
        website: 'https://www.stepik.org',
        rating: null,
        image: 'https://telegra.ph/file/423058a076f4aad014440.jpg',
        description: 'Delivers interactive courses covering a wide range of different  topics.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'GeekBrains',
        website: 'https://gb.ru',
        rating: null,
        image: 'https://admin.citysakh.ru/files/img/i/ec/42/a7fffd4664dfff7a1252d.png',
        description: 'Empowers learners to master tech skills through expert-led courses and projects.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'edX',
        website: 'https://www.edx.org',
        rating: null,
        image: 'https://terezast.com/wp-content/uploads/2022/04/edx_logo-1536x986.png',
        description: 'Offers high-quality online courses from top universities and institutions.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекториум',
        website: 'https://www.lektorium.tv',
        rating: null,
        image: 'https://yt3.googleusercontent.com/ytc/APkrFKYyfQYGqFz8hMFc15VrfhKLXULvDLIeo5vTVXlIlQ=s900-c-k-c0x00ffffff-no-rj',
        description: 'Provides a diverse range of educational content, from lectures to documentaries.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Open Education',
        website: 'https://openedu.ru',
        rating: null,
        image: 'https://etu.ru/assets/cache/images/cnot/images/1280x800-logo_oo%281%29.f04.jpg',
        description: 'Offers access to high-quality educational resources and courses for all levels of learners.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LinkedIn Learning',
        website: 'https://learning.linkedin.com/',
        rating: null,
        image: 'https://sm.pcmag.com/t/pcmag_uk/review/l/linkedin-l/linkedin-learning_9bk8.3840.jpg',
        description: 'Helps users develop skills for their careers through expert-led courses.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Skillshare',
        website: 'https://www.skillshare.com',
        rating: null,
        image: 'https://buyingplying.com/wp-content/uploads/2021/08/skillshare-logo.jpg',
        description: 'Empowers learners to explore creativity and learn new skills through inspiring classes.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pluralsight',
        website: 'https://www.pluralsight.com/',
        rating: null,
        image: 'https://cdn.mos.cms.futurecdn.net/PKpMfEic9fEWQdpMQXZQ6d.jpg',
        description: 'Helps users stay ahead in tech with expert-led courses and skill assessments.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Codecademy',
        website: 'https://www.codecademy.com',
        rating: null,
        image: 'https://self-starters.com/wp-content/uploads/2020/09/Codecademy-review-2048x1089.jpg',
        description: 'Offers interactive, hands-on courses to kickstart your coding journey.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Khan Academy',
        website: 'https://www.khanacademy.org',
        rating: null,
        image: 'https://wallpapercave.com/wp/wp7492810.jpg',
        description: 'Provides free educational resources and lessons for learners of all ages.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Яндекс Практикум',
        website: 'https://praktikum.yandex.ru',
        rating: null,
        image: 'https://itzine.ru/wp-content/uploads/2023/08/image-7-1536x799-1.png',
        description: 'Помогает развивать практические навыки в сфере IT и дизайна.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Skillbox',
        website: 'https://skillbox.ru',
        rating: null,
        image: 'https://geekhacker.ru/wp-content/uploads/2021/06/skillbox-2048x2048.jpg',
        description: 'Offers comprehensive courses and masterclasses to help you level up your skills.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HTML Academy',
        website: 'https://htmlacademy.ru',
        rating: null,
        image: 'https://smartprogress.do/uploadImages/001043298.jpg',
        description: 'Provides interactive courses and tutorials to help you become a web development pro.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Java Rush',
        website: 'https://javarush.com',
        rating: null,
        image: 'https://remoney.ru/uploads/posts/2023-07/logo-remoney-2023-07-18t200359_108.png',
        description: 'Is your go-to destination for mastering Java programming skills.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Хекслет',
        website: 'https://ru.hexlet.io',
        rating: null,
        image: 'https://kursfinder.ru/media/subject/Хекслет.jpg',
        description: 'Поможет вам стать профессионалом в сфере программирования и IT.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netology',
        website: 'https://netology.ru',
        rating: null,
        image: 'https://s3.mooc.ru/prod/source/origin/photos/companies/3557/large.png',
        description: 'Offers practical courses and hands-on projects to prepare you for real-world challenges.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elbrus Bootcamp',
        website: 'https://elbrusboot.camp/',
        rating: null,
        image: 'https://mayak.travel/m/picture/8/58/1240x520.dfcfb20029c8bcd5ac6c3525afb3d970c376ebb7f254b7edf7bda9045a5e1e4a.png',
        description: 'An intensive coding program designed to launch your career in tech.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Platforms.jsx', null, {});
  }
};
