/*
 * author:abychan
 */

'use strict';
import * as meow from 'meow';
import * as pkg from '../package.json';
import * as Lookup from './lookup';
import * as Add from './add';
import * as Remove from './remove';
import * as Install from './install';


let cli = meow({
    help: [
        'Usage',
        'mok <template>'
    ],
    pkg: pkg
});



let needHelp = (flags) => {
    if(flags['h'] || flags['help']) {
        cli.help();
        process.exit();
    }
};

let showVersion = (flags) => {
    if(flags['v'] || flags['version']){
        cli.version();
        process.exit();
    }
};

let limitInput = (input, number, max) => {
    if ( max ) {
        if ( input.length > max || input.length < number ) {
            cli.help();
            process.exit();
        }
    } else {
        if ( input.length !== 2) {
            cli.help();
            process.exit();
        }  
    }
};


cli.version = () => {
    let content = [
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

cli.help = () => {
    var content = [
        'help:',
        'usage-------',
        'mok [bolierplate]',
        ''
    ].join('\n');
    console.log(content);
};

cli.run = () => {
    let cmd = this.input[0] || '',
        flags = this.flags,
        isThere = !! (flags['t'] || flags['there']);

    needHelp(flags);
    showVersion(flags);
    
    switch (cmd) {
    case '':
        Install(isThere);
        break;
    case 'add':
        limitInput(this.input, 2);
        Add(this.input[1]);
        break;
    case 'remove':
        limitInput(this.input, 2);
        Remove();
        break;
    case 'help':
        this.help();
        break;
    case 'version':
        cli.version();
        break;
    default:
        this.help();
    }
};

export default cli;
