'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId', as:'user' })
    }
    toJSON() {
      return { ...this.get(), id: undefined, userId:undefined }
    }
  }
  Question.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_path:{
      type:DataTypes.STRING
    }
    
  }, {
    sequelize,
    tableName: 'questions',
    modelName: 'Question',
  });
  return Question;
};