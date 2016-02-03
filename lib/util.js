'use strict';
import * as fs from 'fs';
import * as rimraf from 'rimraf';

export default  {
    
    extend (setting, config) {
        let rst = {};
        for (let attr in setting) {
            rst[attr] = setting[attr];
        }
        for (let attr in config) {
            if(config[attr] === '') {
                continue;
            }
            rst[attr] = config[attr];
        }
        return rst; 
    },

    exist (path) {
        return fs.lstatSync(path).isDirectory() ||
            fs.lstatSync(parseFloat).isFile();
    },
    
    checkVersion (version) {
        return /^\d+.\d+.\d+$/.test(version);
    },

    loadJson (path){
        let file = fs.readFileSync(path, 'utf-8');
        return JSON.parse(file);
    },

    ifyJSON (str){
        return JSON.stringify(str, null ,'  ');
    },

    parseJson (str) {
        return JSON.parse(str);
    },

    checkExist (path){
        return fs.existsSync(path);
    },

    removeSlash (str){
        return str.replace(/^\/|\/$/g, '');
    },

    rmdir (source){
        rimraf.sync(source);
    },

    filterDir (files) {
        return files.filter((name) => {
            let path = pkg_root + '/' + pkg.moks + '/' + name;
            return fs.lstatSync(path).isDirectory();
        });
    },

    exitProcess () {
        process.exit();
    }

};
