'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLikeCrop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cropbase, { foreignKey: 'cropId', as:'cropbase' })
      this.belongsTo(models.User, { foreignKey: 'userId', as:'user'})
    }
  }
  UserLikeCrop.init({
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    cropId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    tableName:"userlikecrops",
    modelName: 'UserLikeCrop',
  });
  return UserLikeCrop;
};