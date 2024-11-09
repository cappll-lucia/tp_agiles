import { AutoMap } from "@automapper/classes";

export class Jugador {
  @AutoMap()
  public _nombre: string;
  @AutoMap()
  public _vidas: number;
  constructor(nombre: string, vidas: number = 6) {
    (this._nombre = nombre), (this._vidas = vidas);
  }

  restarVida(): number {
    return --this._vidas;
  }

  //TODO: Test
  getVidas(): number {
    return this._vidas;
  }
}
