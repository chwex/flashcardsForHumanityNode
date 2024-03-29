/* eslint-disable linebreak-style */
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const Question = sequelize.define('questions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  topicID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, { tableNameFreeze: true, tableName: 'questions', timestamps: false });

module.exports = Question;
