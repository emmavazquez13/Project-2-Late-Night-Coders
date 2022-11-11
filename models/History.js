const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    protein: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    fat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    sodium: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    sugar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    carbs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'history',
  }
);

module.exports = History;
