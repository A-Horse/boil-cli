/*
 * Mok
 * ------abychan
 */

'use strict';
var meow = require('meow'),
    pkg = require('../package.json'),
    Lookup = require('./lookup'),
    Add = require('./add'),
    Remove = require('./remove'),
    Install = require('./install');

var cli = meow({
  help: [
    'Usage',
    'mok <template>'
  ],
  pkg: pkg
});


cli.version = function() {
  var content = [
    '',
    ' mok -v' + pkg.version,
    '                 _    ',
    ' _ __ ___   ___ | | __',
    '| \'_ ` _ \\ / _ \\| |/ /',
    '| | | | | | (_) |   < ',
    '|_| |_| |_|\\___/|_|\\_\\',
    '         ------AbyChan'
  ].join('\n');
  console.log(content);
};

cli.help = function() {
  var content = [
    'help:',
    'usage-------',
    'mok [bolierplate]',
    ''
  ].join('\n');
  console.log(content);
};

cli.run = function(){

  var cmd = this.input[0] || '',
      flags = this.flags,
      is_there = !! (flags['t'] || flags['there']);

  needHelp(flags);
  showVersion(flags);
  
  switch (cmd) {
  case '':
    Lookup(is_there);
    break;

  case 'install':
    Install();
    break;

  case 'add':
    limitInput(this.input, 2);
    Add(this.input[1]);
    break;

  case 'remove':
    limitInput(this.input, 1, 2);
    Remove(this.input[1]);
    break;

  case 'help':
    this.help();
    break;

  default:
    this.help();
  }
};


module.exports=  cli;

var needHelp = function(flags) {
  if(flags['h'] || flags['help']) {
    cli.help();
    //exit if print help
    process.exit();
  }
};

var showVersion = function(flags) {
  if(flags['v'] || flags['version']){
    cli.version();
    process.exit();
  }
};

var limitInput = function(input, number, max){
  if ( max ) {
    if ( input.length > max || input.length < number ) {
      console.error('Invalid parameters length!');
      process.exit();
    }
  } else {
    if ( input.length !== 2) {
      console.error('Invalid parameters length!');
      process.exit();
    }  
  }
};

