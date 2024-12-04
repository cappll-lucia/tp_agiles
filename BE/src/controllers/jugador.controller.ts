import { Request, Response } from "express";
import { Jugador } from "../classes/jugador.class";

export const registrarJugador = (req: Request, res: Response) => {
  const { nombre } = req.body;
  if (!nombre) {
    res.status(400).send({ mensaje: "El nombre del jugador es obligatorio" });
    return;
  }
  const jugador = new Jugador(nombre);
  res.cookie(
    "jugador",
    { nombre },
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      signed: true,
    }
  );
  res
    .status(201)
    .json({ mensaje: `Jugador ${nombre} registrado`, jugador: jugador });
};
