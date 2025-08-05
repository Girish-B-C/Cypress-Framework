import { Amazon } from '../../pages/amazon';
const amazonPage = new Amazon();


describe('amazon login failure test', function () {

    before(function () {
        // This will run once before all tests in the block
        cy.fixture('amazon.json').then(function (data) {
            this.data = data; // Store the data in 'this' context for use in tests
            
        })
        
    })
    it('My First Test case', function () {

       
        cy.visit("https://www.amazon.in/")
        amazonPage.loginButton().click() //click login button

        amazonPage.phoneTextBox().should('be.visible').type(this.data.phone)
        // Type phone number from fixture  
        amazonPage.submitButton().should('be.visible').click() // Click on login button
        amazonPage.errorMessage().should('contain', this.data.error);

    })

})