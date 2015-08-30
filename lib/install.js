'use strict';
var pkg = require('../package.json'),
    mokmap = require('../moks.json'),
    wrench = require('wrench'),
    _ = require('lodash'),
    fs = require('fs'),
    fs_extra = require('fs-extra'),
    root_pkg = __dirname.split('/').slice(0, -1).join('/'),
    inquirer = require('inquirer');

var Custom = require('./custom'),
    Lookup = require('./lookup'),
    Pickup = require('./pickup');


var Install = module.exports = function(boil, is_there) {
  var boil_type = mokmap.moks[boil].type;

   
  
  switch ( boil_type ) {
  case 'node-backend':
    
    break;

  case 'web-front':
    Pickup(function(name){
      var target_path = installProject(boil, name);
      Custom.web_front(target_path, name);
    });
    break;

  case 'pure-file':
    installPureFile(boil);
    break;
  }
};

var installProject = function(boil, name){
  var current_path = '.',
      boil_path = root_pkg + '/moks/' + boil,
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
  return target_path;
};

var installPureFile = function(boil){
  var target_path = './' + boil,
      boil_path = root_pkg + '/moks/' + boil;
  fs_extra.copySync(boil_path, target_path);
};

