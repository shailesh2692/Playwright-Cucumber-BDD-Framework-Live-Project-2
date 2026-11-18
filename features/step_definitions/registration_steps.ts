// Importing necessary modules and types from Cucumber and Playwright libraries
import { Given, When, Then } from '@cucumber/cucumber';

// Importing the CustomWorld class to access browser, page, and page fixtures instances
import { CustomWorld } from '../hooks/custom_world';

// Importing expect from Playwright test for assertions
import { expect } from '@playwright/test';

// Step definitions for registration feature using Page Object Model
Given('I navigate to the registration page', async function (this: CustomWorld) {

    // Using the page instance from CustomWorld to navigate to the registration page
    await this.page.goto('https://way2automation.com/way2auto_jquery/index.php');

    // Validating the URL to ensure navigation was successful
    expect(this.page.url()).toBe('https://way2automation1.com/way2auto_jquery/index.php');           

         });

When('I enter name as {string}', async function (this: CustomWorld, name: string) {

    // Using the registrationPage instance from PageFixtures to interact with the name field
    await this.pages.registrationPage.setName(name);           

         });

When('I enter phone number as {string}', async function (this: CustomWorld, phone: string) {
    
    // Using the registrationPage instance from PageFixtures to interact with the phone field
    await this.pages.registrationPage.setPhone(phone);

         });         

When('I enter email as {string}', async function (this: CustomWorld, email: string) {

    // Using the registrationPage instance from PageFixtures to interact with the email field
    await this.pages.registrationPage.setEmail(email);

         });
         
When('I select country as {string}', async function (this: CustomWorld, country: string) {

    // Using the registrationPage instance from PageFixtures to interact with the country dropdown
    await this.pages.registrationPage.setCountry(country);

         });
         
When('I enter city as {string}', async function (this: CustomWorld, city: string) {
    
    // Using the registrationPage instance from PageFixtures to interact with the city field
    await this.pages.registrationPage.setCity(city);
    
         });
         
When('I enter the username as {string}', async function (this: CustomWorld, username: string) {

    // Using the registrationPage instance from PageFixtures to interact with the username field
    await this.pages.registrationPage.setUsername(username);
    
         });
         
When('I enter the password as {string}', async function (this: CustomWorld, password: string) {

    // Using the registrationPage instance from PageFixtures to interact with the password field
    await this.pages.registrationPage.setPassword(password);
    
         });
         
When('I click register button', async function (this: CustomWorld) {

    // Using the registrationPage instance from PageFixtures to click on the submit button
    await this.pages.registrationPage.clickSubmitButton();
    await this.page.waitForTimeout(3000); // Wait for 3 seconds to observe the result
    
         });         