/* eslint-disable class-methods-use-this */
const TopicService = require('../services/topic.service');

module.exports = class TopicController {
  async findAllTopics(req, res) {
    try {
      const parametros = req.body;
      const topicService = new TopicService();

      const topicResponse =
        await topicService.findAllTopics(parametros);
      return res.status(200).json({ topicResponse });
    } catch (err) {
      return res.status(500).json({ msg: 'Internal server error; '.concat(err) });
    }
  }
};
