describe('Flipkart login failure test', function() {

    before(function() {
        // This will run once before all tests in the block
        cy.fixture('flipkart.json').then(function(data) {    
            this.data = data; // Store the data in 'this' context for use in tests
        })
    })
    it('My First Test case', function() {

        cy.visit("https://www.flipkart.com/")
        cy.get('[alt=Login]').first().next().click() //click login button
        cy.get('.r4vIwl').should('be.visible').type(this.data.phone) // Type phone number from fixture  
        cy.get('.QqFHMw').should('be.visible').click() // Click on login button
        cy.scrollTo('top'); // Scroll to the error message
        cy.get('.llBOFA > span').should('have.text', this.data.error);
        
        
    })

})