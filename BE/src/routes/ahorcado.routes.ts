import { Router } from "express";
import {
  iniciarJuego,
  arriesgarLetra,
} from "../controllers/ahorcado.controller";
import { registrarJugador } from "../controllers/jugador.controller";

const router = Router();

router.get("/iniciar", iniciarJuego);
router.post("/registrarse", registrarJugador);
router.post("/adivinar", arriesgarLetra);
/* router.get("/progress", verProgreso);
router.get("/guessed-letters", mostrarLetrasArriesgadas); */

export default router;
