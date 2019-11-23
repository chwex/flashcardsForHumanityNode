const Answer = require('../models/Answer');
const paginate = require('../services/pagination.service');

// const Sequelize = require('sequelize');
// const op = Sequelize.Op;

class AnswerService {
  constructor() {
    this.answerService = {};
  }

  getAll(answerParams) {
    const { page, pageSize } = answerParams;
    this.answerService = Answer.findAll({
      where: {},
      ...paginate({ page, pageSize }),
    });
    return this.answerService;
  }

  getById(answerParams) {
    const { answerID } = answerParams;
    this.answerService = Answer.findAll({
      where: { id: answerID },
    });
    return this.answerService;
  }

  create(answerParams) {
    const { possibleAnswer, questionID, isCorrect } = answerParams;
    this.answerService = Answer.create({
      possibleAnswer: possibleAnswer,
      questionID: questionID,
      isCorrect: isCorrect,
    });
    return this.topicService;
  }
}

module.exports = AnswerService;
