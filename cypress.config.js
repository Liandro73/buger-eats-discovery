const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "projectId": "x6mx8o",
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "baseUrl": "https://buger-eats-qa.vercel.app",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
