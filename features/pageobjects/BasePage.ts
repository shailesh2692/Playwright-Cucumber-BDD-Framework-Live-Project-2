// TypeScript File for Writing Common Methods and Properties for All Pages

// Import playwright and it's functions 
// Note that Page is imported from playwright module and not from @playwright/test 
// Because we are not using test runner of playwright here
import { Page } from "playwright";

// Define a class for the Base Page
export class BasePage { 

    // Declare a variable to hold the Page object
    protected page: Page;

    // Constructor to initialize the Page object
    constructor(page: Page) {
        this.page = page;
    }   

    // Method to click on an element using a locator
    async clickElement(locator: string) {
        await this.page.locator(locator).click();
    }

    // Method to fill text in an input field using a locator
    async fillInputField(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }

    // Method to select option from dropdown using a locator
    async selectFromDropdown(locator: string, value: string) {
        await this.page.locator(locator).selectOption(value);
    }

    // Method to get text from an element using a locator
    async getText(locator: string): Promise<string> {
        return await this.page.locator(locator).innerText();
    }

    // Method to hover on an element using a locator
    async hoverOnElement(locator: string) {
        await this.page.locator(locator).hover();
    }

    // Method to navigate to any URL
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Method to wait for a specific timeout
    async waitForTimeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }


}