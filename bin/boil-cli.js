'use strict';

// require('../lib/check.js')();
import checkBoilConfig from '../lib/check';
import cli from '../lib/cli';


checkBoilConfig();
cli.run(process.argv);

