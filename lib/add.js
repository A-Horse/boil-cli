'use strict';

var wrench = require('wrench'),
    mokmap = require('../moks.json'),
    _ = require('lodash'),
    inquirer = require('inquirer'),
    fs = require('fs'),
    root_pkg = __dirname.split('/').slice(0, -1).join('/'),
    pkg = require('../package.json');

var Util = require('./util');

var mokmap_path = root_pkg + '/moks.json';

var Add = function(name){
  var current_path = '.',
      moks = mokmap.moks,
      target_path = current_path + '/' + name;

  name = Util.removeSlash(name);

  if ( ! Util.checkExist(target_path) ) {
    console.error('Not such file or dictionary!');
    process.exit();
  }

  if ( Object.keys(moks).indexOf(name) >= 0 ) {
    console.error('This file or dictionary already in moks!');
    process.exit();
  }
  ask(name);
  add2Moks(name);
};

var add2Mokmap = function(name, type){
  var nmokmap = _.clone(mokmap, true);
  nmokmap.moks[name] = {type: type};
  fs.writeFileSync(mokmap_path, Util.ifyJSON(nmokmap));
};

var ask = function(name){

  inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: "What is boil type?",
      choices: mokmap.type
    }
  ], function( rst ) {
    var type = rst.name;
    add2Mokmap(name, type);
  });
};

var add2Moks = function(name){
  var target_path = root_pkg + '/moks/' + name;
  wrench.copyDirSyncRecursive(name, target_path, {
    excludeHiddenUnix: false,
    forceDelete: true
  });
  return target_path;
};




module.exports = Add;
