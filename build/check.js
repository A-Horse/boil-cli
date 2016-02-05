'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _path = require('path');

var path = _interopRequireWildcard(_path);

var _inquirer = require('inquirer');

var inquirer = _interopRequireWildcard(_inquirer);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var configFileName = '.boil';
var configFilePath = path.join(process.env.HOME, configFileName) + '';

var askWhereBoil = function askWhereBoil(cb) {
    inquirer.prompt([{
        type: 'message',
        name: 'boil-path',
        message: 'where your boilerplate!'
    }], function (answers) {
        var boilPath = answers['boil-path'];
        if (_util2.default.checkExist(boilPath)) {
            (function () {
                var data = {
                    boilPath: boilPath
                };
                fs.writeFile(configFilePath, _util2.default.ifyJSON(data), function (err) {
                    if (err) {
                        throw err;
                    }
                    cb(data);
                });
            })();
        } else {
            console.log('Your input is not a valid path.');
            askWhereBoil();
        }
    });
};

var setBoilPath = function setBoilPath() {
    global.boilPath = _util2.default.loadJson(configFilePath).boilPath;
};

var checkBoilConfig = function checkBoilConfig(cb) {
    if (_util2.default.checkExist(configFilePath)) {
        setBoilPath();
        cb();
    } else {
        askWhereBoil(function (data) {
            global.boilPath = data.boilPath;
            cb();
        });
    }
};

exports.default = checkBoilConfig;