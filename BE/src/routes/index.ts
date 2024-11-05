import { Router } from 'express';
import ahorcadoRoutes from './ahorcado.routes';

const router = Router();

router.use('/ahorcado', ahorcadoRoutes);

export default router;
