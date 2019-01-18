# This automatin test is written with CodeceptJS and Selenium frameworks.

# Installtion steps:

- Clone / Download the e2e-tests repository to your local machine
- Open the project with your favourite editor (for example: PhpStrom)
- For the test environment setup, you need to install NODE and NPM 
- With terminal command line "npm install" you can install npm (node.js package manager)
- Also you can download the Node.js and install. Url: https://nodejs.org/en/download/
- After installing them you should check the version of them by typing in terminal: node - v  & npm -v
- Now you are ready to start the test with command: npm run acceptance-tests

# WebDriver:
- BrowserStack is usded for Selenium Webdriver tests with WebdriverIO
- BrowserStack already setup in local.json file of the config folder 
- You can see the running automation video in Browser with BrowserStack. I have uploaded one video of the test.

# References:
- https://codecept.io/acceptance
- https://codecept.io/helpers/WebDriverIO
- https://www.browserstack.com/

# How to start the test:
- with terminal command: npm run acceptance-tests
- after entering the above command, automation will start and complete all the steps with OK result like below:

Search --
   Search for TITANIC movie
    I am on page "https://www.imdb.com/"
   User clicks on SEARCH Navigation Bar
    I click "#navbar-query"
   User type TITANIC in SEARCH Navigation Bar
    I fill field "#navbar-query", "titanic"
   User clicks Search Button
    I click "#navbar-submit-button"
   User clicks 1st Movie from the Search Result
    I see "titanic"
    I click "//*[@id="main"]/div/div[2]/table/tbody/tr[1]/td[2]/a"
  ✔ OK in 11030ms

  OK  | 1 passed  


