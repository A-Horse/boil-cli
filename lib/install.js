'use strict';
var Lookup = require('./lookup'),
    Custom = require('./custom'),
    pkg = require('../package.json'),
    mokmap = require('../moks.json'),
    wrench = require('wrench'),
    _ = require('lodash'),
    root_pkg = __dirname.split('/').slice(0, -1).join('/'),
    inquirer = require('inquirer');

var Custom = require('./custom');


var Install = module.exports = function(boil, name) {
  
    var current_path = '.',
        boil_path = root_pkg + '/moks/' + boil,
        boil_type = mokmap.moks[boil].type,
        target_path;

  if(!name){
    target_path = current_path;
  } else {
    target_path = current_path + '/' + name;
  }

  wrench.copyDirSyncRecursive(boil_path, target_path, {
    excludeHiddenUnix: false,
    forceDelete: true
  });
  
  switch ( boil_type ) {
  case 'node-backend':
    
    break;

  case 'web-front':
    Custom.web_front(target_path);
    break;
  }  
};
