System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSVcsb0NBQWM7MEJBQ1YiLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
