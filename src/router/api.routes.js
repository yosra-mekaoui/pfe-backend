import { Router } from 'express';
import { v1Routes } from '../app/controllers';

const validations = require('../app/middlewares/index');

const apiRoutes = Router();
//user
apiRoutes.get('/users', v1Routes.users.getUsers);
apiRoutes.get('/users/:id', [validations.getUserByIdValidations], v1Routes.users.getUserById);
apiRoutes.post('/users', [validations.createUsersValidations], v1Routes.users.createUser);
apiRoutes.put('/users/:id', [validations.updateUserValidations], v1Routes.users.updateUser);
apiRoutes.delete('/users/:id', [validations.getUserByIdValidations], v1Routes.users.deleteUser);
//role
apiRoutes.get('/roles', v1Routes.roles.getRoles);
apiRoutes.get('/roles/:id', v1Routes.roles.getRoleById);
apiRoutes.post('/roles', v1Routes.roles.createRole);
apiRoutes.put('/roles/:id', v1Routes.roles.updateRole);
apiRoutes.delete('/roles/:id', v1Routes.roles.deleteRole);
//annonce
apiRoutes.get('/annonces', v1Routes.annonces.getAnnonces);
apiRoutes.get('/annonces/:id', v1Routes.annonces.getAnnonceById);
apiRoutes.post('/annonces', v1Routes.annonces.createAnnonce);
apiRoutes.put('/annonces/:id', v1Routes.annonces.updateAnnonce);
apiRoutes.delete('/annonces/:id', v1Routes.annonces.deleteAnnonce);
//doc
apiRoutes.get('/docs', v1Routes.docs.getDocs);
apiRoutes.get('/docs/:id', v1Routes.docs.getDocById);
apiRoutes.post('/docs', v1Routes.docs.createDoc);
apiRoutes.put('/docs/:id', v1Routes.docs.updateDoc);
apiRoutes.delete('/docs/:id', v1Routes.docs.deleteDoc);
//conge
apiRoutes.get('/conges', v1Routes.conges.getConges);
apiRoutes.get('/conges/:id', [validations.getCongeByIdValidations], v1Routes.conges.getCongeById);
apiRoutes.post('/conges', [validations.createCongeValidations], v1Routes.conges.createConge);
apiRoutes.put('/conges/:id', [validations.updateCongeValidations], v1Routes.conges.updateConge);
apiRoutes.delete('/conges/:id', [validations.getCongeByIdValidations], v1Routes.conges.deleteConge);
//project
apiRoutes.get('/projects', v1Routes.projects.getProjects);
apiRoutes.get('/projects/:id', [validations.getProjectByIdValidations], v1Routes.projects.getProjectById);
apiRoutes.post('/projects', [validations.createProjectValidations], v1Routes.projects.createProject);
apiRoutes.put('/projects/:id', [validations.updateProjectValidations], v1Routes.projects.updateProject);
apiRoutes.delete('/projects/:id', [validations.getProjectByIdValidations], v1Routes.projects.deleteProject);
//tache
apiRoutes.get('/taches', v1Routes.taches.getTaches);
apiRoutes.get('/taches/:id', [validations.getTacheByIdValidations], v1Routes.taches.getTacheById);
apiRoutes.post('/taches', [validations.createTacheValidations], v1Routes.taches.createTache);
apiRoutes.put('/taches/:id', [validations.updateTacheValidations], v1Routes.taches.updateTache);
apiRoutes.delete('/taches/:id', [validations.getTacheByIdValidations], v1Routes.taches.deleteTache);
//teletravail
apiRoutes.get('/teletravails', v1Routes.teletravail.getTeletravails);
apiRoutes.get(
  '/teletravails/:id',
  [validations.getTeletravailByIdValidations],
  v1Routes.teletravail.getTeletravailById
);
apiRoutes.post('/teletravails', [validations.createTeletravailValidations], v1Routes.teletravail.createTeletravail);
apiRoutes.put('/teletravails/:id', [validations.updateTeletravailValidations], v1Routes.teletravail.updateTeletravail);
apiRoutes.delete(
  '/teletravails/:id',
  [validations.getTeletravailByIdValidations],
  v1Routes.teletravail.deleteTeletravail
);

export default apiRoutes;
