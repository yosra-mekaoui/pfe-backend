const { assert } = require('chai');
const { describe, it } = require('mocha');
const { createCongeValidations, getCongeByIdValidations, updateCongeValidations } = require('../../../src/app/validations/conge.validations');

describe('Conge Validations', () => {
    describe('createCongeValidations', () => {
        it('should successfully validate a valid congé object when all fields are provided', () => {
            const validConge = {
                StartDate: new Date(),
                EndDate: new Date(Date.now() + 86400000), // Ajout d'un jour à la date actuelle
                Type: 'Vacances',
                Status: 'Actif',
                File: 'chemin/vers/le/fichier'
            };
            const result = createCongeValidations.validate(validConge);
            assert.isUndefined(result.error);
        });

        it('should fail to validate an invalid congé object when one or more fields are missing or invalid', () => {
            const invalidConge = {
                StartDate: '2024-05-10', // Doit être un objet Date
                EndDate: '2024-05-09', // La date de fin doit être postérieure à la date de début
                Type: '', // Le type ne doit pas être vide
                Status: 'Actif',
                File: '' // Le chemin du fichier ne doit pas être vide
            };
            const result = createCongeValidations.validate(invalidConge);
            assert.isDefined(result.error);
        });
    });

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

    describe('updateCongeValidations', () => {
        it('should successfully validate a valid congé update object when all fields are provided', () => {
            const validUpdate = {
                id: '12345678',
                StartDate: new Date(),
                EndDate: new Date(Date.now() + 86400000), // Ajout d'un jour à la date actuelle
                Type: 'Maladie',
                Status: 'Inactif',
                File: 'chemin/vers/le/fichier'
            };
            const result = updateCongeValidations.validate(validUpdate);
            assert.isUndefined(result.error);
        });

        it('should fail to validate an invalid congé update object when one or more fields are missing or invalid', () => {
            const invalidUpdate = {
                id: '', // Chaîne vide
                StartDate: '2024-05-10', // Doit être un objet Date
                EndDate: '2024-05-09', // La date de fin doit être postérieure à la date de début
                Type: '', // Le type ne doit pas être vide
                Status: 'Actif',
                File: '' // Le chemin du fichier ne doit pas être vide
            };
            const result = updateCongeValidations.validate(invalidUpdate);
            assert.isDefined(result.error);
        });
    });
});