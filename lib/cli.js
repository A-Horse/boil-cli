/*
 * Mok
 * ------abychan
 */


'use strict';
var meow = require('meow'),
    pkg = require('../package.json'),
    Lookup = require('./lookup'),
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

cli.run = function(argv){

  var cmd = this.input[0] || '',
      flags = this.flags;

  needHelp(flags);

  switch (cmd) {
    case '':
      Lookup(Install);
      break;

    case 'install':
      this.install();
      break;
    
    case 'help':
      this.help();
      break;

    default:
      this.help();
  }
};

cli.install = function() {
  
};


module.exports=  cli; 


var needHelp = function(flags) {
  if(flags['h'] || flags['help']) {
    cli.help();
    //exit if print help
    process.exit();
  }
};
