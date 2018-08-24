# JS Training

## Install prerequisites

### Git
Check if you have a Git client already installed:

```
git --version
```

If your OS can not recognize this command, install Git. For details please refer to [this page](http://git-scm.com).
When installing under Windows, please make sure you select the following option:

* Use git from Windows command prompt

### Node.js

We make use of [Node.js](https://nodejs.org/) `8.9.4`. 

It is highly recommended to install the [Node Version Manager](https://github.com/creationix/nvm) which manages multiple active
[Node.js](https://nodejs.org/) versions on your machine. The latest windows version of nvm can be downloaded [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.6/nvm-setup.zip).

Having the [Node Version Manager](https://github.com/creationix/nvm) installed, install Node.js:

```
nvm install 8.9.4
```

and set it to be used:

```
nvm use 8.9.4
```

### npm

Having the Node.js installed you have also its package manager - [npm](https://www.npmjs.com/) installed. We have been using the `5.6.0` version of [npm](https://www.npmjs.com/).

Check your current [npm](https://www.npmjs.com/) version: 

```
npm --version
```

If it's less than `5.6.0`, then:

```
npm install -g npm@5.6.0
```

### Karma

Install [Karma](https://karma-runner.github.io) test runner globally:

```
npm install -g karma-cli@1.0.1
```

### Mocha

Install [Mocha](https://mochajs.org/) test framework:

```
npm install -g yarn
```

### Yarn

Install [Yarn](https://yarnpkg.com) package manager (a npm alternative):


## Clone this GIT repository

```
git clone https://github.com/devonfw/js-training.git -b 0-initial
```

## Install [Node.js](https://nodejs.org/) dependencies

```
cd js-training
npm install
```

This may take several minutes...

Now you are ready to learn JavaScript :)
