// Import necessary modules and types from Cucumber and Playwright libraries 
import { Before, After, BeforeAll,AfterAll,Status} from '@cucumber/cucumber';

// Importing fs and path modules for file system operations
import fs from 'fs';
import path from 'path';

// Import custom world to access browser and page instances
import { CustomWorld } from './custom_world';

// Hook to run before all tests (if needed for global setup)
Before(async function (this: CustomWorld) {
    await this.init();
});

// Hook to run after each scenario to close the browser and page instances
After(async function (this: CustomWorld) {
     await this.close();
});

// Hook to capture screenshot on test failure
After(async function (this: CustomWorld,scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshotPath = path.resolve(`screenshots/${Date.now()}.png`);

    // Ensure folder exists
    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });

    // Capture and save screenshot
    await this.page.screenshot({ path: screenshotPath, fullPage: true });

    // Attach screenshot to report (if supported by reporter)
    const imageBuffer = fs.readFileSync(screenshotPath);
    await this.attach(imageBuffer, 'image/png');
   
  }
  
 });
 