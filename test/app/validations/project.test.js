const { assert } = require('chai');
const { createProjectValidations, getProjectByIdValidations, updateProjectValidations } = require('../../../src/app/validations/project.validations');

describe('Project Validations', () => {
    describe('createProjectValidations', () => {
        it('should validate a valid project object when all fields are provided correctly', () => {
            const validProject = {
                Name: 'Sample Project',
                Description: 'Sample Description',
                StartDate: new Date().toISOString(),
                EndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
                Status: 'Active'
            };
            const result = createProjectValidations.validate(validProject);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid project object when one or more fields are missing or invalid', () => {
            const invalidProject = {
                Name: 'Sa', // too short
                Description: '', // empty string
                StartDate: '2024-01-01', // past date
                EndDate: '2021-01-01', // past date
                Status: '' // empty string
            };
            const result = createProjectValidations.validate(invalidProject);
            assert.isDefined(result.error);
        });
    });

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

    describe('updateProjectValidations', () => {
        it('should validate a valid project update when all fields are provided correctly', () => {
            const validUpdate = {
                id: '12345678',
                Name: 'Sample Project',
                Description: 'Sample Description',
                StartDate: new Date().toISOString(),
                EndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
                Status: 'Active'
            };
            const result = updateProjectValidations.validate(validUpdate);
            assert.isUndefined(result.error);
        });
    
        it('should not validate an invalid project update when one or more fields are missing or invalid', () => {
            const invalidUpdate = {
                id: '', // empty string
                Name: 'Sample Project',
                Description: 'Sample Description',
                StartDate: new Date().toISOString(),
                EndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
                Status: 'Active'
            };
            const result = updateProjectValidations.validate(invalidUpdate);
            assert.isDefined(result.error);
        });
    });
});
