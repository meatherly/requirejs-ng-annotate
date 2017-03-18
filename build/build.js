var requirejs = require('requirejs');

var config = {
  // dir: "../",
  baseUrl: __dirname,
  name: "index",
  // mainConfigFile: "index.js",
  out: "../bin/main.js",
  // disabling timeout for script loading to support slow internet connections
  waitSeconds: 0,
  optimize: "none",
  paths: {
    "nga": "plugins/nga"
  },
  stubModules: ["nga"],
  nodeRequire: require
};
console.log("sdfasdf", requirejs);

requirejs.optimize(config, function (buildResponse) {
  console.log("sdfasdf");
  //buildResponse is just a text output of the modules
  //included. Load the built file for the contents.
  //Use config.out to get the optimized file contents.
  var contents = fs.readFileSync(config.out, 'utf8');
  console.log("contents", buildResponse);
}, function(err) {
  //optimization err callback
});