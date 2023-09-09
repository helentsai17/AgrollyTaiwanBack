'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('cropdiaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cropId: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      userId: {
        type: DataTypes.STRING,
        allowNull:false
      },
      usercropId: {
        type: DataTypes.STRING,
        allowNull:false
      },
      image: {
        type: DataTypes.TEXT
      },
      content: {
        type: DataTypes.TEXT
      },
      date: {
        type: DataTypes.DATE,
        allowNull:false
      }, 
      days: {
        type: DataTypes.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('cropdiaries');
  }
};