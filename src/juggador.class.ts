export class Jugador{
    constructor(private nombre: string, private vidas: number=6){}

    restarVida(): number {
        return --this.vidas;
    }

    
}