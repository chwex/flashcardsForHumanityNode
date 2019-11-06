const Topic = require('../models/Topic');
const paginate = require('./pagination.service');
const Sequelize = require('sequelize');

const op = Sequelize.Op;

class TopicService {
  constructor() {
    this.topic = {};
  }

  findAllTopics(params) {
    const { page, pageSize } = params;

    this.topic = Topic.findAll({
      where: { },
      ...paginate({ page, pageSize }),
    });

    return this.topic;
  }

  findTopicById(id) {
    this.topic = Topic.findAll({
      where: { id: id },
    });
    return this.topic;
  }

  findByName(params) {
    const { name, page, pageSize } = params;
    this.topic = Topic.findAll({
      where: { [name]: { [op.substring]: name } },
      ...paginate({ page, pageSize }),
    });
  }
}

module.exports = TopicService;
