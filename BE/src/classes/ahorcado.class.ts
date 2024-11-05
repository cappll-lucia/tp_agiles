import { Jugador } from "./jugador.class";
import { faker } from '@faker-js/faker';

export class Ahorcado {
    private palabra: string;
    private jugador: Jugador;
    private progreso: string[];
    private letrasArriesgadas: string[];
    
  constructor(_jugador: Jugador) {
    this.jugador = _jugador;
    this.palabra = faker.commerce.product()
    this.progreso = new Array(this.palabra.length).fill("_");
    this.letrasArriesgadas = [];
  }

  ingresarPalabra(palabra: string) {
    this.palabra = palabra;
    this.progreso = new Array(palabra.length).fill("_");
  }

  iniciarJuego(): string {
    const cantidadLetras = this.palabra.length;
    return `La palabra tiene ${cantidadLetras} letras`;
  }

  verificarSiYaFueArriesgada(l: string): boolean {
    return this.letrasArriesgadas.includes(l);
  }

  arriesgarLetra(l: string): ResultadoArrisgarLetra {
    if (this.verificarSiYaFueArriesgada(l))
      return ResultadoArrisgarLetra.LetraYaArriesgada;
    this.letrasArriesgadas.push(l);
    let encontrada = this.palabra.includes(l);
    if (encontrada) {
      this.palabra.split("").forEach((char, index) => {
        if (char === l) {
          this.progreso[index] = l;
        }
      });
      return ResultadoArrisgarLetra.LetraCorrecta;
    } else {
      this.jugador.restarVida();
      return ResultadoArrisgarLetra.LetraIncorrecta;
    }
  }

  verProgreso() {
    return this.progreso.toString().replace(/,/g, " ");
  }

  obtenerPosicionesLetra(letra:string) {
    const posiciones: number[] = [];
    this.palabra.split("").forEach((char, index) => {
      if (char === letra) {
        posiciones.push(index);
      }
    });
    return posiciones;
  }
  mostrarLetrasArriesgadas(): string[] {
    return this.letrasArriesgadas;
  }
  restarVida(): number {
    return this.jugador.restarVida();
  }
}

export enum ResultadoArrisgarLetra {
  LetraCorrecta,
  LetraIncorrecta,
  LetraYaArriesgada,
}
