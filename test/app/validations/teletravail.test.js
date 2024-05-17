const { assert } = require('chai');
const { createTeletravailValidations, getTeletravailByIdValidations, updateTeletravailValidations } = require('../../../src/app/validations/teletravail.validation');

describe('Teletravail Validations', () => {
    describe('createTeletravailValidations', () => {
        it('should validate a valid teletravail object when all required fields are provided correctly', () => {
            const validTeletravail = {
                StartDate: new Date(),
                EndDate: new Date(Date.now() + 86400000), // Adding one day to the current date
                Status: 'active'
            };
            const result = createTeletravailValidations.validate(validTeletravail);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid teletravail object when any required field is missing or empty', () => {
            const invalidTeletravail = {
                StartDate: '2024-05-10', // Should be a Date object
                EndDate: '2024-05-09', // End date should be after start date
                Status: '' // Status should not be empty
            };
            const result = createTeletravailValidations.validate(invalidTeletravail);
            assert.isDefined(result.error);
        });
    });

    describe('getTeletravailByIdValidations', () => {
        it('should validate a valid teletravail ID when it is provided', () => {
            const validId = { id: '12345678' };
            const result = getTeletravailByIdValidations.validate(validId);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid teletravail ID when it is missing or empty', () => {
            const invalidId = { id: '' }; // empty string
            const result = getTeletravailByIdValidations.validate(invalidId);
            assert.isDefined(result.error);
        });
    });

    describe('updateTeletravailValidations', () => {
        it('should validate a valid teletravail update object when the ID and all required fields are provided correctly', () => {
            const validUpdate = {
                id: '12345678',
                StartDate: new Date(),
                EndDate: new Date(Date.now() + 86400000), // Adding one day to the current date
                Status: 'inactive'
            };
            const result = updateTeletravailValidations.validate(validUpdate);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid teletravail update object when any required field is missing or empty', () => {
            const invalidUpdate = {
                id: '', // empty string
                StartDate: '2024-05-10', // Should be a Date object
                EndDate: '2024-05-09', // End date should be after start date
                Status: '' // Status should not be empty
            };
            const result = updateTeletravailValidations.validate(invalidUpdate);
            assert.isDefined(result.error);
        });
    });
});
