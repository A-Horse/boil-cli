'use strict';

import * as fs from 'fs';
import * as path from 'path';
import * as inquirer from 'inquirer';
import util from './util';


const configFileName = '.boil';
const configFilePath = path.join(process.env.HOME, configFileName) + '';

let askWhereBoil = (cb) => {
    inquirer.prompt([{
        type: 'message',
        name: 'boil-path',
        message: 'where your boilerplate!'
    }], (answers) => {
        let boilPath = answers['boil-path'];
        if( util.checkExist(boilPath) ) {
            let data = {
                boilPath:  boilPath
            };
            fs.writeFile(configFilePath, util.ifyJSON(data), (err) => {
                    if( err ){
                        throw err;
                    }
                cb(data);
            });
        } else {
            console.log('Your input is not a valid path.');
            askWhereBoil();
        }
    });
    
};

let setBoilPath = () => {
    global.boilPath = util.loadJson(configFilePath).boilPath;
};

let checkBoilConfig = (cb) => {
    if( util.checkExist(configFilePath) ){
        setBoilPath();
        cb();
    } else {
        askWhereBoil((data) => {
            global.boilPath = data.boilPath;
            cb();
        });
    }
};




export default checkBoilConfig;
