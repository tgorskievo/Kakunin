module.exports = {
  browserWidth: 1600,
  browserHeight: 900,
  browserLanguage: 'en-GB',
  timeout: 60,
  elementsVisibilityTimeout: 5,
  waitForPageTimeout: 5,
  downloadTimeout: 30,
  reports: '/reports',
  downloads: '/downloads',
  data: '/data',
  features: ['/features'],
  pages: ['/pages'],
  matchers: ['/matchers'],
  generators: ['/generators'],
  form_handlers: ['/form_handlers'],
  step_definitions: ['/step_definitions'],
  comparators: ['/comparators'],
  dictionaries: ['/dictionaries'],
  transformers: ['/transformers'],
  regexes: ['/regexes'],
  hooks: ['/hooks'],
  clearEmailInboxBeforeTests: false,
  clearCookiesAfterScenario: true,
  clearLocalStorageAfterScenario: true,
  email: null,
  headless: true,
  noGpu: true,
  type: 'otherWeb',
  baseUrl: 'http://localhost:8080',
  apiUrl: 'http://localhost:8080/',
  browserMob: {
    serverPort: 8887,
    port: 8888,
    host: 'localhost',
  },
  browserstack: {
    seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
    defaultPort: 45691,
    capabilities: {
      'browserstack.user': '',
      'browserstack.key': '',
      'browserstack.local': true,
      browserName: 'chrome',
    },
  },
  accounts: {
    someAccount: {
      accounts: [
        {
          email: '',
          password: '',
        },
      ],
    },
  },
};
