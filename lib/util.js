'use strict';
var fs = require('fs');
var Util = module.exports =  {
  
  extend: function(setting, config) {
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
  },

  checkVersion: function(version) {
    return /^\d+.\d+.\d+$/.test(version);
  },

  loadJson: function(path){
    var file = fs.readFileSync(path, 'utf-8');
    return JSON.parse(file);
  },

  ifyJSON: function(str){
    return JSON.stringify(str, null ,'  ');
  },

  checkExist: function(path){
    return fs.existsSync(path);
  },

  removeSlash: function(str){
    return str.replace(/^\/|\/$/g, '');
  }
  
};
