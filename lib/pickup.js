'use strict';

var inquirer = require('inquirer');

var Pickup = function(callback){
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What project name you want?'
  }], function(answer) {
    callback(answer.name);
  });
};

module.exports = Pickup;
