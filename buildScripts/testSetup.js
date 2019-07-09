//  not transpiled.

//Register babel to transpile before our tests run.
require('babel-register')();

//Dissble webpack features that Mocha doesnt understand. See that expressiong? Treat it like an empty function
require.extensions['.css'] = function(){};
