'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wrench = require('wrench');

var wrench = _interopRequireWildcard(_wrench);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var add2Boil = function add2Boil(boilPath, name) {
    var targetPath = boilPath + '/' + name;
    wrench.copyDirSyncRecursive(name, targetPath, {
        excludeHiddenUnix: false,
        forceDelete: true
    });
};

var Add = function Add(name) {
    var current_path = '.',
        boilPath = global.boilPath,
        targetPath = current_path + '/' + name;

    name = _util2.default.removeSlash(name);

    if (!_util2.default.checkExist(targetPath)) {
        console.error('Not such file or dictionary!');
        _util2.default.exitProcess();
    }

    if (_util2.default.exist(boilPath + '/' + name)) {
        console.error('This file or dictionary already in moks!');
        _util2.default.exitProcess();
    }

    add2Boil(boilPath, name);
};

exports.default = Add;