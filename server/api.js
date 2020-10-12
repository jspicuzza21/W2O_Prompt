const path = require('path');
const chalk = require('chalk');
const express = require('express');
const request = require('request');
const app = require('./server');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '../public');
const DIST_PATH = path.join(__dirname, '../dist');

app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.put('/geoReport', (req, res) => {
  const { lat, lng } = req.body;
  request(
    { url: `https://seeclickfix.com/open311/v2/requests.json?lat=${lat}&long=${lng}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      res.json(JSON.parse(body));
    },
  );
});

const startServer = () => new Promise((res) => {
  app.listen(PORT, () => {
    console.log(chalk.green(`server listening on port ${PORT}`));
    res();
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_PATH, './index.html'));
});

module.exports = {
  startServer,
  app,
};
