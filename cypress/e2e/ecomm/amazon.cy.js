describe('amazon login failure test', function() {

    before(function() {
        // This will run once before all tests in the block
        cy.fixture('amazon.json').then(function(data) {    
            this.data = data; // Store the data in 'this' context for use in tests
        })
    })
    it('My First Test case', function() {

        cy.visit("https://www.amazon.in/")
        cy.contains('span','Hello, sign in').click() //click login button
    
        cy.get('#ap_email_login').should('be.visible').type(this.data.phone) // Type phone number from fixture  
        cy.get("[type='submit']").should('be.visible').click() // Click on login button
        cy.get('#invalid-phone-alert div div').should('contain', this.data.error);
        
    })

})