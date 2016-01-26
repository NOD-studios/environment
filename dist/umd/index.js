(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './environment', './configuration', './test'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./environment'), require('./configuration'), require('./test'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.environment, global.configuration, global.test);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFJUztVQUFhO1VBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBUZXN0IH0gZnJvbSAnLi90ZXN0JztcblxuZXhwb3J0IHsgRW52aXJvbm1lbnQsIENvbmZpZ3VyYXRpb24sIFRlc3QgfTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
