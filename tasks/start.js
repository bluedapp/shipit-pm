var path = require('path');
var utils = require('shipit-utils');

module.exports = function(shipit) {
  utils.registerTask(shipit, 'pm:start', task);
  function task() {
    shipit.config = shipit.config || {};
    shipit.config.pm = shipit.config.pm || {};
    var config = shipit.config.pm[shipit.options.environment];
    if(!config){
      throw new Error('you need to add shipit-pm config');
    }

    return shipit.remote('pm2 startOrRestart ' + config);
  }
}
