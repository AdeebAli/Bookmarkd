const express = require('express');
const logger = require('./logger');

const router = require('./router');

const app = express();

// log requests, response status and total req-res time
app.use(async (req, res, next) => {
  const startTime = Date.now();
  await next();
  const finishTime = Date.now();
  logger.info(`${res.statusCode} - ${req.method} ${req.url} - ${finishTime - startTime} ms`);
});

app.use(router);

module.exports = app;
