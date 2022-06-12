'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Temperature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      allowNull:false
    },
    dev_max_temp: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    dev_min_temp: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    mid_max_temp: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    mid_min_temp: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    last_max_temp: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    last_min_temp: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'temperatures',
    modelName: 'Temperature',
  });
  return Temperature;
};