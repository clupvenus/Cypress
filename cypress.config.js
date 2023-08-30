const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1000,
  viewportWidth:1200,
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl:"https://google.com",
    projectId: "p6mhi2",
    "video":false,
    "retire":2
  }, 

});
