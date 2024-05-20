const { assert } = require('chai');
const {
  createUserValidations,
  getUserByIdValidations,
  updateUserValidations,
} = require('../../../src/app/validations/user.validations');
const { describe, it } = require('mocha');
describe('User Validations', () => {
  describe('createUserValidations', () => {
    it('should validate a valid user object when all required fields are provided correctly', () => {
      const validUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      };
      const result = createUserValidations.validate(validUser);
      assert.isUndefined(result.error);
    });

    it('should not validate an invalid user object when any required field is missing or invalid', () => {
      const invalidUser = {
        firstName: 'Jo', // too short
        lastName: 'Doe',
        email: 'invalid-email', // invalid email format
      };
      const result = createUserValidations.validate(invalidUser);
      assert.isDefined(result.error);
    });
  });

  describe('getUserByIdValidations', () => {
    it('should validate a valid user ID when it is provided', () => {
      const validId = { id: '12345678' };
      const result = getUserByIdValidations.validate(validId);
      assert.isUndefined(result.error);
    });

    it('should not validate an invalid user ID when it is missing or empty', () => {
      const invalidId = { id: '' }; // empty string
      const result = getUserByIdValidations.validate(invalidId);
      assert.isDefined(result.error);
    });
  });

  describe('updateUserValidations', () => {
    it('should validate a valid user update object when the ID and all required fields are provided correctly', () => {
      const validUpdate = {
        id: '12345678',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      };
      const result = updateUserValidations.validate(validUpdate);
      assert.isUndefined(result.error);
    });

    it('should not validate an invalid user update object when any required field is missing or invalid', () => {
      const invalidUpdate = {
        id: '', // empty string
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      };
      const result = updateUserValidations.validate(invalidUpdate);
      assert.isDefined(result.error);
    });
  });
});
