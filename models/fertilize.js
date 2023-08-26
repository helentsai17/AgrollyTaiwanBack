'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fertilize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cropbase}) {
      this.belongsTo(Cropbase, { foreignKey: 'cropId', as:'cropbase' })
    }
  }
  Fertilize.init({
    cropId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    day: {
      //第幾天
      type:DataTypes.INTEGER
    },
    stage:{
      type:DataTypes.INTEGER
    },
    content: {
      type:DataTypes.TEXT
    },
  }, {
    sequelize,
    tableName:'fertilizes',
    modelName: 'Fertilize',
  });
  return Fertilize;
};