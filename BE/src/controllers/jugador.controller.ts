import { Request, Response } from "express";
import { Jugador } from "../classes/jugador.class";

export const registrarJugador = (req: Request, res: Response) => {
  const { nombre } = req.body;
  const jugador = new Jugador(nombre);
  req.session.gameState = { jugador };
  res.json({ mensaje: `Jugador ${nombre} registrado`, jugador: jugador });
};
