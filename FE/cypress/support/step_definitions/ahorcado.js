import {
  Given,
  When,
  Then,
  Before,
} from '@badeball/cypress-cucumber-preprocessor'

// Ejecuta este Before solo para escenarios con el tag @registro o @juego
Before({ tags: '@juego' }, () => {
  let jugadorCookie
  let juegoCookie
  cy.visit('/')
  cy.get('[data-testid="input_nombre"]').type('Facu')
  cy.contains('Registrarse').click()

  cy.getCookie('jugador').then(cookie => {
    jugadorCookie = cookie // Guarda la cookie del jugador
  })
  cy.getCookie('juego').then(cookie => {
    juegoCookie = cookie // Guarda la cookie del jugador
  })
  if (jugadorCookie) {
    cy.setCookie('jugador', jugadorCookie.value) // Restaura la cookie del jugador
  }
  if (juegoCookie) {
    cy.setCookie('juego', juegoCookie.value) // Restaura la cookie del juego
  }
  cy.log(juegoCookie)
  cy.log(jugadorCookie)
})

Given('El jugador ingresa al juego', () => {
  cy.visit('/')
})
When('Ingresa su nombre y se registra', () => {
  // Encuentra el campo de entrada por el atributo data-testid
  cy.get('[data-testid="input_nombre"]').should('be.visible').type('Facu')
  // Haz clic en el botón "Registrarse"
  cy.contains('Registrarse').click()
})

Then('Debería ver un mensaje de bienvenida con su nombre', () => {
  // Verifica que el saludo contenga el nombre "Facu"
  cy.contains('Hola, Facuxxxxxx!').should('be.visible')
})

When('El jugador inicia un juego', () => {
  cy.contains('Comenzar juego').click()
})

Then('Debería ver los guiones representando la palabra', () => {
  cy.get('[data-testid="progreso-palabra"] span').should('have.length', 5)
})

When('El jugador arriesga una letra incorrecta', () => {
  cy.contains('Comenzar juego').click()
  cy.get('[data-testid="tecla-Z"]').click()
})
Then('El jugador debería perder una vida', () => {
  cy.get('[data-testid="vidas"]').should('contain', '5')
})

When('El jugador adivina una letra correcta', () => {
  cy.contains('Comenzar juego').click()
  cy.get('[data-testid="tecla-S"]').click()
})

Then(
  'La letra correcta debería aparecer en el progreso de la palabra donde corresponde',
  () => {
    cy.get('[data-testid="progreso-palabra"]').should('contain', 'S')
  },
)
