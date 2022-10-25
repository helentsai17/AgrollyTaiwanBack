'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Message, { foreignKey: 'questionId', as:'question' })
      this.belongsTo(models.User, {foreignKey: 'userId', as:'user'})
    }
  }
  Message.init({
    cropId: {
      type:DataTypes.INTEGER
    },
    userId:{
      type:DataTypes.INTEGER
    },
    questionId:{ 
      type:DataTypes.INTEGER
    },
    message:{
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    tableName:"messages",
    modelName: 'Message',
  });
  return Message;
};