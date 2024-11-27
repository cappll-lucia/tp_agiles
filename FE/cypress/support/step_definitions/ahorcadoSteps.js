import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import cy from 'cypress';

Given('el jugador inicia un nuevo juego', () => {
  cy.visit('http://localhost:5173'); 
});

Then('debería ver los guiones representando la palabra', () => {
  cy.get('[data-testid="progreso-palabra"]')
    .should('be.visible')
    .and('contain', '_ _ _'); 
});

When('el jugador adivina una letra incorrecta', () => {
  cy.get('[data-testid="tecla-z"]').click(); 
});

Then('el jugador debería perder una vida', () => {
  cy.get('[data-testid="vidas"]').should('contain', '4'); 
});

When('el jugador adivina la letra {string}', (letra) => {
  cy.get(`[data-testid="tecla-${letra}"]`).click();
});

Then('la letra {string} debería aparecer en el progreso de la palabra', (letra) => {
  cy.get('[data-testid="progreso-palabra"]').should('contain', letra);
});
