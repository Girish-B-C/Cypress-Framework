export class Amazon
{
       
        loginButton()
        {
           return cy.contains('span','Hello, sign in')
        }

        phoneTextBox()
        {
            return cy.get('#ap_email_login')
        }

        submitButton()
        {
            return  cy.get("[type='submit']")
        }
        errorMessage()
        {
            return cy.get('#invalid-phone-alert div div')
        }


}

export default Amazon