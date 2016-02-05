/*
 * author:abychan
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _lookup = require('./lookup');

var Lookup = _interopRequireWildcard(_lookup);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _remove = require('./remove');

var _remove2 = _interopRequireDefault(_remove);

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _meow2.default)({
    help: ['Usage', 'boil [ add | remove | version | help]', '--------', 'add < file | dir >: add file or dir to boilerplate', 'remove: remove file or dir on boilerplate', 'version: show version', 'help: what you read now']
});

var needHelp = function needHelp(flags) {
    if (flags['h'] || flags['help']) {
        cli.help();
        process.exit();
    }
};

var showVersion = function showVersion(flags) {
    if (flags['v'] || flags['version']) {
        cli.version();
        process.exit();
    }
};

var limitInput = function limitInput(input, number, max) {
    if (max) {
        if (input.length > max || input.length < number) {
            cli.help();
            process.exit();
        }
    } else {
        if (input.length !== number) {
            cli.help();
            process.exit();
        }
    }
};

cli.version = function () {
    var content = ['', ' mok -v' + _package2.default.version, '  ____        _ _         _____ _ _ ', ' |  _ \      (_) |       / ____| (_)', ' | |_) | ___  _| |______| |    | |_ ', ' |  _ < / _ \| | |______| |    | | |', ' | |_) | (_) | | |      | |____| | |', ' |____/ \___/|_|_|       \_____|_|_|', '         --------------------FangWei'].join('\n');
    console.log(content);
};

cli.help = function () {
    cli.showHelp();
};

cli.run = function () {
    var cmd = this.input[0] || '',
        flags = this.flags,
        isThere = !!(flags['t'] || flags['there']);

    needHelp(flags);
    showVersion(flags);

    switch (cmd) {
        case '':
            (0, _install2.default)(isThere);
            break;
        case 'add':
            limitInput(this.input, 2);
            (0, _add2.default)(this.input[1]);
            break;
        case 'remove':
            limitInput(this.input, 1);
            (0, _remove2.default)();
            break;
        case 'help':
            this.help();
            break;
        case 'version':
            cli.version();
            break;
        default:
            this.help();
    }
};

exports.default = cli;