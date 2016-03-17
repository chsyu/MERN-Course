var hello = require('./greet'),
    hola = require('./greet1'),
    util = require('util');

hello();
hola();
util.log('Log from util');
