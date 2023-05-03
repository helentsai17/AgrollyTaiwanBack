'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('People', [{
      id:1,
      cropId: 1,
      inital_kc: 0.5,
      dev_kc:0.75,
      mid_kc:1.05,
      last_kc:0.85,
      inital_days:50,
      dev_days:40,
      mid_days:30,
      last_days:30,
      version:2,
    },{
      id:2,
      cropId: 2,
      inital_kc: 0.4,
      dev_kc:0.89,
      mid_kc:0.92,
      last_kc:0.58,
      inital_days:21,
      dev_days:35,
      mid_days:42,
      last_days:35,
      version:1,
    }], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
