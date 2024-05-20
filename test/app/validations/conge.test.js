const { assert } = require('chai');
const { describe, it } = require('mocha');
const {  getCongeByIdValidations } = require('../../../src/app/validations/conge.validations');

describe('Conge Validations', () => {
    describe('getCongeByIdValidations', () => {
        it('should successfully validate a valid congé ID when it is provided', () => {
            const validId = { id: '12345678' };
            const result = getCongeByIdValidations.validate(validId);
            assert.isUndefined(result.error);
        });

        it('should fail to validate an invalid congé ID when it is missing or empty', () => {
            const invalidId = { id: '' }; // Chaîne vide
            const result = getCongeByIdValidations.validate(invalidId);
            assert.isDefined(result.error);
        });
    });
});