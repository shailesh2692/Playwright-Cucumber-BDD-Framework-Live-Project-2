// TypeScript File To Define All Page Fixtures And Store The Instances Of Page Classes

// Import playwright test and it's functions
import { Page } from 'playwright';

// Import RegistrationPage class to create its instance
import { RegistrationPage } from '../features/pageobjects/RegistrationPage';


// Define a class for Page Fixtures Which will hold instances of all page classes
export class PageFixtures {

    // Declare a variable to hold the Page objects for each page class
    readonly page: Page;

    // Declare a variable to hold the instance of RegistrationPage class
    readonly registrationPage: RegistrationPage;

    // Constructor to initialize the Page objects for each page class
    constructor(page: Page) {

        // Initialize the Page object
        this.page = page;

        // Initialize the instances of each page class
        this.registrationPage = new RegistrationPage(page);

    }

    // Getter method to access the Page object
    get basePage(): Page {
        
        return this.page;
    
    }

}