import session from "express-session";
import { Jugador } from "../classes/jugador.class";
import { Ahorcado } from "../classes/ahorcado.class";

declare module "express-session" {
  interface SessionData {
    gameState?: {
      jugador: Jugador;
      juego: Ahorcado;
    };
  }
}
declare module "express" {
  interface Request {
    session: session.Session & Partial<session.SessionData>;
  }
}
