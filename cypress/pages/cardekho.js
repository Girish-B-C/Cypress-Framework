export class Cardekho
{
       
        loginButton()
        {
           return cy.get("[class='username']")
        }

        phoneTextBox()
        {
            return cy.get('.mobile')
        }

        submitButton()
        {
            return  cy.get('.buttonWrpr')
        }
        errorMessage()
        {
            return cy.get('.error')
        }


}

export default Cardekho