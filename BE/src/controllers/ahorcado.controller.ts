import { Request, Response } from "express";
import { Ahorcado, ResultadoArrisgarLetra } from "../classes/ahorcado.class";

export const iniciarJuego = (req: Request, res: Response) => {
  const { jugador } = req.session.gameState;
  const juego = new Ahorcado(jugador);
  const cantidadLetras = juego.iniciarJuego();
  req.session.gameState.juego = juego;
  res.json({ cantidadLetras });
};

export const arriesgarLetra = (req: Request, res: Response) => {
  if (!req.session.gameState) {
    res.json({ mensaje: "No hay un juego iniciado" });
  }
  const { letra }: { letra: string } = req.body;
  const juego = Ahorcado.fromPlainObject(req.session.gameState.juego);
  if (!(juego instanceof Ahorcado)) {
    res.json({ mensaje: "Error al mapear el juego" });
  }
  const resultado = juego.arriesgarLetra(letra);
  req.session.gameState.juego = juego;
  res.json({
    palabra: juego.getPalabra(),
    jugador: juego.getJugador(),
    resultado: ResultadoArrisgarLetra[resultado],
    progreso: juego.verProgreso(),
    letrasArriesgadas: juego.mostrarLetrasArriesgadas(),
    vidasRestantes: juego.getJugador().getVidas(),
  });
};

/* export const verProgreso = (req: Request, res: Response) => {
  res.json({ progreso: juego.verProgreso() });
};

export const mostrarLetrasArriesgadas = (req: Request, res: Response) => {
  res.json({ letrasArriesgadas: juego.mostrarLetrasArriesgadas() });
}; */
