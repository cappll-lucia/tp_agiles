import { Request, Response } from 'express';
import { Ahorcado, ResultadoArrisgarLetra } from '../classes/ahorcado.class';
import { Jugador } from '../classes/jugador.class';

const jugador = new Jugador("Jugador 1"); 
const juego = new Ahorcado(jugador);

export const iniciarJuego = (req: Request, res: Response) => {
  const mensaje = juego.iniciarJuego();
  res.json({ mensaje });
};

export const arriesgarLetra = (req: Request, res: Response) => {
  const { letra } = req.body;
  const resultado = juego.arriesgarLetra(letra);
  res.json({
    resultado: ResultadoArrisgarLetra[resultado], 
    progreso: juego.verProgreso(),
    letrasArriesgadas: juego.mostrarLetrasArriesgadas(),
    vidasRestantes: juego.restarVida(),
  });
};

export const verProgreso = (req: Request, res: Response) => {
  res.json({ progreso: juego.verProgreso() });
};

export const mostrarLetrasArriesgadas = (req: Request, res: Response) => {
  res.json({ letrasArriesgadas: juego.mostrarLetrasArriesgadas() });
};
