'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wrench = require('wrench');

var wrench = _interopRequireWildcard(_wrench);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _fsExtra = require('fs-extra');

var fsExtra = _interopRequireWildcard(_fsExtra);

var _inquirer = require('inquirer');

var inquirer = _interopRequireWildcard(_inquirer);

var _lookup = require('./lookup');

var _lookup2 = _interopRequireDefault(_lookup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var pkg = require('../package.json');

// TODO: isThere
var copyBoil = function copyBoil(isThere, boil) {

    var targetPath = './' + boil,
        boilPath = global.boilPath + '/' + boil;
    fsExtra.copySync(boilPath, targetPath);
};

exports.default = function (isThere) {

    (0, _lookup2.default)(global.boilPath, function (choices) {
        inquirer.prompt([{
            type: 'rawlist',
            name: 'boil',
            message: 'Which boilerplate you want?',
            choices: choices
        }], function (answers) {
            var boil = answers.boil.split('/').slice(-1)[0];

            copyBoil(isThere, boil);
        });
    });
};