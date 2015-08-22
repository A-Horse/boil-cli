'use strict';

var wrench = require('wrench'),
    mokmap = require('../moks.json'),
    _ = require('lodash'),
    inquirer = require('inquirer'),
    fs = require('fs'),
    root_path = __dirname.split('/').slice(0, -1).join('/'),
    pkg = require('../package.json');

var Util = require('./util');

var mokmap_path = root_path + '/moks.json';

var Remove = function(name){
  var moks = Object.keys(mokmap.moks);

  if ( name ) {
    checkBoilExist(name);
    removeBoil(name);
  } else {
    askRemove(moks);
  }
};


var askRemove = function(moks){
  inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: "What boil you want to remove?",
      choices: moks
    }
  ], function( rst ) {
    var name = rst.name;
    removeBoil(name);
  });
};

var removeBoil = function(name){
  var newMokmap = _.clone(mokmap, true);
  delete newMokmap.moks[name];
  fs.writeFileSync(mokmap_path, Util.ifyJSON(newMokmap));
  Util.rmdir(root_path + '/moks/' + name);
};

var checkBoilExist = function(name){
  var moks = Object.keys(mokmap.moks);
  if ( moks.indexOf(name) >= 0 ){
    console.error('This boil not exsit!');
    process.exit();
  }
};

module.exports = Remove;
