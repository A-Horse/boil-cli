'use strict';

import * as wrench from 'wrench';

import util from './util';

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

    name = util.removeSlash(name);
    
    if ( ! util.checkExist(targetPath) ) {
        console.error('Not such file or dictionary!');
        util.exitProcess();
    }

    if ( util.exist(boilPath + '/' + name) ) {
        console.error('This file or dictionary already in moks!');
        util.exitProcess();
    }
    
    add2Boil(boilPath, name);
};

export default Add;

