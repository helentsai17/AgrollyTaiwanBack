'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cropbase}) {
       this.belongsTo(Cropbase, { foreignKey: 'cropId', as:'cropbase' })
    }
  }
  Media.init({
    cropId:{
      type:DataTypes.STRING,
      allowNull:false
    },
    link:{
      type:DataTypes.STRING,
      allowNull:false
    },
    type: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"must choose a type"},
        notEmpty:{msg: 'Must give a type, ex: file, video, youtube link etc'}
      }
    }
  }, {
    sequelize,
    modelName: 'Media',
    tableName: 'media'
  });
  return Media;
};