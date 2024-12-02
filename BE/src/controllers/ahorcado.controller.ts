import { Request, Response } from "express";
import { Ahorcado, ResultadoArrisgarLetra } from "../classes/ahorcado.class";

export const iniciarJuego = (req: Request, res: Response) => {
  const { jugador } = req.signedCookies;
  if(!jugador){
    res.status(401).json({mensaje: "Jugador no registrado"})
  }
  const juego = new Ahorcado(jugador);
  const cantidadLetras = juego.iniciarJuego();
  res.cookie("juego", JSON.stringify(juego), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        signed: true,
    });
  res.status(200).json({ cantidadLetras });
};

export const arriesgarLetra = (req: Request, res: Response) => {
   const { letra }: { letra: string } = req.body;
  console.log(letra)
    const juegoCookie = req.signedCookies.juego;
    if (!juegoCookie) {
        res.status(400).json({ mensaje: "No hay un juego iniciado." });
    }
    const juego = Ahorcado.fromPlainObject(JSON.parse(juegoCookie));
    if (!letra || typeof letra !== "string" || letra.length !== 1) {
        res.status(400).json({ mensaje: "La letra debe ser un único carácter." });
    }

    const resultado = juego.arriesgarLetra(letra);
    console.log(resultado)
    console.log(juego.getJugador().getVidas())
    console.log(juego.verProgreso())
    res.cookie("juego", JSON.stringify(juego), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        signed: true,
    });
    res.status(200).json({
        jugador: juego.getJugador(),
        resultado: ResultadoArrisgarLetra[resultado],
        progreso: juego.verProgreso(),
        letrasArriesgadas: juego.mostrarLetrasArriesgadas(),
        vidasRestantes: juego.getJugador().getVidas(),
        gano: !juego.verProgreso().includes("_"),
    });
};

/* export const verProgreso = (req: Request, res: Response) => {
  res.json({ progreso: juego.verProgreso() });
};

export const mostrarLetrasArriesgadas = (req: Request, res: Response) => {
  res.json({ letrasArriesgadas: juego.mostrarLetrasArriesgadas() });
}; */
