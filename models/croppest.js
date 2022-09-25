'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CropPest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cropbase, { foreignKey: 'cropId', as:'cropbase' })
      this.belongsTo(models.PestDisease, { foreignKey: 'pestId', as:'pestdisease' })
      
    }

    toJSON() {
      return { ...this.get(), id: undefined, pestId: undefined, cropId: undefined }
    }
  }
  CropPest.init({
    cropId: {
      type:DataTypes.INTEGER
    },
    pestId: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName:'croppests',
    modelName: 'CropPest',
  });
  return CropPest;
};