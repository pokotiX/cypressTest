Cypress.Commands.add('visitAndSearchCity', (city) => {
    cy.visit('https://ua.sinoptik.ua/');
    cy.get('input[type=\'search\']').type(city);
    cy.get('body header menu').contains(city).click();
});