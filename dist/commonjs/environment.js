'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _class2;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Environment = exports.Configuration = undefined;

require('source-map-support/register');

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _console = require('console');

var _console2 = _interopRequireDefault(_console);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _filterObject = require('filter-object');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _nodeEnvConfiguration = require('node-env-configuration');

var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PROTECTED = Symbol('PROTECTED');

var Configuration = exports.Configuration = function Configuration() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, Configuration);

  this.silent = true;
  this.files = ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'];
  this.root = _path2.default.dirname(require.main.filename);

  Object.assign(this, options);

  return this;
};

var Environment = exports.Environment = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
  root: (0, _decorateThis.Optional)(String),
  files: (0, _decorateThis.Optional)(Array)
})), _dec2 = (0, _decorateThis.returns)(Object), _dec3 = (0, _decorateThis.param)(String), _dec4 = (0, _decorateThis.returns)(String), _dec5 = (0, _decorateThis.returns)(Object), _dec6 = (0, _decorateThis.returns)(Object), _dec7 = (0, _decorateThis.param)(Object), _dec8 = (0, _decorateThis.returns)(Object), _dec9 = (0, _decorateThis.returns)(String), (_class2 = function () {
  _createClass(Environment, [{
    key: 'setOptions',
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _get(Object.getPrototypeOf(Environment.prototype), 'setOptions', this).call(this, options);
    }
  }, {
    key: 'makePath',
    value: function makePath() {
      var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      return _path2.default.join(_path2.default.resolve('' + this.options.root), '' + file);
    }
  }, {
    key: 'load',
    value: function load() {
      var _this = this;

      this.options.files.forEach(function (file) {
        var filePath = _this.makePath(file);
        var status = _this.loader.load({
          silent: true,
          path: filePath
        });
        if (!status && _this.options.silent !== true) {
          _this.console.warn(_this.constructor.name + '.load:');
          _this.console.warn('\'' + file + '\' could not found at path: ' + filePath);
        }
      });
      return process.env;
    }
  }, {
    key: 'getConfig',
    value: function getConfig() {
      return this[PROTECTED].config;
    }
  }, {
    key: 'setConfig',
    value: function setConfig() {
      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      Object.assign(this[PROTECTED].config, config);
      return this.config;
    }
  }, {
    key: 'getJson',
    value: function getJson() {
      var excludes = this.config.EXCLUDE || '';
      excludes = excludes.split(',') || [];
      return JSON.stringify((0, _filterObject2.default)(this.config, excludes));
    }
  }, {
    key: 'config',
    get: function get() {
      return this.getConfig();
    },
    set: function set() {
      return this.setConfig.apply(this, arguments);
    }
  }, {
    key: 'json',
    get: function get() {
      return this.getJson();
    }
  }, {
    key: 'ENV',
    get: function get() {
      return Object.freeze(this[PROTECTED].ENV);
    }
  }]);

  function Environment() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? new Configuration() : arguments[0];
    var console = arguments.length <= 1 || arguments[1] === undefined ? _console2.default : arguments[1];
    var loader = arguments.length <= 2 || arguments[2] === undefined ? _dotenv2.default : arguments[2];
    var configurator = arguments.length <= 3 || arguments[3] === undefined ? _nodeEnvConfiguration2.default : arguments[3];

    _classCallCheck(this, Environment);

    Object.assign(this, { options: options, loader: loader, console: console, configurator: configurator });

    Object.defineProperty(this, PROTECTED, {
      enumarable: false,
      value: {
        ENV: {},
        config: {}
      }
    });

    this[PROTECTED].ENV = this.load();

    this.config = this.configurator(undefined, undefined, this.console.warn);
  }

  return Environment;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'setOptions'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'makePath', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'makePath'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'load', [_autobindDecorator2.default, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'load'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getConfig', [_autobindDecorator2.default, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'getConfig'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setConfig', [_autobindDecorator2.default, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'setConfig'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getJson', [_autobindDecorator2.default, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'getJson'), _class2.prototype)), _class2));
exports.default = Environment;
//# sourceMappingURL=data:application/json;base64,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Q0FEUTs7OztBQVlWLFdBekVXLFdBeUVYLEdBS0U7UUFKQSxnRUFBVSxJQUFJLGFBQUosa0JBSVY7UUFIQSxpR0FHQTtRQUZBLCtGQUVBO1FBREEsbUhBQ0E7OzBCQTlFUyxhQThFVDs7QUFFQSxXQUFPLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLEVBQUUsZ0JBQUYsRUFBVyxjQUFYLEVBQW1CLGdCQUFuQixFQUE0QiwwQkFBNUIsRUFBcEIsRUFGQTs7QUFJQSxXQUFPLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsU0FBNUIsRUFBdUM7QUFDckMsa0JBQWEsS0FBYjtBQUNBLGFBQVE7QUFDTixhQUFTLEVBQVQ7QUFDQSxnQkFBUyxFQUFUO09BRkY7S0FGRixFQUpBOztBQVlBLFNBQUssU0FBTCxFQUFnQixHQUFoQixHQUFzQixLQUFLLElBQUwsRUFBdEIsQ0FaQTs7QUFjQSxTQUFLLE1BQUwsR0FBYyxLQUFLLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsU0FBN0IsRUFBd0MsS0FBSyxPQUFMLENBQWEsSUFBYixDQUF0RCxDQWRBO0dBTEY7O1NBekVXOztrQkFnR0UiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdjb25zb2xlJztcbmltcG9ydCBlbnZMb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBlbnZDb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuXG4gIHNpbGVudCA9IHRydWU7XG5cbiAgZmlsZXMgPSBbXG4gICAgJy5lbnYubG9jYWwnLFxuICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICcuZW52LnRlc3QnLFxuICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAnLmVudicsXG4gICAgJy5lbnYubm9kJ1xuICBdO1xuXG4gIHJvb3QgPSBwYXRoLmRpcm5hbWUocmVxdWlyZS5tYWluLmZpbGVuYW1lKTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgOiBvcHRpb25hbChBcnJheSlcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5vcHRpb25zLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMub3B0aW9ucy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmICghc3RhdHVzICYmIHRoaXMub3B0aW9ucy5zaWxlbnQgIT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jb25zb2xlLndhcm4oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOmApO1xuICAgICAgICB0aGlzLmNvbnNvbGUud2FybihgJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZCBhdCBwYXRoOiAke2ZpbGVQYXRofWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIGdldCBFTlYoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpc1tQUk9URUNURURdLkVOVik7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRKc29uKCkge1xuICAgIGxldCBleGNsdWRlcyA9IHRoaXMuY29uZmlnLkVYQ0xVREUgfHwgJyc7XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcy5zcGxpdCgnLCcpIHx8IFtdO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmaWx0ZXIodGhpcy5jb25maWcsIGV4Y2x1ZGVzKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zID0gbmV3IENvbmZpZ3VyYXRpb24oKSxcbiAgICBjb25zb2xlID0gbG9nZ2VyLFxuICAgIGxvYWRlciA9IGVudkxvYWRlcixcbiAgICBjb25maWd1cmF0b3IgPSBlbnZDb25maWd1cmF0b3JcbiAgKSB7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgb3B0aW9ucywgbG9hZGVyLCBjb25zb2xlLCBjb25maWd1cmF0b3IgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtYXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSA6IHtcbiAgICAgICAgRU5WICAgIDoge30sXG4gICAgICAgIGNvbmZpZyA6IHt9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzW1BST1RFQ1RFRF0uRU5WID0gdGhpcy5sb2FkKCk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLmNvbnNvbGUud2Fybik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
