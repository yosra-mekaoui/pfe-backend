const { assert } = require('chai');
const { createTacheValidations, getTacheByIdValidations, updateTacheValidations } = require('../../../src/app/validations/tache.validations');

describe('Tache Validations', () => {
    describe('createTacheValidations', () => {
        it('should validate a valid tache object when all required fields are provided correctly', () => {
            const validTache = {
                Title: 'Sample Tache',
                Description: 'Sample Description',
                Deadline: new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate()), // One year from now
                Status: 'Active',
                Priority: 1
            };
            const result = createTacheValidations.validate(validTache);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid tache object when any required field is missing or invalid', () => {
            const invalidTache = {
                Title: 'Sa', // too short
                Description: '', // empty string
                Deadline: '2022-01-01', // past date
                Status: '', // empty string
                Priority: 'High' // not a number
            };
            const result = createTacheValidations.validate(invalidTache);
            assert.isDefined(result.error);
        });
    });

    describe('getTacheByIdValidations', () => {
        it('should validate a valid tache ID when it is provided', () => {
            const validId = { id: '12345678' };
            const result = getTacheByIdValidations.validate(validId);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid tache ID when it is missing or empty', () => {
            const invalidId = { id: '' }; // empty string
            const result = getTacheByIdValidations.validate(invalidId);
            assert.isDefined(result.error);
        });
    });

    describe('updateTacheValidations', () => {
        it('should validate a valid tache update object when the ID and all required fields are provided correctly', () => {
            const validUpdate = {
                id: '12345678',
                Title: 'Updated Tache',
                Description: 'Updated Description',
                Deadline: new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate()), // One year from now
                Status: 'Active',
                Priority: 1
            };
            const result = updateTacheValidations.validate(validUpdate);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid tache update object when any required field is missing or invalid', () => {
            const invalidUpdate = {
                id: '', // empty string
                Title: 'Up', // too short
                Description: '', // empty string
                Deadline: '2022-01-01', // past date
                Status: '', // empty string
                Priority: 'High' // not a number
            };
            const result = updateTacheValidations.validate(invalidUpdate);
            assert.isDefined(result.error);
        });
    });
});
