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
      // define association here
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
    discription: {
      type:DataTypes.TEXT
    }
  }, {
    sequelize,
    tableName:'PestDiseases',
    modelName: 'PestDisease',
  });
  return PestDisease;
};