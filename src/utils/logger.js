const winston = require('winston')

// @TODO decide on environment names
const env = process.env.NODE_ENV || 'local'
const debugLevel = (env === 'prod') ? 'warning' : 'info'

const setup = {
  prod: [
    new winston.transports.File({
      level: debugLevel,
      filename: './logs/prod-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    })
  ],
  local: [
    new winston.transports.File({
      level: debugLevel,
      filename: './logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: debugLevel,
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ]
}

const logger = new winston.Logger({
  transports: setup[env] || setup['local'],
  exitOnError: false
})

module.exports = logger;
