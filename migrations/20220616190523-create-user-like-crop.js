'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('userlikecrops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      cropId: {
        type:DataTypes.INTEGER,
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
    await queryInterface.dropTable('userlikecrops');
  }
};