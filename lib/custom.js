var questions = require('questions');


var Custom = module.exports = function() {
    'use strict';

    questions.askMany({
        name: {
            info: 'Name'
        },
        version: {
            info: 'version(1.0.0)',
            required: false
        }

    }, function(result) {
        console.log(result);

    });

};
