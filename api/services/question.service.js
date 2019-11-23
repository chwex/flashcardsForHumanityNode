const Question = require('../models/Question');
const paginate = require('../services/pagination.service');

// const Sequelize = require('sequelize');
// const op = Sequelize.Op;

class QuestionService {
  constructor() {
    this.questionService = {};
  }

  getAll(questionParams) {
    const { page, pageSize } = questionParams;
    this.questionService = Question.findAll({
      where: {},
      ...paginate({ page, pageSize }),
    });
    return this.questionService;
  }

  getById(questionParams) {
    const { questionID } = questionParams;
    this.questionService = Question.findAll({
      where: { id: questionID },
    });
    return this.questionService;
  }

  create(questionParams) {
    const { question, topicID } = questionParams;
    this.questionService = Question.create({
      question: question,
      topicID: topicID,
    });
    return this.topicService;
  }
}

module.exports = QuestionService;
