export class Jugador {
  private _nombre: string;
  private _vidas: number;
  constructor(nombre: string, vidas: number = 6) {
    (this._nombre = nombre), (this._vidas = vidas);
  }

  restarVida(): number {
    return --this._vidas;
  }

  getVidas(): number {
    return this._vidas;
  }
  getNombre(): string {
    return this._nombre;
  }
}
