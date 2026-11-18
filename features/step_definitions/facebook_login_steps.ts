// Typescript file for step definitions related to Facebook login feature
// Importing necessary modules from Cucumber library & defining step definitions
import { Given, When, Then } from '@cucumber/cucumber';

// Importing Playwright modules for browser automation
import {Page, Browser, chromium} from 'playwright';
import { expect } from '@playwright/test';

// Variables to hold browser and page instances
export let page: Page;
export let browser: Browser;

// Step definitions for Facebook login feature
Given('the user navigates to the facebook page', async function () {
           
          // console.log('User is on facebook login page');
            browser = await chromium.launch({ 
            headless: false,
          
          });
          
          page = await browser.newPage();
          await page.goto('https://www.facebook.com/');

        });

When('I will validate the title of the page', async function () {
           
          // console.log('Page Title is validated');
          const title = await page.title();
          expect(title).toBe('Fcebook – log in or sign up');
          console.log(`Title of the page is: ${title}`);

         });

// Then('I enter the username as {string}', async function (string) {

//           // console.log(`Username is entered as: ${string}`);
//           await page.locator('input[id="email"]').fill(string);  
           
//          });

// Then('I enter the password as {string}', async function (string) {
    
//           // console.log(`Password is entered as: ${string}`);
//           await page.locator('input[id="pass"]').fill(string); 

//          });

Then('I click on the login button', async function () {
           
          // console.log('Login button is clicked');
          await page.locator('button[name="login"]').click();
          await page.close();
          await browser.close();

         });