'use strict';


var inquirer = require('inquirer'),
    fs = require('fs');


var Util = require('./util');

var Custom = {

  web_front: function(target_path, name){
    var pkg_path = target_path + '/package.json';
    var bwr_path = target_path + '/bower.json';

    var pkg = Util.loadJson(pkg_path);
    var bwr = Util.loadJson(bwr_path);

    var answers = {};


    if ( name ) {

      inquirer.prompt([
        {
          type: "input",
          name: "version",
          message: "What is version?",
          validate: function(value){
            if ( Util.checkVersion(value) ) {
              return true;
            } else {
              return "Please enter a valid vesion!";
            }
          }
        }
      ], function( rst ) {
        answers = rst;
        answers.name = name;
        inputCallBack();
        console.log( JSON.stringify(rst, null, "  ") );
      });

    } else {

      inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your project name?",
          validate: function(value){
            if ( value && value !== '') {
              return true;
            } else {
              return "Please enter a valid name!";
            }
          }
        }, {
          type: "input",
          name: "version",
          message: "What is version?",
          validate: function(value){
            if ( Util.checkVersion(value) ) {
              return true;
            } else {
              return "Please enter a valid vesion!";
            }
          }
        }
      ], function( rst ) {
        answers = rst;
        inputCallBack();
        console.log( JSON.stringify(rst, null, "  ") );
      });
    }
    var inputCallBack = function(){
      pkg.name = answers.name;
      pkg.version = answers.version;

      bwr.name = answers.name;
      bwr.version = answers.version;

      fs.writeFileSync(pkg_path, Util.ifyJSON(pkg));
      fs.writeFileSync(bwr_path, Util.ifyJSON(bwr));
    };
  }
};

module.exports = Custom;




