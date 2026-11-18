# Feature File for Login Functionality
# Tags can be added at Feature, Scenario, Scenario Outline levels
# Tags can be used to group scenarios and control their execution

Feature: Login Functionality
  As a user
  I want to log in to the application 
  so that I can access my account dashboard

  Background:
    Given the user navigates to the facebook page
    When I will validate the title of the page

  Scenario: Successful login with valid credentials
    Then I enter the username as "test_user"
    And I enter the password as "test_password"
    And I click on the login button
