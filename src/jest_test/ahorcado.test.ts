import { describe, expect, test } from "@jest/globals";
import { Ahorcado } from "../ahorcado.class";
import { Jugador } from "../jugador.class";

describe("Ahorcado", () => {
  it("debería iniciar el juego y devolver la cantidad de letras de la palabra", () => {
    const jugador = new Jugador("Lu");
    const juego = new Ahorcado(jugador);
    juego.ingresarPalabra("SCRUM");
    const resultado = juego.iniciarJuego();
    expect(resultado).toBe("La palabra tiene 5 letras");
  });
});

describe("Arriesgar letra correcta", () => {
  it("debería leer una letra y responder que sí esta en la palabra", () => {
    const jugador = new Jugador("Lu");
    const juego = new Ahorcado(jugador);
    juego.ingresarPalabra("SCRUM");
    const resultado = juego.arriesgarLetra("U");
    expect(resultado).toBe(true);
  });
});

describe("Arriesgar letra incorrecta", () => {
  it("debería leer una letra y responder que no está en la palabra", () => {
    const jugador = new Jugador("Lu");
    const juego = new Ahorcado(jugador);
    juego.ingresarPalabra("SCRUM");
    const resultado = juego.arriesgarLetra("A");
    expect(resultado).toBe(false);
  });
});

describe("Obtener la posición de la letra en la palabra", () => {
  it("debería devolver la posición de una letra correcta en la palabra", () => {
    const jugador = new Jugador("Lu");
    const juego = new Ahorcado(jugador);
    juego.ingresarPalabra("SCRUM");
    const resultado = juego.obtenerPosicionesLetra("U");
    expect(resultado).toEqual([3]);
  });
});

describe("Restar una vida", () => {
  it("deberia devolver la cantidad de vidas restantes", () => {
    const maxVidas = 3;
    const jugador = new Jugador("Lu", maxVidas);
    const juego = new Ahorcado(jugador);
    juego.ingresarPalabra("SCRUM");
    const vidasRestantes = juego.restarVida();
    expect(vidasRestantes).toEqual(maxVidas - 1);
  });
});

describe("Ver progreso de palabra al ingresar una letra correcta", () => {
  const jugador = new Jugador("Facu");
  const juego = new Ahorcado(jugador);
  juego.ingresarPalabra("SCRUM");
  juego.arriesgarLetra("C");
  const progreso = juego.verProgreso();
  expect(progreso).toEqual("_ C _ _ _");
});
