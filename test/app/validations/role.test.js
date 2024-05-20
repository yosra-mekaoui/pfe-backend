const { assert } = require('chai');
const { createRoleValidations, getRoleByIdValidations, updateRoleValidations } = require('../../../src/app/validations/role.validations');
const { describe, it } = require('mocha');

describe('Role Validations', () => {
    describe('createRoleValidations', () => {
        it('should validate a valid role object when the role name is provided correctly', () => {
            const validRole = {
                Role_Name: 'Sample Role'
            };
            const result = createRoleValidations.validate(validRole);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid role object when the role name is too short', () => {
            const invalidRole = {
                Role_Name: 'Ro' // too short
            };
            const result = createRoleValidations.validate(invalidRole);
            assert.isDefined(result.error);
        });
    });

    describe('getRoleByIdValidations', () => {
        it('should validate a valid role ID when it is provided', () => {
            const validId = { id: '12345678' };
            const result = getRoleByIdValidations.validate(validId);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid role ID when it is missing or empty', () => {
            const invalidId = { id: '' }; // empty string
            const result = getRoleByIdValidations.validate(invalidId);
            assert.isDefined(result.error);
        });
    });

    describe('updateRoleValidations', () => {
        it('should validate a valid role update object when the ID and role name are provided correctly', () => {
            const validUpdate = {
                id: '12345678',
                Role_Name: 'Updated Role'
            };
            const result = updateRoleValidations.validate(validUpdate);
            assert.isUndefined(result.error);
        });

        it('should not validate an invalid role update object when the ID is missing or empty or the role name is too short', () => {
            const invalidUpdate = {
                id: '', // empty string
                Role_Name: 'Ro' // too short
            };
            const result = updateRoleValidations.validate(invalidUpdate);
            assert.isDefined(result.error);
        });
    });
});
