const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.opencart.com/index.php?route=common/home",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
