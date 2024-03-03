import { defineConfig } from "cypress";
//verify downlaod import
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl:"http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
    },
    env: {
      demoVar: "Hello from the other",
      demoQA: "https://demoqa.com/",
      theInternet: "https://the-internet.herokuapp.com/",
      Angular: "https://www.globalsqa.com/"
    },
    pageLoadTimeout: 60000,
    viewportHeight: 1000,
    viewportWidth: 1400,
    
  },
});
