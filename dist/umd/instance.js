(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './configuration', './index', './test'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./configuration'), require('./index'), require('./test'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.configuration, global.index, global.test);
    global.instance = mod.exports;
  }
})(this, function (exports, _configuration, _index, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.json = exports.config = exports.ENV = exports.environment = undefined;
  var environment = exports.environment = new _index.Environment(new _configuration.Configuration());
  exports.default = environment;
  var ENV = environment.ENV;
  var config = environment.config;
  var json = environment.json;
  exports.ENV = ENV;
  exports.config = config;
  exports.json = json;
  new _test.Test({
    ENV: ENV,
    config: config,
    json: json
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFJVyxvQ0FBYyx1QkFBZ0Isa0NBQWhCO29CQUNWIiwiZmlsZSI6Imluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gJy4vdGVzdCc7XG5cbmV4cG9ydCBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQobmV3IENvbmZpZ3VyYXRpb24oKSk7XG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcblxuZXhwb3J0IGxldCB7IEVOViwgY29uZmlnLCBqc29uIH0gPSBlbnZpcm9ubWVudDtcblxubmV3IFRlc3QoeyBFTlYsIGNvbmZpZywganNvbiB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
