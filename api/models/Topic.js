const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const Topic = sequelize.define('topics', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, { tableNameFreeze: true, tableName: 'topics', timestamps: false });

module.exports = Topic;
