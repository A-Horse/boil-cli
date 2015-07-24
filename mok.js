'use strict';

var mok = module.exports = {};

mok.config = {

};

mok.version = '0.1';

mok.cli = {};

mok.cli.commands = ['new', 'module'];

mok.cli.version = function() {
    var content = [
        '',
        ' mok -v' + mok.version,
        '                 _    ',
        ' _ __ ___   ___ | | __',
        '| \'_ ` _ \\ / _ \\| |/ /',
        '| | | | | | (_) |   < ',
        '|_| |_| |_|\\___/|_|\\_\\',
        '         ------AbyChan'
    ].join('\n');
  console.log( content );

};

mok.cli.run = function(argv){
  mok.cli.version();
};
