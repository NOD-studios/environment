define(['exports', './index', './test', 'source-map-support/register', 'babel-polyfill'], function (exports, _index, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.json = exports.config = exports.ENV = exports.environment = undefined;
  var environment = exports.environment = new _index.Environment();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFLVyxvQ0FBYztvQkFDViIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gJy4vdGVzdCc7XG5cbmV4cG9ydCBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuXG5leHBvcnQgbGV0IHsgRU5WLCBjb25maWcsIGpzb24gfSA9IGVudmlyb25tZW50O1xuXG5uZXcgVGVzdCh7IEVOViwgY29uZmlnLCBqc29uIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
