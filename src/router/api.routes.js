import { Router } from 'express';
import runAsyncWrapper from '../utils/runAsyncWrapper';
import { tests } from '../controllers';

const apiRoutes = Router();

apiRoutes.get('/', runAsyncWrapper(tests.welcome));
export default apiRoutes;
