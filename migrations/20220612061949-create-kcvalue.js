'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('kcvalues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cropId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      location:{
        type:DataTypes.STRING 
      },
      inital_kc: { 
        type:DataTypes.FLOAT
      },
      dev_kc:{
        type:DataTypes.FLOAT
      },
      mid_kc: { 
        type:DataTypes.FLOAT
      },
      last_kc:{
        type:DataTypes.FLOAT
      },
      harvest_kc:{
        type:DataTypes.FLOAT
      },
      inital_days:{
        type:DataTypes.INTEGER
      },
      dev_days:{
        type:DataTypes.INTEGER
      },
      mid_days:{
        type:DataTypes.INTEGER
      },
      last_days:{
        type:DataTypes.INTEGER
      },
      harvest_days:{
        type:DataTypes.INTEGER
      },
      version:{
        type:DataTypes.STRING 
      },
      description:{
        type:DataTypes.TEXT
      },
      ref:{
        type:DataTypes.STRING 
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
    await queryInterface.dropTable('kcvalues');
  }
};