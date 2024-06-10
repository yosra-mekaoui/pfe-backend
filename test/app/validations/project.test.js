const { assert } = require('chai');
const { describe, it } = require('mocha');
const {  getProjectByIdValidations } = require('../../../src/app/validations/project.validations');

describe('Project Validations', () => {
    describe('getProjectByIdValidations', () => {
        it('should validate a valid project ID when it is provided', () => {
            const validId = { id: '12345678' };
            const result = getProjectByIdValidations.validate(validId);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid project ID when it is missing or empty', () => {
            const invalidId = { id: '' }; // empty string
            const result = getProjectByIdValidations.validate(invalidId);
            assert.isDefined(result.error);
        });
    });
});
