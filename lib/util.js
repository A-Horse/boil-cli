

var Util = module.exports =  {
  
  extend: function(setting, config) {
    'use strict';
    var rst = {};
    for (var attr in setting) {
      rst[attr] = setting[attr];
    }
    for (var attr in config) {
      if(config[attr] === '') {
        continue;
      }
      rst[attr] = config[attr];
    }
    return rst; 
  }

};
