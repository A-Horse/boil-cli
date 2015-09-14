'use strict';
var wrench = require('wrench');


var Util = require('./lib/util');

var config = require('./config');


var check_pouch = function(){
    if ( !Util.checkExist(config.pouch_path) ) {
        var moks_dir = __dirname + '/moks';
        wrench.copyDirSyncRecursive(moks_dir, config.pouch_path, {
            excludeHiddenUnix: false,
            forceDelete: true    
        });
    }
};

module.exports = check_pouch;
