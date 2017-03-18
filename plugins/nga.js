define([], function(ngAnnotate) {
  var ngAnnotate, _buildMap = {};


  return {
    load: function (name, req, onload, config) {
      if (typeof process !== "undefined" &&
        process.versions &&
        !!process.versions.node) {
        //Using special require.nodeRequire, something added by r.js.

        ngAnnotate = require.nodeRequire('ng-annotate');
        fs = require.nodeRequire('fs');
      }
      var url = req.toUrl(name + '.js');
      var text = fs.readFileSync(url, 'utf8');
      var code = ngAnnotate(text, {
        add: true,
        rename: [{from: "generalname", to: "uniquename"}, {from: "alpha", to: "beta"}],
        map: { inline: false, inFile: "source.js", sourceRoot: "/path/to/source/root" },
        enable: ["angular-dashboard-framework"],
      });
      if (config.isBuild) {
        _buildMap[name] = code.src;
      }
      onload.fromText(code.src);
    },

    write: function (pluginName, moduleName, write) {
      if (moduleName in _buildMap) {
        write.asModule(pluginName + '!' + moduleName, _buildMap[moduleName]);
      }
    },
  }
});