const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const Question = sequelize.define('questions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
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
