const winston = require('winston');
//import environment from '../config/environment';
const environment = require('../config/environment').default; // default is used because we are using export default in environment.js
const { combine, timestamp, json, prettyPrint } = winston.format;

let level = 'info';
if (environment.nodeEnv === 'development') {
  level = 'debug';
} else if (environment.nodeEnv === 'production') {
  level = 'warn';
}

// Configuration du logger Winston
const logger = winston.createLogger({
  level: level,
  format: combine(
    //errors({ stack: true }),
    timestamp(),
    json(),
    prettyPrint()
    //printf((info) =>`${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'app.log', level: 'error' })],
});
const requestLog = {
  methode: 'GET',
  url: '/api/users',
  status: 200,
  responseTime: '10ms',
  message: 'Request completed',
};
logger.info('An info log', requestLog);
//logger.error("An error log", new Error('504 Gateway Timeout'));
logger.error('An error log');
logger.debug('A debug log');
logger.warn('A warning log');

module.exports = logger;
