

var Custom = module.exports = function() {
    'use strict';

    var default = {
        version: '1.0.0'
    };


};


var checkVersion = function(version) {
  'use strict';
  return /^\d+.\d+.\d+$/.test(version);
};


var askOne = function(question, callback) {
  'use strict';
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(quesion,required === false ? '(Optional)')
};
