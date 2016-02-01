'use strict';

import * as fs from 'fs';
import * as path from 'path';
import * as inquirer from 'inquirer';
import util from './util';

import * as config from '../config';


const configFileName = '.boil.yaml';
const configFilePath = path.join(process.env.HOME, configFileName);

let askWhereBoil = () => {
    // fs.writeFile(configFilePath, {
    // }, (err) => {
    // });
    inquirer.prompt([{
        type: 'message',
        name: 'boil-path',
        message: 'where your boilerplate!'
    }], (answers) => {
        console.log("answers = ", answers);
        
    });
    
};


let checkBoilConfig = () => {
    if( util.checkExist(configFilePath) ){
        console.log('exist!');
    } else {
        console.log('not exist!');
        askWhereBoil();
        
    }
    
};


export default checkBoilConfig;
