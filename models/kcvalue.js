'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kcvalue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cropbase}) {
      this.belongsTo(Cropbase, { foreignKey: 'cropId', as:'cropbase' })
    }
  }
  Kcvalue.init({
    cropId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    location:{
      type:DataTypes.STRING 
    },
    inital_kc: { 
      type:DataTypes.FLOAT
    },
    dev_kc:{
      type:DataTypes.FLOAT
    },
    mid_kc: { 
      type:DataTypes.FLOAT
    },
    last_kc:{
      type:DataTypes.FLOAT
    },
    harvest_kc:{
      type:DataTypes.FLOAT
    },
    inital_days:{
      type:DataTypes.INTEGER
    },
    dev_days:{
      type:DataTypes.INTEGER
    },
    mid_days:{
      type:DataTypes.INTEGER
    },
    last_days:{
      type:DataTypes.INTEGER
    },
    harvest_days:{
      type:DataTypes.INTEGER
    },
    description:{
      type:DataTypes.TEXT
    },
    version:{
      type:DataTypes.STRING 
    },
    ref:{
      type:DataTypes.STRING 
    }
  }, {
    sequelize,
    tableName:'kcvalues',
    modelName: 'Kcvalue',
  });
  return Kcvalue;
};