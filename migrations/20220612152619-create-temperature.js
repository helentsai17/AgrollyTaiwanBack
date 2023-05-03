'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('temperatures', {
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
      initial_max_temp: {
        type: DataTypes.INTEGER
      },
      initial_min_temp: {
        type: DataTypes.INTEGER
      },
      dev_max_temp: {
        type: DataTypes.INTEGER
      },
      dev_min_temp: {
        type: DataTypes.INTEGER
      },
      mid_max_temp: {
        type: DataTypes.INTEGER
      },
      mid_min_temp: {
        type: DataTypes.INTEGER
      },
      last_max_temp: {
        type: DataTypes.INTEGER
      },
      last_min_temp: {
        type: DataTypes.INTEGER
      },
      harvest_max_temp: {
        type:DataTypes.INTEGER,
      },
      harvest_min_temp: {
        type:DataTypes.INTEGER,
      },
      discription:{
        type:DataTypes.TEXT
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
    await queryInterface.dropTable('temperatures');
  }
};