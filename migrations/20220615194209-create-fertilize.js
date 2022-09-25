'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('fertilizes', {
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
      pic_path: {
        type: DataTypes.STRING
      },
      stage: {
        type: DataTypes.INTEGER
      },
      content: {
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
    await queryInterface.dropTable('fertilizes');
  }
};