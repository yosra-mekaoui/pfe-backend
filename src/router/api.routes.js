import { Router } from 'express';
import { v1Routes } from '../app/controllers';
import upload from '../app/middlewares/uploadMiddleware';
import { excelUpload, excelMultiUpload, multiUpload } from '../app/middlewares/uploadValidation';
// import { createDocValidations } from '../app/validations';

const validations = require('../app/validations/index');

const apiRoutes = Router();

// Set up a route for file uploads
apiRoutes.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});
apiRoutes.post('/upload/excel/single', excelUpload, (req, res) => {
  res.json({ message: 'Fichier Excel téléchargé avec succès' });
});
apiRoutes.post('/upload/excel/multi', excelMultiUpload, (req, res) => {
  res.json({ message: 'Fichiers Excel téléchargés avec succès' });
});
apiRoutes.post('/upload/multi', multiUpload, (req, res) => {
  res.json({ message: 'Fichiers téléchargés avec succès' });
});
//user
apiRoutes.get('/users', v1Routes.users.getUsers);
apiRoutes.get('/users/:id', [validations.getUserByIdValidations], v1Routes.users.getUserById);
apiRoutes.post('/users', [validations.createUsersValidations], v1Routes.users.createUser);
apiRoutes.put('/users/:id', [validations.updateUserValidations], v1Routes.users.updateUser);
apiRoutes.delete('/users/:id', [validations.getUserByIdValidations], v1Routes.users.deleteUser);
apiRoutes.get('/users/:email', v1Routes.users.getUserByEmail);
apiRoutes.post('/register', v1Routes.users.register);
apiRoutes.post('/login', v1Routes.users.login);
apiRoutes.post('/token', v1Routes.users.refreshToken);
//role
apiRoutes.get('/roles', v1Routes.roles.getRoles);
apiRoutes.get('/roles/:id', [validations.getRoleByIdValidations], v1Routes.roles.getRoleById);
apiRoutes.post('/roles', [validations.createRoleValidations], v1Routes.roles.createRole);
apiRoutes.put('/roles/:id', [validations.updateRoleValidations], v1Routes.roles.updateRole);
apiRoutes.delete('/roles/:id', [validations.getRoleByIdValidations], v1Routes.roles.deleteRole);
//annonce
apiRoutes.get('/annonces', v1Routes.annonces.getAnnonces);
apiRoutes.get('/annonces/:id', [validations.getAnnonceByIdValidations], v1Routes.annonces.getAnnonceById);
apiRoutes.post('/annonces', [validations.createAnnonceValidations], v1Routes.annonces.createAnnonce);
apiRoutes.put('/annonces/:id', [validations.updateAnnonceValidations], v1Routes.annonces.updateAnnonce);
apiRoutes.delete('/annonces/:id', [validations.getAnnonceByIdValidations], v1Routes.annonces.deleteAnnonce);
//doc
apiRoutes.get('/docs', v1Routes.docs.getDocs);
//apiRoutes.post('/docs', upload.single('file'), createDocValidations, v1Routes.docs.createDoc);
apiRoutes.get('/docs/:id', [validations.getDocByIdValidations], v1Routes.docs.getDocById);
apiRoutes.post('/docs', [validations.createDocValidations], v1Routes.docs.createDoc);
apiRoutes.put('/docs/:id', [validations.updateDocValidations], v1Routes.docs.updateDoc);
apiRoutes.delete('/docs/:id', [validations.getDocByIdValidations], v1Routes.docs.deleteDoc);
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
