const { assert } = require('chai');
const { createDocValidations, getDocByIdValidations, updateDocValidations } = require('../../../src/app/validations/doc.validation');

describe('Document Validations', () => {
    describe('createDocValidations', () => {
        it('should successfully validate a valid document object when all fields are provided', () => {
            const validDoc = {
                Title: 'Sample Title',
                Path: '/path/to/document',
                Type: 'pdf'
            };
            const result = createDocValidations.validate(validDoc);
            assert.isUndefined(result.error);
        });

        it('should fail to validate an invalid document object when one or more fields are missing or invalid', () => {
            const invalidDoc = {
                Title: 'Sa', // too short
                Path: '', // empty string
                Type: '' // empty string
            };
            const result = createDocValidations.validate(invalidDoc);
            assert.isDefined(result.error);
        });
    });

    describe('getDocByIdValidations', () => {
        it('should successfully validate a valid document ID when it is provided', () => {
            const validId = { id: '12345678' };
            const result = getDocByIdValidations.validate(validId);
            assert.isUndefined(result.error);
        });

        it('should fail to validate an invalid document ID when it is missing or empty', () => {
            const invalidId = { id: '' }; // empty string
            const result = getDocByIdValidations.validate(invalidId);
            assert.isDefined(result.error);
        });
    });

    describe('updateDocValidations', () => {
        it('should successfully validate a valid document update object when all fields are provided', () => {
            const validUpdate = {
                id: '12345678',
                Title: 'Sample Title',
                Path: '/path/to/document',
                Type: 'pdf'
            };
            const result = updateDocValidations.validate(validUpdate);
            assert.isUndefined(result.error);
        });

        it('should fail to validate an invalid document update object when one or more fields are missing or invalid', () => {
            const invalidUpdate = {
                id: '', // empty string
                Title: 'Sample Title',
                Path: '/path/to/document',
                Type: 'pdf'
            };
            const result = updateDocValidations.validate(invalidUpdate);
            assert.isDefined(result.error);
        });
    });
});
