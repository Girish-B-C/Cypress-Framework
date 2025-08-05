import { Cardekho } from '../../pages/cardekho.js';
const cardekhoPage = new Cardekho();

describe('cardekho login failure test', function () {

    before(function () {
        // This will run once before all tests in the block
        cy.fixture('cardekho.json').then(function (data) {
            this.data = data; // Store the data in 'this' context for use in tests
        })
    })
    it('My First Test case', function () {

        cy.visit("https://www.cardekho.com/")
        cy.wait(2000) //click login button
        cardekhoPage.loginButton().click()
        cardekhoPage.phoneTextBox().should('be.visible').type(this.data.phone) // Type phone number from fixture  
        cardekhoPage.submitButton().should('be.visible').click() // Click on login button
        cardekhoPage.errorMessage().should('have.text', this.data.error);

    })

})