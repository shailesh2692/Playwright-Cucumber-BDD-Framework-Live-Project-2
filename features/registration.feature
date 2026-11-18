#
Feature: User Registration on Demo Website
    As a new user
    I want to register for an account
    So that I can access the application

Scenario Outline: Validating The Registration Feature
    Given I navigate to the registration page
    When I enter name as "<name>"
    And I enter phone number as "<phone>"
    And I enter email as "<email>"
    And I select country as "<country>"
    And I enter city as "<city>"
    And I enter the username as "<username>"
    And I enter the password as "<password>"
    And I click register button

    Examples:
      | name            | phone       | email                   | country   | city      | username       | password      |
      | Test User One   | 0000000000  | user1@example.com       | India     | Noida     | test_user_1    | ExampleOnly1! |
      | Test User Two   | 0000000001  | user2@example.com       | Germany   | Berlin    | test_user_2    | ExampleOnly2! |