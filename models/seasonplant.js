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
      type:DataTypes.STRING
    },
    location: {
      //ex: 北部, 南部, 嘉南平原
      type:DataTypes.STRING
    },
    plantseason: {
       //如:春作,秋作
      type:DataTypes.STRING
    },
    duration:{
      type:DataTypes.INTEGER
    }
    ,duration_description: {
      //ex:8月上旬至10月中旬
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Seasonplant',
    tableName: 'seasonplants',
  });
  return Seasonplant;
};