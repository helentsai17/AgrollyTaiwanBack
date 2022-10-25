"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Verifydata extends Model {
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
  Verifydata.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cropId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issue_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      issue_stage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      feedback: {
        type: DataTypes.TEXT,
        allowNull:true
      },
      
    },
    {
      sequelize,
      modelName: "Verifydata",
      tableName: "verifydatas"
    }
  );
  return Verifydata;
};
