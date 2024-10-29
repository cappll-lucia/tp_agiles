import { Jugador } from "./jugador.class";

export class Ahorcado {
  constructor(_jugador: Jugador, private letrasArriesgadas: string[] = []) {
    this.jugador = _jugador;
  }
  private palabra: string;
  private jugador: Jugador;
  private progreso: string[];

  ingresarPalabra(palabra: string) {
    this.palabra = palabra;
    this.progreso = new Array(palabra.length).fill("_");
  }

  iniciarJuego(): string {
    const cantidadLetras = this.palabra.length;
    return `La palabra tiene ${cantidadLetras} letras`;
  }

  arriesgarLetra(l: string): boolean {
    this.letrasArriesgadas.push(l);
    let encontrada = this.palabra.includes(l);
    if (encontrada) {
      this.palabra.split("").forEach((char, index) => {
        if (char === l) {
          this.progreso[index] = l;
        }
      });
    }
    return encontrada;
  }

  verProgreso() {
    return this.progreso.toString().replace(/,/g, " ");
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
    return this.jugador.restarVida();
  }
}
