import { NextFunction, Router, Request, Response } from "express";
import {
  iniciarJuego,
  arriesgarLetra,
} from "../controllers/ahorcado.controller";
import { registrarJugador } from "../controllers/jugador.controller";

const router = Router();

const validarJugador = (req: Request, res: Response, next: NextFunction): void => {
    const jugador = req.signedCookies?.jugador;

    if (!jugador) {
        res.status(401).send({ mensaje: "No autorizado" });
        return; 
    }

    req.jugador = jugador; 
    next(); 
};



router.post("/registrarse", registrarJugador);

router.use(validarJugador);
router.get("/iniciar", iniciarJuego);
router.post("/adivinar", arriesgarLetra);
/* router.get("/progress", verProgreso);
router.get("/guessed-letters", mostrarLetrasArriesgadas); */

export default router;
