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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      daystring: {
        //ex: 大約120天
        type: DataTypes.TEXT
      },
      plantseason: {
        //如:春作,秋作, 一期, 二期
        type: DataTypes.STRING
      }, 
      other_description: {
        //如: 南部, 山區, 種植方法
        type: DataTypes.STRING
      },
      duration:{
        type: DataTypes.JSON
        //ex { 
        //     description: 8月上旬至10月中旬 ,
        //     month: [7.25, 8, 9.50 ]
        //    }
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