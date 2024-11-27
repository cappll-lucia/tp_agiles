Feature: Juego de Ahorcado

  Scenario: Mostrar la palabra inicial en blanco
    Given el jugador inicia un nuevo juego
    Then debería ver los guiones representando la palabra

  Scenario: Reducir vidas al fallar una letra
    Given el jugador inicia un nuevo juego
    When el jugador arriesga una letra incorrecta
    Then el jugador debería perder una vida

  Scenario: Mostrar letras correctas al adivinar
    Given el jugador inicia un nuevo juego
    When el jugador adivina una letra correcta
    Then la letra correcta debería aparecer en el progreso de la palabra donde corresponde
