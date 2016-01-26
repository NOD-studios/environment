define(['exports', './environment', 'source-map-support/register', 'babel-polyfill'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.environment = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var environment = exports.environment = new _environment.Environment();
  exports.default = environment;
  var ENV = environment.ENV;
  var config = environment.config;

  if ((typeof ENV === 'undefined' ? 'undefined' : _typeof(ENV)) !== 'object') {
    throw new Error('Environment variables are could not parsed');
  }

  if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
    throw new Error('Environment variables are could not converted into object');
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O01BSVcsb0NBQWM7b0JBQ1YiLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG5cbmxldCB7IEVOViwgY29uZmlnIH0gPSBlbnZpcm9ubWVudDtcblxuaWYgKCB0eXBlb2YgRU5WICE9PSAnb2JqZWN0Jykge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0Vudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgY291bGQgbm90IHBhcnNlZCcpO1xufVxuXG5pZiAoIHR5cGVvZiBjb25maWcgIT09ICdvYmplY3QnKSB7XG4gIHRocm93IG5ldyBFcnJvcignRW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBjb3VsZCBub3QgY29udmVydGVkIGludG8gb2JqZWN0Jyk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
