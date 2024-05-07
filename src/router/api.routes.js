import { Router } from 'express';
import { v1Routes } from '../app/controllers';

const validations = require('../app/middlewares/index');

const apiRoutes = Router();

apiRoutes.get('/users', v1Routes.users.getUsers);
apiRoutes.get('/users/:id', [validations.getUserByIdValidations], v1Routes.users.getUserById);
apiRoutes.post('/users', [validations.createUsersValidations], v1Routes.users.createUser);
//apiRoutes.put('/users/:id', v1Routes.users.updateUser);
apiRoutes.put('/users/:id', [validations.updateUserValidations], v1Routes.users.updateUser);
apiRoutes.delete('/users/:id', [validations.getUserByIdValidations], v1Routes.users.deleteUser);

export default apiRoutes;
