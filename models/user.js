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
    static associate(models) {
      this.hasMany(models.Question, { foreignKey: 'userId', as: 'questions' })
      this.hasMany(models.Message, { foreignKey: 'userId', as: 'messages' })
      this.hasMany(models.UserLikeCrop, { foreignKey: 'userId' , as: 'userlikecrop'})
      this.hasMany(models.UserCrop, { foreignKey: 'userId' , as: 'usercrop'})
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
      allowNull: false,
      notNull: { msg: 'User must have first name' },
      notEmpty: { msg: 'First name can not be empty' },
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
      default:'Taiwan'
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
      validate: {
        notNull: { msg: 'User must have a email to register' },
        notEmpty: { msg: 'User must have a email to register' },
        isEmail: { msg: 'Must be a valid email address' }
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
    },
    verification_string:{
      type: DataTypes.UUID,
    }
  }, {
    sequelize,
    tableName: "users",
    modelName: 'User',
  });
  return User;
};