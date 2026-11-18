// Importing necessary modules from Cucumber and Playwright libraries
import { setWorldConstructor, IWorldOptions, World } from "@cucumber/cucumber";
import { Page, Browser, chromium } from "playwright";

// Importing the PageFixtures class to manage page objects
import { PageFixtures } from "../../fixtures/page_fixtures"; 

// Defining a CustomWorld class that extends the World class from Cucumber
export class CustomWorld extends World {

    // Declaring variables to hold browser, page, and page fixtures instances 
    public page!: Page;
    public browser!: Browser;
    public pages!: PageFixtures;

    // Constructor to initialize the CustomWorld class with options from Cucumber 
    constructor(options: IWorldOptions) {

        // Calling the parent constructor with options
        super(options);
    
    }

    // Method to initialize the browser, page, and page fixtures instances asynchronously 
    async init() {
        this.browser = await chromium.launch({
            headless: false,
            slowMo: 50,
            args: ['--start-maximized']
        });

        // Declaring a context variable to create a new browser context
        const context = await this.browser.newContext();

        // Creating a new page in the context and initializing the PageFixtures instance
        this.page = await context.newPage();
        this.pages = new PageFixtures(this.page);
        // If needed, set viewport size to simulate maximized window in case '--start-maximized' doesn't work
        // await this.page.setViewportSize({ width: 1920, height: 1080 });    
    
    }

    // Method to close the browser instance asynchronously
    async close() {

        // Closing the page and browser instances
        await this.page.close();
        await this.browser.close();
    }
}

// Setting the CustomWorld class as the world constructor for Cucumber
// This allows Cucumber to use CustomWorld for each scenario
setWorldConstructor(CustomWorld);