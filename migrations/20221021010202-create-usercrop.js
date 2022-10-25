'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('usercrops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      cropId: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      start_date: { 
        type:DataTypes.DATEONLY,
        allowNull:false
      },
      field_size: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      location:{
        type: DataTypes.STRING,
        allowNull:false
      },
      note: {
        type: DataTypes.TEXT,
        allowNull:true
      },
      meta: {
        type:DataTypes.JSON
      },
      show:{
        type:DataTypes.BOOLEAN,
        defaultValue:true 
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
    await queryInterface.dropTable('usercrops');
  }
};