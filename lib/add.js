'use strict';

import * as wrench from 'wrench';

import * as Util from './util';

let add2Boil = (boilPath, name) => {
    let targetPath = boilPath + '/' + name;
    wrench.copyDirSyncRecursive(name, targetPath, {
        excludeHiddenUnix: false,
        forceDelete: true
    });
};


let Add = (name) => {
    let current_path = '.',
        boilPath = global.boilPath,
        targetPath = current_path + '/' + name;

    name = Util.removeSlash(name);
    
    if ( ! Util.checkExist(targetPath) ) {
        console.error('Not such file or dictionary!');
        Util.exitProcess();
    }

    if ( Util.exist(boilPath + '/' + name) ) {
        console.error('This file or dictionary already in moks!');
        Util.exitProcess();
    }
    
    add2Boil(boilPath, name);
};

export default Add;

