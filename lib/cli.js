/*
 * Mok
 * ------abychan
 */


'use strict';
var meow = require('meow');

var cli = meow({
    help: [
        'Usage',
        'mok <template>'
    ]
});

exports.modules = cli; 

cli.version = function() {
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
    console.log(content);
};

cli.help = function() {
    var content = [

    ];
};

cli.run = function(argv){

  mok.processCWD = process.cwd();

};
