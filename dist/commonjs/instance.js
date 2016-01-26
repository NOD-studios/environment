'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = exports.config = exports.ENV = exports.environment = undefined;

var _configuration = require('./configuration');

var _index = require('./index');

var _test = require('./test');

var environment = exports.environment = new _index.Environment(new _configuration.Configuration());
exports.default = environment;
var ENV = environment.ENV;
var config = environment.config;
var json = environment.json;
exports.ENV = ENV;
exports.config = config;
exports.json = json;

new _test.Test({ ENV: ENV, config: config, json: json });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJTyxJQUFJLG9DQUFjLHVCQUFnQixrQ0FBaEIsQ0FBZDtrQkFDSTtJQUVGLE1BQXNCLFlBQXRCO0lBQUssU0FBaUIsWUFBakI7SUFBUSxPQUFTLFlBQVQ7Ozs7O0FBRTFCLGVBQVMsRUFBRSxRQUFGLEVBQU8sY0FBUCxFQUFlLFVBQWYsRUFBVCIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IFRlc3QgfSBmcm9tICcuL3Rlc3QnO1xuXG5leHBvcnQgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KG5ldyBDb25maWd1cmF0aW9uKCkpO1xuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG5cbmV4cG9ydCBsZXQgeyBFTlYsIGNvbmZpZywganNvbiB9ID0gZW52aXJvbm1lbnQ7XG5cbm5ldyBUZXN0KHsgRU5WLCBjb25maWcsIGpzb24gfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
