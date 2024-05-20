const exceptionMessages = require('../constants/exceptionMessages');
const BaseException = require('./BaseException');
class InvalidFileTypeError extends BaseException {
  constructor() {
    super(exceptionMessages.INVALID_FILE_TYPE);
    this.name = 'InvalidFileTypeError';
    this.statusCode = 400;
  }
}

module.exports = InvalidFileTypeError;
