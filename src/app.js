const express = require('express');
const logger = require('./logger');

const app = express();

// log requests, response status and total req-res time
app.use(async (req, res, next) => {
  const startTime = process.hrtime();
  await next();
  const finishTime = Date.now();
  logger.info(`${res.statusCode} - ${req.method} ${req.url} - ${finishTime - startTime} ms`);
});

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

module.exports = app;
