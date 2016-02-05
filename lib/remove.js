'use strict';


import * as inquirer from 'inquirer';
import * as path from 'path';
import util from './util';
import lookup from './lookup';


var Remove = function(){
    lookup(global.boilPath, (choices) => {
        inquirer.prompt([{
            type: 'rawlist',
            name: 'boil',
            message: 'Which boilerplate you want to remove?',
            choices: choices
        }], function(answers) {
            let boil = answers.boil.split('/').slice(-1)[0];
            removeBoil(boil);
        });
    });
};


var removeBoil = function(name){
    console.log(path.join(global.boilPath, name));
    util.rmdir(path.join(global.boilPath, name));
};



export default Remove;
