import { Router } from 'express';
import {v1Routes} from '../app/controllers';

const apiRoutes = Router();

apiRoutes.get('/', (v1Routes.hello));

export default apiRoutes;
