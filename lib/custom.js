'use strict';


var inquirer = require('inquirer'),
    Rx = require('rx');

var Util = require('./util');

var Custom = {

  web_front: function(target_path){
    var pkg = Util.loadJson(target_path + '/package.json');
    var bwr = Util.loadJson(target_path + '/bower.json');

    var prompts = Rx.Observable.create(function( obs ) {
      obs.onNext({  type: 'input',
                    name: 'name',
                    message: 'What project name you want?' });
      setTimeout(function () {
        obs.onNext({  type: 'input',
                      name: 'name',
                      message: 'What project name you want??' });
        obs.onCompleted();
      });
    });


    inquirer.prompt(prompts).process.subscribe(
      function(r){
        console.log(r);
      },
      null,
      function(r){
        console.log(r);
      }
    );

  }


module.exports = Custom;




