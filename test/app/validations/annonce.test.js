const { assert } = require('chai');
const { describe, it } = require('mocha');
const { createAnnonceValidations, getAnnonceByIdValidations, updateAnnonceValidations } = require('../../../src/app/validations/annonce.validations');

describe('Annonce Validations', () => {
    describe('createAnnonceValidations', () => {
        it('should validate a valid annonce object when all fields are provided', () => {
            const validAnnonce = {
                Title: 'Sample Title',
                Content: 'Sample Content',
                pic: 'sample.jpg'
            };
            const result = createAnnonceValidations.validate(validAnnonce);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid annonce object when Title is too short, Content is empty, and pic is empty', () => {
            const invalidAnnonce = {
                Title: 'Sa', // too short
                Content: '', // empty string
                pic: '' // empty string
            };
            const result = createAnnonceValidations.validate(invalidAnnonce);
            assert.isDefined(result.error);
        });
    });

    describe('getAnnonceByIdValidations', () => {
        it('should validate a valid annonce ID when the ID is provided', () => {
            const validId = { id: '12345678' };
            const result = getAnnonceByIdValidations.validate(validId);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid annonce ID when ID is empty', () => {
            const invalidId = { id: '' }; // empty string
            const result = getAnnonceByIdValidations.validate(invalidId);
            assert.isDefined(result.error);
        });
    });

    describe('updateAnnonceValidations', () => {
        it('should validate a valid annonce update when all fields are provided', () => {
            const validUpdate = {
                id: '12345678',
                Title: 'Sample Title',
                Content: 'Sample Content',
                pic: 'sample.jpg'
            };
            const result = updateAnnonceValidations.validate(validUpdate);
            assert.isUndefined(result.error);
        });
    
        it('should not validate an invalid annonce update when ID is missing', () => {
            const invalidUpdate = {
                id: '', // empty string
                Title: 'Sample Title',
                Content: 'Sample Content',
                pic: 'sample.jpg'
            };
            const result = updateAnnonceValidations.validate(invalidUpdate);
            assert.isDefined(result.error);
        });
    });
});