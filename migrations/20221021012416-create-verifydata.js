'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('verifydatas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cropId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_plant:{
        type:DataTypes.STRING
      },
      issue_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issue_state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      feedback: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      meta:{
        type : DataTypes.JSON,
        allowNull: true,
      },
      note: { 
        type: DataTypes.STRING
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
    await queryInterface.dropTable('verifydatas');
  }
};