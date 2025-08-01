describe('e cart website', () => {
  it('verify the no of items in results', () => {
    // Visit the specified URL
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Get the element with the class 'container' and then find an h1 inside it
    cy.get("[placeholder='Search for Vegetables and Fruits']").type('ca');
    cy.wait(2000); // Wait for the results to load
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4);
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      expect(textVeg.includes('C')).to.be.true;
    });
    cy.get("[class='product-action']").should('be.visible').each(($el, index, $list) => {
      if ($el.find('button').text().includes('ADD TO CART')) {  
        $el.find('button').click();
      }
    });
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click(); 
    cy.get('.promoCode').type('rahulshettyacademy');
    cy.get('.promoBtn').click();
    cy.wait(2000);
    cy.get('.promoInfo').should('have.text', 'Code applied ..!');
   
  });
});
// cypress/e2e/examples/Test2.cy.js

//https://rahulshettyacademy.com/seleniumPractise/#/