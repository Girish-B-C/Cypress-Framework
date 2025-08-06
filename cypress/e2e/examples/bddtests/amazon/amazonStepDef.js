const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import { Amazon } from '../../pages/amazon';
const amazonPage = new Amazon();

Given('I am on the Amazon  page', () => {
  cy.visit('https://www.amazon.in/');
});

When('I click on the login button', () => {
      amazonPage.loginButton().click();
});

Then('I enter wrong phone number', function () {
 
        amazonPage.phoneTextBox().should('be.visible').type(this.data.phone);
    
});

Then('I click on the submit button', () => {
    amazonPage.submitButton().should('be.visible').click();
});

Then('I should see an error message indicating invalid credentials', function () {
  cy.fixture('amazon.json').then((data) => {
      amazonPage.errorMessage().should('contain', this.data.error);
  });
});