'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Environment = undefined;

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

var _configuration = require('./configuration');

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

var PROTECTED = Symbol('PROTECTED');

var Environment = exports.Environment = (_dec = (0, _decorateThis.param)(String), _dec2 = (0, _decorateThis.returns)(String), _dec3 = (0, _decorateThis.returns)(Object), _dec4 = (0, _decorateThis.returns)(Object), _dec5 = (0, _decorateThis.param)(Object), _dec6 = (0, _decorateThis.returns)(Object), _dec7 = (0, _decorateThis.param)((0, _decorateThis.Optional)((0, _decorateThis.AnyOf)(Boolean, String, Array, Object))), _dec8 = (0, _decorateThis.returns)(Object), _dec9 = (0, _decorateThis.param)((0, _decorateThis.Optional)((0, _decorateThis.AnyOf)(Boolean, String, Array, Object))), _dec10 = (0, _decorateThis.returns)(String), (_class = function () {
  _createClass(Environment, [{
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
    key: 'getFilteredConfig',
    value: function getFilteredConfig() {
      var exclude = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      var excludes = exclude || this.options.exclude || this.config.exclude || false;
      excludes = typeof excludes === 'string' ? excludes.split(',') : excludes;
      excludes = excludes === false ? '*' : excludes;

      return this.filter(this.config, excludes);
    }
  }, {
    key: 'getJson',
    value: function getJson() {
      var exclude = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      return JSON.stringify(this.getFilteredConfig(exclude));
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
    var options = arguments.length <= 0 || arguments[0] === undefined ? new _configuration.Configuration() : arguments[0];
    var console = arguments.length <= 1 || arguments[1] === undefined ? _console2.default : arguments[1];
    var loader = arguments.length <= 2 || arguments[2] === undefined ? _dotenv2.default : arguments[2];
    var configurator = arguments.length <= 3 || arguments[3] === undefined ? _nodeEnvConfiguration2.default : arguments[3];
    var filter = arguments.length <= 4 || arguments[4] === undefined ? _filterObject2.default : arguments[4];

    _classCallCheck(this, Environment);

    Object.assign(this, { options: options, loader: loader, console: console, configurator: configurator, filter: filter });

    Object.defineProperty(this, PROTECTED, {
      enumarable: false,
      value: {
        ENV: {},
        config: {}
      }
    });

    this[PROTECTED].ENV = this.load();

    this.config = this.configurator.apply(this.configurator, [undefined, undefined, this.options.silent ? function () {} : this.console.warn]);
  }

  return Environment;
}(), (_applyDecoratedDescriptor(_class.prototype, 'makePath', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'makePath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'load', [_autobindDecorator2.default, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'load'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getConfig', [_autobindDecorator2.default, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'getConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setConfig', [_autobindDecorator2.default, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'setConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getFilteredConfig', [_autobindDecorator2.default, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'getFilteredConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getJson', [_autobindDecorator2.default, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'getJson'), _class.prototype)), _class));
exports.default = Environment;
//# sourceMappingURL=data:application/json;base64,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S1Y7UUFKQSxpR0FJQTtRQUhBLCtGQUdBO1FBRkEsbUhBRUE7UUFEQSxxR0FDQTs7MEJBL0VTLGFBK0VUOztBQUVBLFdBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBRSxnQkFBRixFQUFXLGNBQVgsRUFBbUIsZ0JBQW5CLEVBQTRCLDBCQUE1QixFQUEwQyxjQUExQyxFQUFwQixFQUZBOztBQUlBLFdBQU8sY0FBUCxDQUFzQixJQUF0QixFQUE0QixTQUE1QixFQUF1QztBQUNyQyxrQkFBYSxLQUFiO0FBQ0EsYUFBUTtBQUNOLGFBQVMsRUFBVDtBQUNBLGdCQUFTLEVBQVQ7T0FGRjtLQUZGLEVBSkE7O0FBWUEsU0FBSyxTQUFMLEVBQWdCLEdBQWhCLEdBQXNCLEtBQUssSUFBTCxFQUF0QixDQVpBOztBQWNBLFNBQUssTUFBTCxHQUFjLEtBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixLQUFLLFlBQUwsRUFBbUIsQ0FDdkQsU0FEdUQsRUFFdkQsU0FGdUQsRUFHdkQsS0FBSyxPQUFMLENBQWEsTUFBYixHQUFzQixZQUFXLEVBQVgsR0FBZ0IsS0FBSyxPQUFMLENBQWEsSUFBYixDQUgxQixDQUFkLENBZEE7R0FORjs7U0F6RVc7O2tCQXFHRSIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IGVudkxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IG9iamVjdEZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGVudkNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5vcHRpb25zLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMub3B0aW9ucy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmICghc3RhdHVzICYmIHRoaXMub3B0aW9ucy5zaWxlbnQgIT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jb25zb2xlLndhcm4oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOmApO1xuICAgICAgICB0aGlzLmNvbnNvbGUud2FybihgJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZCBhdCBwYXRoOiAke2ZpbGVQYXRofWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIGdldCBFTlYoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpc1tQUk9URUNURURdLkVOVik7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKGFueU9mKEJvb2xlYW4sIFN0cmluZywgQXJyYXksIE9iamVjdCkpKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldEZpbHRlcmVkQ29uZmlnKGV4Y2x1ZGUgPSBmYWxzZSkge1xuICAgIGxldCBleGNsdWRlcyA9IGV4Y2x1ZGUgfHwgdGhpcy5vcHRpb25zLmV4Y2x1ZGUgfHwgdGhpcy5jb25maWcuZXhjbHVkZSB8fCBmYWxzZTtcbiAgICBleGNsdWRlcyA9IHR5cGVvZiBleGNsdWRlcyA9PT0gJ3N0cmluZycgPyBleGNsdWRlcy5zcGxpdCgnLCcpIDogZXhjbHVkZXM7XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcyA9PT0gZmFsc2UgPyAnKicgOiBleGNsdWRlcztcblxuICAgIHJldHVybiB0aGlzLmZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbChhbnlPZihCb29sZWFuLCBTdHJpbmcsIEFycmF5LCBPYmplY3QpKSlcbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRKc29uKGV4Y2x1ZGUgPSBmYWxzZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmdldEZpbHRlcmVkQ29uZmlnKGV4Y2x1ZGUpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnMgPSBuZXcgQ29uZmlndXJhdGlvbigpLFxuICAgIGNvbnNvbGUgPSBsb2dnZXIsXG4gICAgbG9hZGVyID0gZW52TG9hZGVyLFxuICAgIGNvbmZpZ3VyYXRvciA9IGVudkNvbmZpZ3VyYXRvcixcbiAgICBmaWx0ZXIgPSBvYmplY3RGaWx0ZXJcbiAgKSB7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgb3B0aW9ucywgbG9hZGVyLCBjb25zb2xlLCBjb25maWd1cmF0b3IsIGZpbHRlciB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBQUk9URUNURUQsIHtcbiAgICAgIGVudW1hcmFibGUgOiBmYWxzZSxcbiAgICAgIHZhbHVlIDoge1xuICAgICAgICBFTlYgICAgOiB7fSxcbiAgICAgICAgY29uZmlnIDoge31cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXNbUFJPVEVDVEVEXS5FTlYgPSB0aGlzLmxvYWQoKTtcblxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0b3IuYXBwbHkodGhpcy5jb25maWd1cmF0b3IsIFtcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHRoaXMub3B0aW9ucy5zaWxlbnQgPyBmdW5jdGlvbigpIHt9IDogdGhpcy5jb25zb2xlLndhcm5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnZpcm9ubWVudDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
