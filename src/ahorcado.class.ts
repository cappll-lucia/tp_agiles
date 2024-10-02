export class Ahorcado {
    private palabra: string;

    constructor(palabra: string) {
        this.palabra = palabra;
    }

    iniciarJuego(): string {
        const cantidadLetras = this.palabra.length;
        return `La palabra tiene ${cantidadLetras} letras`;
    }

    arriesgarLetra(l: string): boolean{
        return this.palabra.includes(l)
    }
}