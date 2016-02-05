'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _rimraf = require('rimraf');

var rimraf = _interopRequireWildcard(_rimraf);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    extend: function extend(setting, config) {
        var rst = {};
        for (var attr in setting) {
            rst[attr] = setting[attr];
        }
        for (var attr in config) {
            if (config[attr] === '') {
                continue;
            }
            rst[attr] = config[attr];
        }
        return rst;
    },
    exist: function exist(path) {
        return fs.lstatSync(path).isDirectory() || fs.lstatSync(path).isFile();
    },
    checkVersion: function checkVersion(version) {
        return (/^\d+.\d+.\d+$/.test(version)
        );
    },
    loadJson: function loadJson(path) {
        var file = fs.readFileSync(path, 'utf-8');
        return JSON.parse(file);
    },
    ifyJSON: function ifyJSON(str) {
        return JSON.stringify(str, null, '  ');
    },
    parseJson: function parseJson(str) {
        return JSON.parse(str);
    },
    checkExist: function checkExist(path) {
        return fs.existsSync(path);
    },
    removeSlash: function removeSlash(str) {
        return str.replace(/^\/|\/$/g, '');
    },
    rmdir: function rmdir(source) {
        rimraf.sync(source);
    },
    filterDir: function filterDir(files) {
        return files.filter(function (name) {
            var path = pkg_root + '/' + pkg.moks + '/' + name;
            return fs.lstatSync(path).isDirectory();
        });
    },
    exitProcess: function exitProcess() {
        process.exit();
    }
};