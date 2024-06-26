const userValidations = require('./user.validations');
const congeValidations = require('./conge.validations');
const projectValidations = require('./project.validations');
const tacheValidations = require('./tache.validations');
const teletravailValidations = require('./teletravail.validation');
const teamvalidations = require('./team.validations');
const rolevalidations = require('./role.validations');
const docvalidations = require('./doc.validation');
const annoncevalidations = require('./annonce.validations');

const isRequired = (singleError) => {
  return singleError.includes('required');
};

const errorFormatter = (singleError) => {
  JSON.stringify(singleError).replace(/\\/g, '');
  const { message } = singleError;
  message.replace('""', '');
  return isRequired(singleError.message) ? message : `Optional Parameter: ${message}`;
};
/**
 *
 * @param {*} schema
 * @returns middleware
 */

const getRequestErrors = (schema) => {
  return (req, res, next) => {
    const requestBody = { ...req?.params, ...req?.body };
    const { error } = schema.validate(requestBody, { abortEarly: false, allowUnknown: false });
    if (error) {
      const validationError = error.details
        .map((sngleError) => {
          return errorFormatter(sngleError);
        })
        .join(', ');
      return res.status(400).json({ message: 'validation Error', error: validationError });
    } else {
      return next();
    }
  };
};

module.exports = {
  //user
  createUsersValidations: getRequestErrors(userValidations.createUserValidations),
  getUserByIdValidations: getRequestErrors(userValidations.getUserByIdValidations),
  updateUserValidations: getRequestErrors(userValidations.updateUserValidations),
  //conge
  createCongeValidations: getRequestErrors(congeValidations.createCongeValidations),
  getCongeByIdValidations: getRequestErrors(congeValidations.getCongeByIdValidations),
  updateCongeValidations: getRequestErrors(congeValidations.updateCongeValidations),
  // project
  createProjectValidations: getRequestErrors(projectValidations.createProjectValidations),
  getProjectByIdValidations: getRequestErrors(projectValidations.getProjectByIdValidations),
  updateProjectValidations: getRequestErrors(projectValidations.updateProjectValidations),
  //tache
  createTacheValidations: getRequestErrors(tacheValidations.createTacheValidations),
  getTacheByIdValidations: getRequestErrors(tacheValidations.getTacheByIdValidations),
  updateTacheValidations: getRequestErrors(tacheValidations.updateTacheValidations),
  //teletravail
  createTeletravailValidations: getRequestErrors(teletravailValidations.createTeletravailValidations),
  getTeletravailByIdValidations: getRequestErrors(teletravailValidations.getTeletravailByIdValidations),
  updateTeletravailValidations: getRequestErrors(teletravailValidations.updateTeletravailValidations),
  //team
  createTeamValidations: getRequestErrors(teamvalidations.createTeamValidations),
  getTeamByIdValidations: getRequestErrors(teamvalidations.getTeamByIdValidations),
  updateTeamValidations: getRequestErrors(teamvalidations.updateTeamValidations),
  //role
  createRoleValidations: getRequestErrors(rolevalidations.createRoleValidations),
  getRoleByIdValidations: getRequestErrors(rolevalidations.getRoleByIdValidations),
  updateRoleValidations: getRequestErrors(rolevalidations.updateRoleValidations),
  //doc
  createDocValidations: getRequestErrors(docvalidations.createDocValidations),
  getDocByIdValidations: getRequestErrors(docvalidations.getDocByIdValidations),
  updateDocValidations: getRequestErrors(docvalidations.updateDocValidations),
  //annonce
  createAnnonceValidations: getRequestErrors(annoncevalidations.createAnnonceValidations),
  getAnnonceByIdValidations: getRequestErrors(annoncevalidations.getAnnonceByIdValidations),
  updateAnnonceValidations: getRequestErrors(annoncevalidations.updateAnnonceValidations),
};
