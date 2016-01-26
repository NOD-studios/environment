'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Configuration = exports.Configuration = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
  exclude: (0, _decorateThis.Optional)((0, _decorateThis.AnyOf)(Boolean, String, Array, Object)),
  silent: (0, _decorateThis.Optional)(Boolean),
  root: (0, _decorateThis.Optional)(String),
  files: (0, _decorateThis.Optional)(Array)
})), _dec2 = (0, _decorateThis.returns)(Object), (_class = function () {
  _createClass(Configuration, [{
    key: 'setOptions',
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return Object.assign(this, options);
    }
  }]);

  function Configuration() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Configuration);

    this.silent = true;
    this.exclude = '';
    this.files = ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'];
    this.root = _path2.default.dirname(require.main.filename);

    this.setOptions(options);

    return this;
  }

  return Configuration;
}(), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class));
exports.default = Configuration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWEsZ0RBa0JWLHlCQUFNLDRCQUFTO0FBQ2QsV0FBVSw0QkFBUyx5QkFBTSxPQUFOLEVBQWUsTUFBZixFQUF1QixLQUF2QixFQUE4QixNQUE5QixDQUFULENBQVY7QUFDQSxVQUFTLDRCQUFTLE9BQVQsQ0FBVDtBQUNBLFFBQVEsNEJBQVMsTUFBVCxDQUFSO0FBQ0EsU0FBUSw0QkFBUyxLQUFULENBQVI7Q0FKSyxDQUFOLFdBTUEsMkJBQVEsTUFBUjtlQXhCVTs7aUNBeUJjO1VBQWQsZ0VBQVUsa0JBQUk7O0FBQ3ZCLGFBQU8sT0FBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixPQUFwQixDQUFQLENBRHVCOzs7O0FBSXpCLFdBN0JXLGFBNkJYLEdBQTBCO1FBQWQsZ0VBQVUsa0JBQUk7OzBCQTdCZixlQTZCZTs7U0EzQjFCLFNBQVMsS0EyQmlCO1NBekIxQixVQUFVLEdBeUJnQjtTQXZCMUIsUUFBUSxDQUNOLFlBRE0sRUFFTixpQkFGTSxFQUdOLFdBSE0sRUFJTixrQkFKTSxFQUtOLE1BTE0sRUFNTixVQU5NLEVBdUJrQjtTQWQxQixPQUFPLGVBQUssT0FBTCxDQUFhLFFBQVEsSUFBUixDQUFhLFFBQWIsRUFjTTs7QUFDeEIsU0FBSyxVQUFMLENBQWdCLE9BQWhCLEVBRHdCOztBQUd4QixXQUFPLElBQVAsQ0FId0I7R0FBMUI7O1NBN0JXOztrQkFvQ0UiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcblxuICBzaWxlbnQgPSB0cnVlO1xuXG4gIGV4Y2x1ZGUgPSAnJztcblxuICBmaWxlcyA9IFtcbiAgICAnLmVudi5sb2NhbCcsXG4gICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgJy5lbnYudGVzdCcsXG4gICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICcuZW52JyxcbiAgICAnLmVudi5ub2QnXG4gIF07XG5cbiAgcm9vdCA9IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4uZmlsZW5hbWUpO1xuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIGV4Y2x1ZGUgOiBvcHRpb25hbChhbnlPZihCb29sZWFuLCBTdHJpbmcsIEFycmF5LCBPYmplY3QpKSxcbiAgICBzaWxlbnQgOiBvcHRpb25hbChCb29sZWFuKSxcbiAgICByb290ICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgOiBvcHRpb25hbChBcnJheSlcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb247XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
