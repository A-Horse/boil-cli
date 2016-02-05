'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//return {name:path}s;
var makeChoices = function makeChoices(boilPath, boils) {
    return boils.map(function (name) {
        return {
            value: boilPath + '/' + name,
            name: name
        };
    });
};

exports.default = function (boilPath, cb) {
    console.log(boilPath);
    fs.readdir(boilPath, function (err, files) {
        var choices = makeChoices(boilPath, files);
        cb(choices);
    });
};