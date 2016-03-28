var path = require('path');
var utils = require('shipit-utils');
var util = require('util');

module.exports = function(shipit) {
  utils.registerTask(shipit, 'pm:start', task);
  function task() {
    shipit.config = shipit.config || {};
    shipit.config.pm = shipit.config.pm || {};
    var config = shipit.config.pm[shipit.options.environment] || {};
    if(!config.path){
      throw new Error('you need to add shipit-pm config');
    }
    var params = config.params || '';
    if(params){
      params = util.format('%s &&', params);
    }
    return shipit.remote(util.format('%s pm2 startOrRestart %s', params, config.path));
  }
}
