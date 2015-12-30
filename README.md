# The Godin Balance Checker

The module uses [Nightwatch JS](http://nightwatch.org) for automated browser checking.

## Set Up Nightwatch

- [Install Nightwatch](http://nightwatchjs.org/guide) and the npm package globally.
- Place the selenium standalone server in your project directory. 
- Install [Java for OSX](https://support.apple.com/kb/DL1572?locale=en_US) if you get Java Runtime Environment errors.
- Install [Chrome Driver](http://chromedriver.storage.googleapis.com/index.html?path=2.9/).

## Set your config file

On the root of the project, create `config.js`:

```
module.exports = {
  cardNumber: [your-card-number],
  pass: [your-password]
};
```

## Run the script

```
$ nightwatch
```
