describe('spicejet login failure test', function() {

    before(function() {
        // This will run once before all tests in the block
        cy.fixture('spicejet.json').then(function(data) {    
            this.data = data; // Store the data in 'this' context for use in tests
        })
    })
    it('My First Test case', function() {

        cy.visit("https://www.spicejet.com/")
        cy.scrollTo('top'); // Scroll to the top of the page
        //cy.get('.r-eqz5dr > :nth-child(3) > .css-1dbjc4n > .css-76zvg2').click()
        cy.contains('div','Login').click() //click login button
        cy.get("[data-testid='user-mobileno-input-box']").should('be.visible').type(this.data.phone) // Type phone number from fixture  
        cy.contains("[data-testid='login-cta']").should('be.visible').click() // Click on login button
        cy.contains("[data-testid='user-mobileno-input-box']").next().should('have.text', this.data.error);
        
        
    })

})