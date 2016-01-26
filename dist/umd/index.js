(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './environment', './configuration', './test', 'source-map-support/register', 'babel-polyfill'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./environment'), require('./configuration'), require('./test'), require('source-map-support/register'), require('babel-polyfill'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.environment, global.configuration, global.test, global.register, global.babelPolyfill);
    global.index = mod.exports;
  }
})(this, function (exports, _environment, _configuration, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Test = exports.Configuration = exports.Environment = undefined;
  exports.Environment = _environment.Environment;
  exports.Configuration = _configuration.Configuration;
  exports.Test = _test.Test;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFPUztVQUFhO1VBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gJy4vdGVzdCc7XG5cbmV4cG9ydCB7IEVudmlyb25tZW50LCBDb25maWd1cmF0aW9uLCBUZXN0IH07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
