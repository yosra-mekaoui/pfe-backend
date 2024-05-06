import { Router } from 'express';
import { v1Routes } from '../app/controllers';

const apiRoutes = Router();

apiRoutes.get('/', v1Routes.hello);
apiRoutes.get('/users', v1Routes.users.getUsers);
apiRoutes.post('/users', v1Routes.users.createUser);
apiRoutes.put('update/users/:id', v1Routes.users.updateUser);
apiRoutes.delete('/users/:id', v1Routes.users.deleteUser);

export default apiRoutes;
