'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.environment = undefined;

require('source-map-support/register');

require('babel-polyfill');

var _environment = require('./environment');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUlPLElBQUksb0NBQWMsOEJBQWQ7a0JBQ0k7SUFFVCxNQUFnQixZQUFoQjtJQUFLLFNBQVcsWUFBWDs7QUFFWCxJQUFLLFFBQU8saURBQVAsS0FBZSxRQUFmLEVBQXlCO0FBQzVCLFFBQU0sSUFBSSxLQUFKLENBQVUsNENBQVYsQ0FBTixDQUQ0QjtDQUE5Qjs7QUFJQSxJQUFLLFFBQU8sdURBQVAsS0FBa0IsUUFBbEIsRUFBNEI7QUFDL0IsUUFBTSxJQUFJLEtBQUosQ0FBVSwyREFBVixDQUFOLENBRCtCO0NBQWpDIiwiZmlsZSI6Imluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuXG5sZXQgeyBFTlYsIGNvbmZpZyB9ID0gZW52aXJvbm1lbnQ7XG5cbmlmICggdHlwZW9mIEVOViAhPT0gJ29iamVjdCcpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdFbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIGNvdWxkIG5vdCBwYXJzZWQnKTtcbn1cblxuaWYgKCB0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0Jykge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0Vudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgY291bGQgbm90IGNvbnZlcnRlZCBpbnRvIG9iamVjdCcpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
