import BaseException from './baseException';
class InvalidFileTypeError extends BaseException {
  constructor(message) {
    super(message);
    this.name = 'InvalidFileTypeError';
    this.statusCode = 400;
  }
}

module.exports = InvalidFileTypeError;
