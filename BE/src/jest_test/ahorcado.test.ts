import { describe, expect, test } from "@jest/globals";
import { Ahorcado, ResultadoArrisgarLetra } from "../classes/ahorcado.class";
import { Jugador } from "../classes/jugador.class";

describe("Ahorcado", () => {
  it("debería iniciar el juego y devolver la cantidad de letras de la palabra", () => {
    const jugador = new Jugador("Lu");
    const juego = new Ahorcado(jugador);
    const resultado = juego.iniciarJuego();
    const palabra = juego.verProgreso();
    expect(resultado).toBe(palabra.length);
  });
});

describe("Arriesgar letra correcta", () => {
  it("debería leer una letra y responder que sí esta en la palabra", () => {
    const jugador = new Jugador("Lu");
    const juego = new Ahorcado(jugador);
    juego.ingresarPalabra("SCRUM");
    const resultado = juego.arriesgarLetra("U");
    expect(resultado).toBe(ResultadoArrisgarLetra.LetraCorrecta);
  });
});

describe("Arriesgar letra incorrecta", () => {
  it("debería leer una letra y responder que no está en la palabra", () => {
    const jugador = new Jugador("Lu");
    const juego = new Ahorcado(jugador);
    juego.ingresarPalabra("SCRUM");
    const resultado = juego.arriesgarLetra("A");
    expect(resultado).toBe(ResultadoArrisgarLetra.LetraIncorrecta);
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
  expect(progreso).toEqual(["_", "C", "_", "_", "_"]);
});

describe("Mostrar letras arriesgadas", () => {
  it("deberia devolver las letras arriesgadas", () => {
    const juego = new Ahorcado(new Jugador("Facu"));
    juego.ingresarPalabra("SCRUM");
    juego.arriesgarLetra("U");
    juego.arriesgarLetra("A");
    const letrasArriesgadas = juego.mostrarLetrasArriesgadas();
    expect(letrasArriesgadas).toEqual(["U", "A"]);
  });
});

describe("Alertar que esa letra ya fue ingresada", () => {
  it("deberia devolver un mensaje de alerta", () => {
    const juego = new Ahorcado(new Jugador("Facu"));
    juego.ingresarPalabra("SCRUM");
    juego.arriesgarLetra("U");
    let resultado: ResultadoArrisgarLetra;
    resultado = juego.arriesgarLetra("U");
    expect(resultado).toEqual(ResultadoArrisgarLetra.LetraYaArriesgada);
  });
});

describe("Jugar con plalabra ingresada y obtener progreso", () => {
  it("debería permitir ingresar una palabra personalizada y actualizar el progreso", () => {
    const jugador = new Jugador("Lu");
    const juego = new Ahorcado(jugador);
    juego.ingresarPalabra("CODIGO");
    expect(juego.getPalabra()).toBe("CODIGO");
    expect(juego.verProgreso()).toEqual(["_", "_", "_", "_", "_", "_"]);
  });
});

describe("Obtener vidas", () => {
  it("debería devolver la cantidad de vidas actuales del jugador", () => {
    const jugador = new Jugador("Lu", 5);
    const vidas = jugador.getVidas();
    expect(vidas).toBe(5);
  });
});

describe("Obtener Nombre", () => {
  it("debería devolver el nombre  del jugador", () => {
    const jugador = new Jugador("Lu", 5);
    const vidas = jugador.getNombre();
    expect(vidas).toBe("Luxxxxxx");
  });
});

describe("Convertir objeto plano en instancia de Ahorcado", () => {
  it("debería convertir un objeto plano en una instancia de Ahorcado", () => {
    const data = {
      _jugador: { _nombre: "Lu", _vidas: 4 },
      _palabra: "TEST",
      _progreso: ["_", "_", "_", "_"],
      _letrasArriesgadas: ["T"],
    };

    const juego = Ahorcado.fromPlainObject(data);
    expect(juego.getJugador().getNombre()).toBe("Lu");
    expect(juego.getJugador().getVidas()).toBe(4);
    expect(juego.getPalabra()).toBe("TEST");
    expect(juego.verProgreso()).toEqual(["_", "_", "_", "_"]);
    expect(juego.mostrarLetrasArriesgadas()).toEqual(["T"]);
  });

  it("debería manejar datos incompletos y asignar valores predeterminados", () => {
    const data = {
      _jugador: { _nombre: "Facu" },
    };

    const juego = Ahorcado.fromPlainObject(data);
    expect(juego.getJugador().getNombre()).toBe("Facu");
    expect(juego.getJugador().getVidas()).toBe(6); // Valor predeterminado de vidas
    expect(juego.getPalabra()).toBe("");
    expect(juego.verProgreso()).toEqual([]);
    expect(juego.mostrarLetrasArriesgadas()).toEqual([]);
  });
});

describe("Obtener jugador", () => {
  it("debería devolver la instancia del jugador asociada al juego", () => {
    const jugador = new Jugador("Lu", 3);
    const juego = new Ahorcado(jugador);
    const resultado = juego.getJugador();
    expect(resultado.getNombre()).toBe("Lu");
    expect(resultado.getVidas()).toBe(3);
  });
});
