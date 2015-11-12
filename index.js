/**
 * shipit cnpm
 */
var utils = require('shipit-utils');
module.exports = function (shipit) {
  shipit = utils.getShipit(shipit);
  require('./tasks/start')(shipit);
  shipit.on('published', function () {
    console.log('deployed');
    shipit.start('pm:start');
  });
};
