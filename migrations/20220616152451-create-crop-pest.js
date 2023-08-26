'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('croppests', {
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
      pestId: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      comment:{
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
    await queryInterface.dropTable('cropPests');
  }
};