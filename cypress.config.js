const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qauto.forstudy.space',
    env: {
      username: 'guest',
      password: 'welcome2qauto',
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videosFolder: 'videos',
    screenshotsFolder: 'screenshots',
    retries: {
      runMode: 2,
      openMode: 3
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000
  }
});
