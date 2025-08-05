import Ksrtc from '../../pages/ksrtc';
const ksrtcPage = new Ksrtc();

describe('ksrtc login failure test', function() {

    before(function() {
        // This will run once before all tests in the block
        cy.fixture('ksrtc.json').then(function(data) {    
            this.data = data; // Store the data in 'this' context for use in tests
        })
    })
    it('My First Test case', function() {

        cy.visit("https://ksrtc.in/")
        cy.scrollTo('top'); // Scroll to the top of the page
        //cy.get('.r-eqz5dr > :nth-child(3) > .css-1dbjc4n > .css-76zvg2').click()
        ksrtcPage.loginButton().first().click() //click login button
        ksrtcPage.phoneTextBox().should('be.visible').type(this.data.phone) // Type phone number from fixture 
        cy.wait(2000) // Wait for the input to be ready 
        ksrtcPage.submitButton().should('be.visible').click() // Click on login button
        ksrtcPage.errorMessage().should('have.text', this.data.error);
         
    })

})