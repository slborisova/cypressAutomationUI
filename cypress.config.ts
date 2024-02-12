import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    //baseUrl: 'https://play1.automationcamp.ir',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      stage: "https://stage.pasv.us/user/login",
      prod: "https://coding.pasv.us/course",
      test: "Hello World!",
      demoQA: "https://demoqa.com",
      expected_conditions:
        "https://play1.automationcamp.ir/expected_conditions.html",
      herokuapp: "https://the-internet.herokuapp.com",
      play1: "https://play1.automationcamp.ir"
    },
  },

  defaultCommandTimeout: 16000,
});
