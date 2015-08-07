'use strict';

var util = require('./util'),
  async = require('async');

var Custom = module.exports = function(opt) {

  opt = opt || {};

  var default_setting = {
    version: '1.0.0'
  };

  var custom_setting = {

  };


  async.waterfall([
    function(callback){
      if ( opt.there ) {
        callback();
      }

      askOne({info: 'name?'}, function(res){
        custom_setting.name = res;
        callback();
      });
    },

    function(callback){
      askOne({info: 'hash', required: false }, function(res){
        custom_setting.version = res;
        callback();
      }, checkVersion);
    },

    function(callback){
      askOne({info: 'version: (1.0.0)', required: false }, function(res){
        custom_setting.version = res;
        callback();
      }, checkVersion);
    },

    function(callback){
      askOne({info: 'description: ', required: false}, function(res){
        custom_setting.description = res;
        callback(null, 'done');
      });
    }
  ], function(err, result){
    if ( result !== 'done' ) {
      throw 'UNKOWN ERROR!';
    }


    var setting = util.extend(default_setting, custom_setting);
    console.log(setting);

  });








};


var checkVersion = function(version) {
  return /^\d+.\d+.\d+$/.test(version);
};



var askOne = function(question, callback, check) {
  var stdin = process.stdin,
    stdout = process.stdout;

  stdin.resume();
  stdout.write( (question.required === false ? '(Optional)' : '' ) + question.info + ':');

  stdin.once('data', function(data){
    var result = data.toString().trim();
    if ( question.required !== false && result === '' ) {
      //ask agagin
      askOne(question, callback);
    } else {
      //check input
      if ( check && result !== '') {
        if ( !check(result) ) {
          stdin.write('Invalid Input! Please input agagin!');
          return askOne(question, callback);
        }
      }

      stdin.pause();
      callback(result);
    }

  });

};
