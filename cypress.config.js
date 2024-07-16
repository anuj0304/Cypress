const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    

    specPattern: [
      'cypress/e2e/ProductSearchTest.spec.cy.js'
    ],
    
   // browser: "firefox", // Specify Firefox as the browser for tests
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: false,  // Optional: Set to false if you only need HTML reports
      reportFilename: 'mochawesome-report.html',  // Ensures the report filename has .html extension
    },

    
  

  },
});
