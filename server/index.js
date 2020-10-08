const chalk = require('chalk');
const { startServer } = require('./api');

const startApplication = async () => {
  const { NODE_ENV } = process.env;
  console.log(chalk.cyanBright('Application started', `Env = ${NODE_ENV}`));
  await startServer();
  console.log(chalk.greenBright('App started Successfully'));
};

startApplication();
