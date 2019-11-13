const Topic = require('../models/Topic');
const paginate = require('../services/pagination.service');
const Sequelize = require('sequelize');

const op = Sequelize.Op;

class TopicService {
  constructor() {
    this.topicService = {};
  }

  getAll(topicParams) {
    const { page, pageSize } = topicParams;
    this.topicService = Topic.findAll({
      where: {},
      ...paginate({ page, pageSize }),
    });
    return this.topicService;
  }

  getById(topicParams) {
    const { topicId } = topicParams;
    this.topicService = Topic.findAll({
      where: { id: topicId },
    });
    return this.topicService;
  }

  create(topicParams) {
    const {  name } = topicParams;
    this.topicService = Topic.create({
      name: name,
    });
    return this.topicService;
  }
}

module.exports = TopicService;
