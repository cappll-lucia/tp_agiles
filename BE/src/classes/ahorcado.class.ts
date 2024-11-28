import { Jugador } from "./jugador.class";
import { faker } from "@faker-js/faker";

export class Ahorcado {
  private _palabra: string;
  private _jugador: Jugador;
  private _progreso: string[];
  private _letrasArriesgadas: string[];

  constructor(
    jugador: Jugador,
    palabra: string = "SCRUM", //faker.lorem.word().toUpperCase(),
    progreso: string[] = new Array(palabra.length).fill("_"),
    letrasArriesgadas: string[] = []
  ) {
    this._jugador = jugador;
    this._palabra = palabra;
    this._progreso = progreso;
    this._letrasArriesgadas = letrasArriesgadas;
  }

  ingresarPalabra(palabra: string) {
    this._palabra = palabra;
    this._progreso = new Array(palabra.length).fill("_");
  }

  iniciarJuego(): number {
    console.log(this._palabra);
    return this._palabra.length;
  }

  verificarSiYaFueArriesgada(l: string): boolean {
    return this._letrasArriesgadas.includes(l);
  }

  arriesgarLetra(l: string): ResultadoArrisgarLetra {
    if (this.verificarSiYaFueArriesgada(l))
      return ResultadoArrisgarLetra.LetraYaArriesgada;
    this._letrasArriesgadas.push(l);
    let encontrada = this._palabra.includes(l);
    if (encontrada) {
      this._palabra.split("").forEach((char, index) => {
        if (char === l) {
          this._progreso[index] = l;
        }
      });
      return ResultadoArrisgarLetra.LetraCorrecta;
    } else {
      this._jugador.restarVida();
      return ResultadoArrisgarLetra.LetraIncorrecta;
    }
  }

  verProgreso() {
    return this._progreso;
  }

  obtenerPosicionesLetra(letra: string) {
    const posiciones: number[] = [];
    this._palabra.split("").forEach((char, index) => {
      if (char === letra) {
        posiciones.push(index);
      }
    });
    return posiciones;
  }
  mostrarLetrasArriesgadas(): string[] {
    return this._letrasArriesgadas;
  }
  restarVida(): number {
    return this._jugador.restarVida();
  }

  getJugador(): Jugador {
    return this._jugador;
  }
  getPalabra(): string {
    return this._palabra;
  }

  //Map
  // Método estático que convierte un objeto plano en una instancia de Ahorcado
  static fromPlainObject(data: any): Ahorcado {
    const jugador = new Jugador(data._jugador?._nombre, data._jugador?._vidas);
    const palabra = data._palabra ?? "";
    const progreso = data._progreso ?? new Array(palabra.length).fill("_");
    const letrasArriesgadas = data._letrasArriesgadas ?? [];

    return new Ahorcado(jugador, palabra, progreso, letrasArriesgadas);
  }
}

export enum ResultadoArrisgarLetra {
  LetraCorrecta,
  LetraIncorrecta,
  LetraYaArriesgada,
}
