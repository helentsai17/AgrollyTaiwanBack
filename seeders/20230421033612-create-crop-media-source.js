'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Media', [{
        id:1,
        cropId: 19,
        link: 'https://www.youtube.com/watch?v=OC4humDKouE',
        type:'youtube video'
      },{
        id:2,
        cropId: 22,
        link: 'https://www.youtube.com/watch?v=Z9OJEI3cdmo',
        type:'youtube video'
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
