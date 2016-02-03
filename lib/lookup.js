'use strict';
import * as fs from 'fs';


//return {name:path}s;
let makeChoices = (boilPath, boils) => {
    return boils.map((name) => {
        return {
            value: boilPath + '/' + name,
            name: name
        };
    });
};

export default (boilPath, cb) => {
    console.log(boilPath);
    fs.readdir(boilPath, (err, files) => {
        let  choices = makeChoices(boilPath, files);
        cb(choices);
    });
};

