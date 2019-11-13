const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const Answer = sequelize.define('answers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  possibleAnswer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  questionID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  isCorrect: {},
}, { tableNameFreeze: true, tableName: 'questions', timestamps: false });

module.exports = Answer;
