'use strict';
var pkg = require('../package.json');

import * as wrench from 'wrench';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as fsExtra from 'fs-extra';

import * as inquirer from 'inquirer';

import lookup from './lookup';



// TODO: isThere
let copyBoil = (isThere, boil) => {
    
    var targetPath = './' + boil,
        boilPath = global.boilPath + '/' + boil;
    fsExtra.copySync(boilPath, targetPath);
};


export default (isThere) => {

    lookup(global.boilPath, (choices) => {
        inquirer.prompt([{
            type: 'rawlist',
            name: 'boil',
            message: 'Which boilerplate you want?',
            choices: choices
        }], function(answers) {
            let boil = answers.boil.split('/').slice(-1)[0];
            
            copyBoil(isThere, boil);
        });
    });
};

