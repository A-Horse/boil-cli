'use strict';
var pkg = require('../package.json');


import * as mokmap from '../moks.json';
import * as wrench from 'wrench';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as fs_extra from 'fs-extra';

import * as inquirer from 'inquirer';

import lookup from './lookup';
import Pickup from './pickup';

var config = require('../config');


// TODO: isThere
let copyBoil = (isThere, boil) => {
    var target_path = './' + boil,
        boil_path = config.pouch_path + '/' + boil;
    fs_extra.copySync(boil_path, target_path);
};


let Install = module.exports = (isThere) => {
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

