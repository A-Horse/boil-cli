'use strict';
var pkg = require('../package.json');


import * as mokmap from '../moks.json';
import * as wrench from 'wrench';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as fs_extra from 'fs-extra';

import * as inquirer from 'inquirer';

import lookup from './lookup';


var config = require('../config');


// TODO: isThere
let copyBoil = (isThere, boil) => {
    var targetPath = './' + boil,
        boilPath = config.pouch_path + '/' + boil;
    fs_extra.copySync(boilPath, targetPath);
};


export default (isThere) => {
    console.log(global.boilPath);
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

