'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('cropbases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      common_name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      bio_name:{
        type:DataTypes.STRING
      },
      chinese_name:{
        type:DataTypes.STRING,
        allowNull:false
      },
      sub_names:{
        type:DataTypes.STRING,
      },
      variety:{
        type:DataTypes.STRING,
      },
      season_string: {
        type:DataTypes.STRING,
      },
      total_grow_time: {
        type:DataTypes.STRING,
      },
      type: {
        type:DataTypes.STRING,
        allowNull:false
      },
      discription:{
        type:DataTypes.TEXT
      },
      water_sensitive:{
        type:DataTypes.INTEGER
      },
      crop_image:{
        type:DataTypes.STRING
      },
      max_temp:{
        type:DataTypes.INTEGER
      },
      min_temp:{
        type:DataTypes.INTEGER
      },
      best_temp:{
        type:DataTypes.STRING
      },
      reco_start:{
        type:DataTypes.FLOAT
      },
      reco_end:{
        type:DataTypes.FLOAT
      },
      distance:{
        type:DataTypes.INTEGER
      },
      ph:{
        type:DataTypes.STRING
      },
      author:{
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
    await queryInterface.dropTable('cropbases');
  }
};