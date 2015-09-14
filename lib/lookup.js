'use strict';

var pkg = require('../package.json'),
    fs = require('fs'),
    async = require('async'),
    inquirer = require('inquirer'),
    pkg_root = __dirname.split('/').slice(0, -1).join('/');

var Install = require('./install');

var config = require('../config');

var Lookup = module.exports = function(is_there) {
  
    var moks = pkg.moks,
        //moks_path = pkg_root + '/' + moks;
        moks_path = config.pouch_path;

    var moks_dir = fs.readdir(config.pouch_path, function(err, files) {
        var  choices = makeChoices(files);
      
        inquirer.prompt([{
            type: 'rawlist',
            name: 'boil',
            message: 'What boilerplate you want?',
            choices: choices
        }], function(answers) {
            var boil = answers.boil.split('/').slice(-1)[0];
            Install(boil, is_there);
        });
    });
};

//return dirs
var filterFile = function(files) {
    return files.map(function(name){
        var path = pkg_root + '/' + pkg.moks + '/' + name;
        if (fs.lstatSync(path).isDirectory()) {
            return name;
        } 
    });
};

//return {name:path}s;
var makeChoices = function(boils) {
    return boils.map(function(name){
        return {value: pkg_root + '/' + pkg.moks + '/' + name, name: name};
    });
};


