'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inquirer = require('inquirer');

var inquirer = _interopRequireWildcard(_inquirer);

var _path = require('path');

var path = _interopRequireWildcard(_path);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _lookup = require('./lookup');

var _lookup2 = _interopRequireDefault(_lookup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Remove = function Remove() {
    (0, _lookup2.default)(global.boilPath, function (choices) {
        inquirer.prompt([{
            type: 'rawlist',
            name: 'boil',
            message: 'Which boilerplate you want to remove?',
            choices: choices
        }], function (answers) {
            var boil = answers.boil.split('/').slice(-1)[0];
            removeBoil(boil);
        });
    });
};

var removeBoil = function removeBoil(name) {
    console.log(path.join(global.boilPath, name));
    _util2.default.rmdir(path.join(global.boilPath, name));
};

exports.default = Remove;