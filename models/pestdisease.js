'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PestDisease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CropPest, { foreignKey: 'pestId' , as: 'croppest'})
    }

  }
  PestDisease.init({
    pic_path: {
      type:DataTypes.STRING
    },
    name: {
      type:DataTypes.STRING
    },
    name_en: {
      type:DataTypes.STRING
    },
    type: {
      type:DataTypes.STRING
    },
    feature:{
      type:DataTypes.STRING
    },
    discription: {
      type:DataTypes.TEXT
    }
  }, {
    sequelize,
    tableName:'pestdiseases',
    modelName: 'PestDisease',
  });
  return PestDisease;
};