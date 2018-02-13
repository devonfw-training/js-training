# JS Training

## Installation instruction

1. Install git
2. Clone this repository
3. Checkout branch 0-initial (git checkout 0-initial)
4. Install node version manager
5. Install node 8.7.0 (nvm install 8.7.0)
6. Tell nvm to use installed node version (nvm use 8.7.0)
7. In the repository directiory (with package.json file) - call npm install
8. Install karma globally - npm i -g karma-cli
9. Install mocha globally - npm i -g mocha
10. Install yarn globally - npm i -g yarn

## When on webpack branch:

1. To run the app: "npm start" - app starts on port 3000
2. To run karma tests: "karma start"
    - use 'Chrome' in karma.conf.js browsers array to test in the Chrome browser
    - use 'ChromeHeadless' in karma.conf.js browsers array to test in the headless version of Chrome
3. To run mocha tests: "mocha node"


## TODOS:
1. correct webpack config in order to include other resources than .js