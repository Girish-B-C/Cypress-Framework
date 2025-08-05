export class Flipkart
{
       
        loginButton()
        {
           return cy.get('[alt=Login]')
        }

        phoneTextBox()
        {
            return cy.get('.r4vIwl')
        }

        submitButton()
        {
            return   cy.get('.QqFHMw')
        }
        errorMessage()
        {
            return cy.get('.llBOFA > span')
        }


}

export default Flipkart