'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cropbase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Kcvalue, { foreignKey: 'cropId' , as: 'kcvalue'})
      this.hasOne(models.Temperature, { foreignKey: 'cropId' , as: 'temperature'})
      this.hasMany(models.Fertilize, { foreignKey: 'cropId' , as: 'fertilize'})
      this.hasMany(models.CropPest, { foreignKey: 'cropId' , as: 'croppest'})
      this.hasMany(models.UserLikeCrop, { foreignKey: 'cropId' , as: 'userlikecrop'})
    }
  }
  Cropbase.init({
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
    season_string: {
      type:DataTypes.STRING,
    },
    total_grow_time: {
      type:DataTypes.INTEGER,
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

  }, {
    sequelize,
    tableName:'cropbases',
    modelName: 'Cropbase',
  });
  return Cropbase;
};