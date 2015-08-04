var Lookup = require('./lookup'),
    Custom = require('./custom'),
    pkg = require('../package.json'),
    root_pkg = __dirname.split('/').slice(0, -1).join('/'),
    inquirer = require('inquirer');

var Install = module.exports = function(boil_path) {
    'use strict';

    var current_path = '.';
    
    var custom = Custom();
    
};
