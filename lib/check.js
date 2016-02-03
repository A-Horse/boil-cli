'use strict';

import * as fs from 'fs';
import * as path from 'path';
import * as inquirer from 'inquirer';
import util from './util';

import * as config from '../config';


const configFileName = '.boil.json';
const configFilePath = path.join(process.env.HOME, configFileName);

let askWhereBoil = () => {
    inquirer.prompt([{
        type: 'message',
        name: 'boil-path',
        message: 'where your boilerplate!'
    }], (answers) => {
        let boilPath = answers['boil-path'];
        if( util.checkExist(boilPath) ){
            fs.writeFile(configFilePath, {
                boilPath:  boilPath
            }, (err) => {
                if( err ){
                    throw err;
                }
            });
        } else {
            console.log('Your input is not a valid path.');
            askWhereBoil();
        }
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
