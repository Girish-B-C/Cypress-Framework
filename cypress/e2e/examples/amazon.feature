Feature: Login failure verification in amazon

  Scenario: Verify login failure with invalid credentials
    Given I am on the Amazon  page
    When I click on the login button
    Then I enter wrong phone number
    Then I click on the submit button
    Then I should see an error message indicating invalid credentials 