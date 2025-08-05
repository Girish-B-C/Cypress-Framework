export class Ksrtc
{
       
        loginButton()
        {
           return cy.get("[class='header-right'] div a")
        }

        phoneTextBox()
        {
            return cy.get("[class='inp-container'] input").eq(2)
        }

        submitButton()
        {
            return  cy.get("[class='btn payee']")
        }
        errorMessage()
        {
            return cy.get("[class='alert--content error login--alert']")
        }


}

export default Ksrtc