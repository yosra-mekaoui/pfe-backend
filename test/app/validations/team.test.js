const { assert } = require('chai');
const {
  createTeamValidations,
  getTeamByIdValidations,
  updateTeamValidations,
} = require('../../../src/app/validations/team.validations');
const { describe, it } = require('mocha');
describe('Team Validations', () => {
  describe('createTeamValidations', () => {
    it('should validate a valid team object when all required fields are provided correctly', () => {
      const validTeam = {
        Name: 'Sample Team',
        Membres: ['member1', 'member2'],
      };
      const result = createTeamValidations.validate(validTeam);
      assert.isUndefined(result.error);
    });

    it('should not validate an invalid team object when any required field is missing or empty', () => {
      const invalidTeam = {
        Name: '', // empty string
        Membres: [], // empty array
      };
      const result = createTeamValidations.validate(invalidTeam);
      assert.isDefined(result.error);
    });
  });

  describe('getTeamByIdValidations', () => {
    it('should validate a valid team ID when it is provided', () => {
      const validId = { id: '12345678' };
      const result = getTeamByIdValidations.validate(validId);
      assert.isUndefined(result.error);
    });

    it('should not validate an invalid team ID when it is missing or empty', () => {
      const invalidId = { id: '' }; // empty string
      const result = getTeamByIdValidations.validate(invalidId);
      assert.isDefined(result.error);
    });
  });

  describe('updateTeamValidations', () => {
    it('should validate a valid team update object when the ID and all required fields are provided correctly', () => {
      const validUpdate = {
        id: '12345678',
        Name: 'Updated Team',
        Membres: ['updatedMember1', 'updatedMember2'],
      };
      const result = updateTeamValidations.validate(validUpdate);
      assert.isUndefined(result.error);
    });

    it('should not validate an invalid team update object when any required field is missing or empty', () => {
      const invalidUpdate = {
        id: '', // empty string
        Name: '', // empty string
        Membres: [], // empty array
      };
      const result = updateTeamValidations.validate(invalidUpdate);
      assert.isDefined(result.error);
    });
  });
});
