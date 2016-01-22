'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = exports.Configuration = function Configuration() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, Configuration);

  this.silent = true;
  this.files = ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'];
  this.root = _path2.default.dirname(require.main.filename);

  Object.assign(this, options);

  return this;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBRWEsd0NBZVgsU0FmVyxhQWVYLEdBQTBCO01BQWQsZ0VBQVUsa0JBQUk7O3dCQWZmLGVBZWU7O09BYjFCLFNBQVMsS0FhaUI7T0FYMUIsUUFBUSxDQUNOLFlBRE0sRUFFTixpQkFGTSxFQUdOLFdBSE0sRUFJTixrQkFKTSxFQUtOLE1BTE0sRUFNTixVQU5NLEVBV2tCO09BRjFCLE9BQU8sZUFBSyxPQUFMLENBQWEsUUFBUSxJQUFSLENBQWEsUUFBYixFQUVNOztBQUN4QixTQUFPLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLE9BQXBCLEVBRHdCOztBQUd4QixTQUFPLElBQVAsQ0FId0I7Q0FBMUIiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG5cbiAgc2lsZW50ID0gdHJ1ZTtcblxuICBmaWxlcyA9IFtcbiAgICAnLmVudi5sb2NhbCcsXG4gICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgJy5lbnYudGVzdCcsXG4gICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICcuZW52JyxcbiAgICAnLmVudi5ub2QnXG4gIF07XG5cbiAgcm9vdCA9IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4uZmlsZW5hbWUpO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
