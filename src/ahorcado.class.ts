export class Ahorcado {
  constructor(private palabra: string, private vidas: number = 6) {
    this.palabra = palabra;
    this.vidas = vidas;
  }

  iniciarJuego(): string {
    const cantidadLetras = this.palabra.length;
    return `La palabra tiene ${cantidadLetras} letras`;
  }

  arriesgarLetra(l: string): boolean {
    return this.palabra.includes(l);
  }

  obtenerPosicionesLetra(letra) {
    const posiciones: number[] = [];
    this.palabra.split("").forEach((char, index) => {
      if (char === letra) {
        posiciones.push(index);
      }
    });
    return posiciones;
  }

  restarVida(): number {
    return --this.vidas;
  }
}
