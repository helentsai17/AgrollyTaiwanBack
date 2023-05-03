"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("cropbases", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      common_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio_name: {
        type: DataTypes.STRING,
      },
      chinese_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING,
      },
      planting_method: {
        type: DataTypes.STRING,
      },
      breed: {
        type: DataTypes.STRING,
      },
      other_name: {
        type: DataTypes.STRING,
      },
      variety: {
        type: DataTypes.STRING,
      },
      season_string: {
        type: DataTypes.STRING,
      },
      total_grow_time: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discription: {
        type: DataTypes.TEXT,
      },
      water_sensitive: {
        type: DataTypes.INTEGER,
      },
      crop_image: {
        type: DataTypes.STRING,
      },
      max_temp: {
        type: DataTypes.INTEGER,
      },
      min_temp: {
        type: DataTypes.INTEGER,
      },
      best_temp: {
        type: DataTypes.STRING,
      },
      reco_start: {
        type: DataTypes.FLOAT,
      },
      reco_start_end: {
        type: DataTypes.FLOAT,
      },
      plant_distance_1: {
        type: DataTypes.INTEGER,
      },
      plant_distance_2: {
        type: DataTypes.INTEGER,
      },
      line_distance: {
        type: DataTypes.INTEGER,
      },
      per_are: {
        type: DataTypes.INTEGER,
      },
      soil:{
        type: DataTypes.STRING,
      },
      ph: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("cropbases");
  },
};
