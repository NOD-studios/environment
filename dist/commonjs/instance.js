'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = exports.config = exports.ENV = exports.environment = undefined;

require('source-map-support/register');

require('babel-polyfill');

var _index = require('./index');

var _test = require('./test');

var environment = exports.environment = new _index.Environment();
exports.default = environment;
var ENV = environment.ENV;
var config = environment.config;
var json = environment.json;
exports.ENV = ENV;
exports.config = config;
exports.json = json;

new _test.Test({ ENV: ENV, config: config, json: json });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUtPLElBQUksb0NBQWMsd0JBQWQ7a0JBQ0k7SUFFRixNQUFzQixZQUF0QjtJQUFLLFNBQWlCLFlBQWpCO0lBQVEsT0FBUyxZQUFUOzs7OztBQUUxQixlQUFTLEVBQUUsUUFBRixFQUFPLGNBQVAsRUFBZSxVQUFmLEVBQVQiLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IFRlc3QgfSBmcm9tICcuL3Rlc3QnO1xuXG5leHBvcnQgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcblxuZXhwb3J0IGxldCB7IEVOViwgY29uZmlnLCBqc29uIH0gPSBlbnZpcm9ubWVudDtcblxubmV3IFRlc3QoeyBFTlYsIGNvbmZpZywganNvbiB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
