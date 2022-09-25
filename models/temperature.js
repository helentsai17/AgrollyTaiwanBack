'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Temperature extends Model {

    static associate(models) {
      this.belongsTo(models.Cropbase, { foreignKey: 'cropId', as:'cropbase' })
    }
  }
  Temperature.init({
    cropId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    initial_max_temp: {
      type:DataTypes.INTEGER,
    },
    initial_min_temp: {
      type:DataTypes.INTEGER,
    },
    dev_max_temp: {
      type:DataTypes.INTEGER,
    },
    dev_min_temp: {
      type:DataTypes.INTEGER,
    },
    mid_max_temp: {
      type:DataTypes.INTEGER,
    },
    mid_min_temp: {
      type:DataTypes.INTEGER,
    },
    last_max_temp: {
      type:DataTypes.INTEGER,
    },
    last_min_temp: {
      type:DataTypes.INTEGER,
    },
    harvest_max_temp: {
      type:DataTypes.INTEGER,
    },
    harvest_min_temp: {
      type:DataTypes.INTEGER,
    },
  }, {
    sequelize,
    tableName:'temperatures',
    modelName: 'Temperature',
  });
  return Temperature;
};