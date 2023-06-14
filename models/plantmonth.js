'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plantmonth extends Model {
    
    static associate(models) {
      this.belongsTo(models.Cropbase, { foreignKey: 'cropId', as:'cropbase' }),
      this.belongsTo(models.Seasonplant, { foreignKey: 'seasonId', as:'seasonplant' })
    }
  }
  Plantmonth.init({
    cropId: {
      type:DataTypes.INTEGER
    },
    seasonId:{
      type: DataTypes.INTEGER
    },
    month:{
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Plantmonth',
    tableName:"plantmonths"
  });
  return Plantmonth;
};