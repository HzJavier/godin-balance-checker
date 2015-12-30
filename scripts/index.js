var config = require('../config');
var ROOT_URL = 'https://www.efectivale.com.mx/consultaSaldos/miSaldo?oid=p';

var LONG_WAIT = 5000;
var SHORT_WAIT = 2000;

module.exports = {
  'Efecticard': function (browser) {
    console.log('Getting data from Efecticard');

    if (!config || !config.cardNumber || !config.pass) {
      return false;
    }

    browser
      .url(ROOT_URL)

      // The login page
      .waitForElementVisible('body', SHORT_WAIT)
      .setValue('#tarjetaid', config.cardNumber)
      .setValue('#usuarioid', config.pass)
      .waitForElementVisible('#consulta', SHORT_WAIT)
      .click('#consulta')

      // The money page
      .waitForElementVisible('#saldo', SHORT_WAIT)
      .assert.containsText('#saldo .saldomonto', '$0.00')
      .end();
  }
};
