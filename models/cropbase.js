'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cropbase extends Model {
 
    static associate(models) {
      this.hasMany(models.Kcvalue, { foreignKey: 'cropId' , as: 'kcvalue'})
      this.hasMany(models.Temperature, { foreignKey: 'cropId' , as: 'temperature'})
      this.hasMany(models.Fertilize, { foreignKey: 'cropId' , as: 'fertilize'})
      this.hasMany(models.CropPest, { foreignKey: 'cropId' , as: 'croppest'})
      this.hasMany(models.UserLikeCrop, { foreignKey: 'cropId' , as: 'userlikecrop'})//crop be like by many user
      this.hasMany(models.UserCrop, { foreignKey: 'cropId' , as: 'usercrop'})//crop be plan by many user
      this.hasMany(models.Verifydata, { foreignKey: 'cropId' , as: 'verify'})//crop can be verify by many user
      this.hasMany(models.Media, { foreignKey: 'cropId' , as: 'media'})//crop has many media source
      this.hasMany(models.Seasonplant, { foreignKey: 'cropId' , as: 'seasonplant'})
      this.hasMany(models.Plantmonth, { foreignKey: 'cropId' , as: 'plantmonth'})
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
    icon:{
      //images path: /assets/vegetable_icons 
      type:DataTypes.STRING
    },
    planting_method:{
      type:DataTypes.STRING,
      allowNull:true
    },
    breed:{
      type:DataTypes.STRING,
    },
    other_name:{
      type:DataTypes.TEXT,
    },
    variety:{
      type:DataTypes.STRING,
    },
    season_string: {
      type:DataTypes.STRING,
    },
    total_grow_time: {
      type:DataTypes.STRING,
    },
    type: {
      type:DataTypes.STRING,
      allowNull:false
    },
    short_discription: {
      type: DataTypes.TEXT,
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
    /*
    reco_start:{
      type:DataTypes.FLOAT
    },
    reco_start_end:{
      type:DataTypes.FLOAT
    },
    */
    plant_distance_1:{
      // 株距 , 行距
      type:DataTypes.INTEGER
    },
    plant_distance_2:{
      type:DataTypes.INTEGER
    },
    line_distance:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    //0.1公頃
    per_01ha:{
      type:DataTypes.INTEGER,
    },
    soil:{
      type: DataTypes.STRING,
    },
    ph:{
      type:DataTypes.STRING
    }, 
    author:{
      type:DataTypes.TEXT
    },

  }, {
    sequelize,
    tableName:'cropbases',
    modelName: 'Cropbase',
  });
  return Cropbase;
};