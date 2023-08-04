/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    viewportHeight: 880,
    viewportWidth: 1280
  },
})
