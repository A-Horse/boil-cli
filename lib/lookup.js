var pkg = require('../package.json'),
    fs = require('fs'),
    inquirer = require('inquirer'),
    pkg_root = __dirname.split('/').slice(0, -1).join('/');

var Lookup = module.exports = function(install) {
    'use strict';
    var moks = pkg.moks,
        moks_path = pkg_root + '/' + moks;

    var moks_dir = fs.readdir(moks_path, function(err, files) {
        var boils = filterFile(files),
            choices = makeChoices(boils);
        console.log(choices);

        inquirer.prompt([{
          type: 'rawlist',
          name: 'boil',
          message: 'What boilerplate you want?',
          choices: choices,
        }], function(answers) {
          install(answers);
        });
    });
};

var filterFile = function(files) {
  'use strict';
  return files.map(function(name){
    var path = pkg_root + '/' + pkg.moks + '/' + name;
    if (fs.lstatSync(path).isDirectory()) {
     return name;
    } 
  });
};

var makeChoices = function(boils) {
  'use strict';
  return boils.map(function(name){
    return {value: pkg_root + '/' + pkg.moks + '/' + name, name: name};
  });
};
