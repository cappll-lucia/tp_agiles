import { describe, expect, test } from "@jest/globals";
import { Ahorcado } from "../ahorcado.class";

describe("Ahorcado", () => {
  it("debería iniciar el juego y devolver la cantidad de letras de la palabra", () => {
    const juego = new Ahorcado("SCRUM");
    const resultado = juego.iniciarJuego();
    expect(resultado).toBe("La palabra tiene 5 letras");
  });
});


describe("Arriesgar letra correcta", ()=>{
  it("debería leer una letra y responder que sí está palabra", ()=>{
    const juego = new Ahorcado("SCRUM");
    const resultado = juego.arriesgarLetra('U')
    expect(resultado).toBe(true)
})

})