'use strict';

var inquirer = require('inquirer');

var Pickup = function(callback){
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What project name you want?',
    validate: function(value){
      if ( !value || value === '' ) {
        return "Please enter a valid name!";
      } else {
        return true;
      }
    }
  }], function(answer) {
    callback(answer.name);
  });
};

module.exports = Pickup;
