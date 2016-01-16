(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './environment'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./environment'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.environment);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFDVyxXQUFXLFdBQVgsV0FBVyxHQUFHLGlCQURoQixXQUFXLEVBQ3NCO29CQUMzQixXQUFXIiwiZmlsZSI6Imluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50JztcbmV4cG9ydCBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
