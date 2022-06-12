'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'userId' , as: 'questions'})
    }
    toJSON() {
      return { ...this.get(), id: undefined }
    }

  }
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:'User must have a email to register'},
        notEmpty:{msg:'User must have a email to register'},
        isEmail:{msg:'Must be a valid email address'}
      }
    },
    token: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING
    },
    position: {
      type: DataTypes.STRING,
    },
    member: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verify: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    sequelize,
    tableName: "users",
    modelName: 'User',
  });
  return User;
};