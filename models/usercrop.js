'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usercrop extends Model {
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
  Usercrop.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    cropId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    start_date: { 
      type:DataTypes.DATEONLY,
      allowNull:false
    },
    field_size: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    location:{
      type: DataTypes.STRING,
      allowNull:true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    show:{
      type:DataTypes.BOOLEAN,
      defaultValue:true 
    },
    meta: {
      type:DataTypes.JSON
    }
  }, {
    sequelize,
    modelName: 'UserCrop',
    tableName: 'usercrops'
  });
  return Usercrop;
};