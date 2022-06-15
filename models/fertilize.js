'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fertilize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cropbase}) {
      this.belongsTo(Cropbase, { foreignKey: 'cropId', as:'cropbase' })
    }
  }
  Fertilize.init({
    cropId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    pic_path: {
      type:DataTypes.STRING
    },
    stage:{
      type:DataTypes.STRING
    },
    content: {
      type:DataTypes.STRING
    },
  }, {
    sequelize,
    tableName:'fertilizes',
    modelName: 'Fertilize',
  });
  return Fertilize;
};