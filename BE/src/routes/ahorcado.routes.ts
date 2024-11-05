import { Router } from 'express';
import { iniciarJuego, arriesgarLetra, verProgreso, mostrarLetrasArriesgadas } from '../controllers/ahorcado.controller';

const router = Router();

router.get('/start', iniciarJuego);
router.post('/guess', arriesgarLetra);
router.get('/progress', verProgreso);
router.get('/guessed-letters', mostrarLetrasArriesgadas);

export default router;