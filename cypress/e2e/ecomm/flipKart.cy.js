import Flipkart from '../../pages/flipkart';
const flipkartPage = new Flipkart();

describe('Flipkart login failure test', function () {

    before(function () {
        // This will run once before all tests in the block
        cy.fixture('flipkart.json').then(function (data) {
            this.data = data; // Store the data in 'this' context for use in tests
        })
    })
    it('My First Test case', function () {

        cy.visit("https://www.flipkart.com/")
        flipkartPage.loginButton().first().next().click() //click login button
        flipkartPage.phoneTextBox().should('be.visible').type(this.data.phone) // Type phone number from fixture  
        flipkartPage.submitButton().should('be.visible').click() // Click on login button
        cy.scrollTo('top'); // Scroll to the error message
        flipkartPage.errorMessage().should('have.text', this.data.error);


    })

})