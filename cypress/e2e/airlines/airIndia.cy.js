describe('airindia login failure test', function() {

    before(function() {
        // This will run once before all tests in the block
        cy.fixture('airindia.json').then(function(data) {    
            this.data = data; // Store the data in 'this' context for use in tests
        })
    })
    it('My First Test case', function() {

        cy.visit("https://www.airindia.com/")
        cy.get('#signIn').click() //click login button
        cy.get("[name='username']").should('be.visible').type(this.data.phone) // Type phone number from fixture  
        cy.contains('button','Sign In with OTP').should('be.visible').click() // Click on login button
        
        cy.get('#prompt-alert p').should('have.text', this.data.error);
        
        
    })

})