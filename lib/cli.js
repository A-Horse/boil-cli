/*
 * author:abychan
 */

'use strict';
import  meow from 'meow';

import * as Lookup from './lookup';
import add from './add';
import remove from './remove';
import install from './install';
import pkg from '../package.json';

let cli = meow({
    help: [
        'Usage',
        'boil [ add | remove | version | help]',
        '--------',
        'add < file | dir >: add file or dir to boilerplate',
        'remove: remove file or dir on boilerplate',
        'version: show version',
        'help: what you read now'
    ]
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
        if ( input.length !== number) {
            cli.help();
            process.exit();
        }  
    }
};


cli.version = () => {
    let content = [
        '',
        ' mok -v' + pkg.version,
        '  ____        _ _         _____ _ _ ',
        ' |  _ \      (_) |       / ____| (_)',
        ' | |_) | ___  _| |______| |    | |_ ',
        ' |  _ < / _ \| | |______| |    | | |',
        ' | |_) | (_) | | |      | |____| | |',
        ' |____/ \___/|_|_|       \_____|_|_|',
        '         --------------------FangWei'
    ].join('\n');
    console.log(content);
};

cli.help = () => {
    cli.showHelp();
};

cli.run = function() {
    let cmd = this.input[0] || '',
        flags = this.flags,
        isThere = !! (flags['t'] || flags['there']);

    needHelp(flags);
    showVersion(flags);
    
    switch (cmd) {
    case '':
        install(isThere);
        break;
    case 'add':
        limitInput(this.input, 2);
        add(this.input[1]);
        break;
    case 'remove':
        limitInput(this.input, 1);
        remove();
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
