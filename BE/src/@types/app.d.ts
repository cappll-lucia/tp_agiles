import { Request } from "express";

declare global {
    namespace Express {
        interface Request {
            signedCookies: { [key: string]: any }; 
            jugador?: { nombre: string }; 
            juego?: Ahorcado; 
        }
    }
}
