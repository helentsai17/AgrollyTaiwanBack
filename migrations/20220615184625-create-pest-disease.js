'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('pestdiseases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      pic_path: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      name_en: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING,
      },
      feature:{
        //特徵
        type:DataTypes.TEXT,
      },
      affect:{
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT
      },
      solution:{
        type: DataTypes.TEXT
      },
      source:{
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('pestdiseases');
  }
};