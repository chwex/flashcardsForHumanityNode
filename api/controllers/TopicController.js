const TopicService = require('../services/topic.service');

const TopicController = () => {
  const getAll = async (req, res) => {
    const topicParams = req.body;

    try {
      const topicService = new TopicService();
      const topic = await topicService.getAll(topicParams);
      return res.status(200).json({ topic });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error '.concat(err) });
    }
  };

  const getById = async (req, res) => {
    const topicParams = req.body;

    try {
      const topicService = new TopicService();
      const topic = await topicService.getById(topicParams);
      return res.status(200).json({ topic });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error '.concat(err) });
    }
  };

  const create = async (req, res) => {
    const topicParams = req.body;

    try {
      const topicService = new TopicService();
      const topic = await topicService.create(topicParams);
      return res.status(200).json({ topic });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error '.concat(err) });
    }
  };

  return {
    getAll,
    getById,
    create,
  };
};

module.exports = TopicController;
