const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');
const topicRoutes = require('./routes/topicRoutes');

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  topicRoutes,
  port: process.env.PORT || '2017',
};

module.exports = config;
