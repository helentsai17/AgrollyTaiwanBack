'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('seasonplants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cropId: {
        type: DataTypes.INTEGER
      },
      daystring: {
        type: DataTypes.STRING
      },
      location: {
        type: DataTypes.STRING
      },
      plantseason: {
        //如:春作,秋作
        type: DataTypes.STRING
      }, 
      duration:{
        type: DataTypes.INTEGER
      },
      duration_description: {
        //ex:8月上旬至10月中旬
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('seasonplants');
  }
};