'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CropDiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.UserCrop, { foreignKey: 'usercropId', as:'usercrop'})
      this.belongsTo(models.User, { foreignKey: 'userId', as:'user'})
      this.belongsTo(models.Cropbase, { foreignKey: 'cropId', as:'cropbase' })
      
    }
  }
  CropDiary.init({
    cropId:{
      type:DataTypes.INTEGER
    },
    userId: {
      type:DataTypes.STRING
    },
    usercropId: {
      type:DataTypes.STRING
    },
    image: {
      type:DataTypes.TEXT
    },
    content:  {
      type:DataTypes.TEXT
    },
    date: {
      type:DataTypes.DATE
    }, 
    days: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'CropDiary',
    tableName:'cropdiaries'
  });
  return CropDiary;
};