Feature: Juego de Ahorcado

@registro
  Scenario: Validación inicial del registro
    Given El jugador ingresa al juego
    When Ingresa su nombre y se registra
    Then Debería ver un mensaje de bienvenida con su nombre
@juego
  Scenario: Mostrar la palabra inicial en blanco
    When El jugador inicia un juego
    Then Debería ver los guiones representando la palabra
@juego
  Scenario: Reducir vidas al fallar una letra
    When El jugador arriesga una letra incorrecta
    Then El jugador debería perder una vida
@juego
  Scenario: Mostrar letras correctas al adivinar
    When El jugador adivina una letra correcta
    Then La letra correcta debería aparecer en el progreso de la palabra donde corresponde
