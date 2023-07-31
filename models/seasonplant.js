'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seasonplant extends Model {

    static associate(models) {
      this.belongsTo(models.Cropbase, { foreignKey: 'cropId', as:'cropbase' })
    }
  }
  Seasonplant.init({
    cropId:{
      type:DataTypes.STRING,
      allowNull:false
    },
    daystring: {
      //種植天數敘述 ex:120 ~ 150 天
      type:DataTypes.TEXT
    }, 
    plantseason: {
       //如:春作,秋作
      type:DataTypes.STRING
    },
    other_description: {
      //如: 南部, 山區, 種植方法
      type: DataTypes.STRING
    },
    duration:{
      type:DataTypes.JSON
    }
  }, {
    sequelize,
    modelName: 'Seasonplant',
    tableName: 'seasonplants',
  });
  return Seasonplant;
};