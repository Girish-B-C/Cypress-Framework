// cypress/e2e/my_first_test.cy.js

describe('My First Cypress Test Suite', () => {
  it('should visit a page and check for a specific heading', () => {
    // Visit the specified URL
    cy.visit('https://example.cypress.io');

    // Get the element with the class 'container' and then find an h1 inside it
    cy.get('.container').find('h1').should('be.visible');

    // Assert that the h1 element contains the text 'Kitchen Sink'
    cy.get('.container').find('h1').should('have.text', 'Kitchen Sink');
  });

  it('should interact with an input field', () => {
    // Visit a form page (assuming it exists on the example site)
    cy.visit('https://example.cypress.io/commands/actions');

    // Type into an input field with a specific placeholder
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');

    // Click a button
    cy.get('.btn-primary').click();

    // Assert that a success message is displayed (example)
    cy.contains('Your email has been submitted!').should('be.visible');
  });
});