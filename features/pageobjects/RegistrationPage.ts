// Importing page from playwright test module 
import {Page} from '@playwright/test';

// Import BasePage class to extend it here
import { BasePage } from './BasePage';

//Importing locators from locators.json file
import allLocators from '../../locators/locators.json';

// Define a class for the Registration Page that extends the BasePage class
export class RegistrationPage extends BasePage {

    // Declare a variable to hold locators for the Registration Page
    private locators = allLocators.RegistrationPage;

    // Define Constructor to initialize the Page object by calling the parent class constructor
    constructor(page: Page) {
        super(page);
    }

    // Method to navigate to the home page
    async navigateToHomePage() {
        await this.navigateTo('/'); // Calling the navigateTo method of BasePage class          
    }

    // Method to enter name in the registration form
    async setName(name: string) {
        await this.fillInputField(this.locators.name, name);
    }

    // Method to enter phone in the registration form
    async setPhone(phone: string) {
        await this.fillInputField(this.locators.phone, phone);
    }

    // Method to enter email in the registration form
    async setEmail(email: string) {
        await this.fillInputField(this.locators.email, email);
    }

    // Method to enter country in the registration form
    async setCountry(country: string) {
        await this.selectFromDropdown(this.locators.country, country);
    }

    // Method to enter city in the registration form
    async setCity(city: string) {
        await this.fillInputField(this.locators.city, city);
    }

    // Method to enter username in the registration form
    async setUsername(username: string) {
        await this.fillInputField(this.locators.username, username);
    }

    // Method to enter password in the registration form
    async setPassword(password: string) {
        await this.fillInputField(this.locators.password, password);
    }

    // Method to click on the submit button
    async clickSubmitButton() {
        await this.clickElement(this.locators.submitButton);
    }

}
