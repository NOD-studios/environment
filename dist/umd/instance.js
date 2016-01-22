(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './environment', 'source-map-support/register', 'babel-polyfill'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./environment'), require('source-map-support/register'), require('babel-polyfill'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.environment, global.register, global.babelPolyfill);
    global.instance = mod.exports;
  }
})(this, function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.environment = undefined;
  var environment = exports.environment = new _environment.Environment();
  exports.default = environment;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFJVyxvQ0FBYztvQkFDViIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
