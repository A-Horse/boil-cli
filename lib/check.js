'use strict';


import * as wrench from 'wrench';
import * as path from 'path';

import * as Util from './lib/util';

import * as config from '../config';


// let checkBoilDir = () => {
//     if ( !Util.checkExist(config.pouch_path) ) {
//         var moks_dir = __dirname + '/moks';
//         wrench.copyDirSyncRecursive(moks_dir, config.pouch_path, {
//             excludeHiddenUnix: false,
//             forceDelete: true    
//         });
//     }
// };

const configFileName = '.boil.yaml';
const configFilePath = path.join(process.env.HOME + configFileName);

let checkBoilConfig = () => {
    
};


export default checkBoilConfig;
