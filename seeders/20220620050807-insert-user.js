'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
      uuid:'ef6f8c2e-4f94-4eb0-9f44-d59b2804790e',
      first_name: 'Helen',
      last_name: 'Tsai',
      user_image: 'helenTsai.jpeg',
      country: 'Taiwan',
      region: 'North',
      city: 'Hsinchu',
      member: 'admin',
      position: 'developer',
      email: 'helentsaidev@gmail.com',
      phone: "917-704-1172",
      password: "$2b$10$yvQeEht1Agz0Zd3tjvuNnuQcxb0mJEJGrrGqLSIcoN92BJKq1U34S",
      type: "email register",
      createdAt: '2022-06-15',
      updatedAt: '2022-06-15' 
    },
    {
      uuid: "125c671e-7f2f-4c33-814a-b240749d56ef",
      first_name: 'Helen',
      last_name: 'test',
      user_image: 'farmer.jpeg',
      country: 'Taiwan',
      region: 'middle',
      city: 'Taichung',
      member: 'admin',
      position: 'user',
      email: '123@123.com',
      phone: "000-000-000",
      password: "$2b$10$yvQeEht1Agz0Zd3tjvuNnuQcxb0mJEJGrrGqLSIcoN92BJKq1U34S",
      type: "email register",
      createdAt: '2022-06-15',
      updatedAt: '2022-06-15' 
    },
    {
      uuid: "f196a362-ce20-4ff5-a9be-30de2703d407",
      first_name: 'test',
      last_name: 'test',
      user_image: 'farmer.jpeg',
      country: 'Taiwan',
      region: 'south',
      city: 'Tainan',
      member: 'user',
      position: 'farmer',
      email: 'abc@abc.com',
      phone: "000-000-000",
      password: "$2b$10$yvQeEht1Agz0Zd3tjvuNnuQcxb0mJEJGrrGqLSIcoN92BJKq1U34S",
      type: "email register",
      createdAt: '2022-06-15',
      updatedAt: '2022-06-15' 
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
