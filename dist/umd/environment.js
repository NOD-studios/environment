(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'path', 'console', 'dotenv', 'filter-object', 'autobind-decorator', 'node-env-configuration', './configuration', 'decorate-this'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('path'), require('console'), require('dotenv'), require('filter-object'), require('autobind-decorator'), require('node-env-configuration'), require('./configuration'), require('decorate-this'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.path, global.console, global.dotenv, global.filterObject, global.autobindDecorator, global.nodeEnvConfiguration, global.configuration, global.decorateThis);
    global.environment = mod.exports;
  }
})(this, function (exports, _path, _console, _dotenv, _filterObject, _autobindDecorator, _nodeEnvConfiguration, _configuration, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Environment = undefined;

  var _path2 = _interopRequireDefault(_path);

  var _console2 = _interopRequireDefault(_console);

  var _dotenv2 = _interopRequireDefault(_dotenv);

  var _filterObject2 = _interopRequireDefault(_filterObject);

  var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

  var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _class;

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
});
//# sourceMappingURL=data:application/json;base64,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QTtVQUhBLCtGQUdBO1VBRkEsbUhBRUE7VUFEQSxxR0FDQTs7NEJBL0VTLGFBK0VUOztBQUVBLGFBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBRSxnQkFBRixFQUFXLGNBQVgsRUFBbUIsZ0JBQW5CLEVBQTRCLDBCQUE1QixFQUEwQyxjQUExQyxFQUFwQixFQUZBOztBQUlBLGFBQU8sY0FBUCxDQUFzQixJQUF0QixFQUE0QixTQUE1QixFQUF1QztBQUNyQyxvQkFBYSxLQUFiO0FBQ0EsZUFBUTtBQUNOLGVBQVMsRUFBVDtBQUNBLGtCQUFTLEVBQVQ7U0FGRjtPQUZGLEVBSkE7O0FBWUEsV0FBSyxTQUFMLEVBQWdCLEdBQWhCLEdBQXNCLEtBQUssSUFBTCxFQUF0QixDQVpBOztBQWNBLFdBQUssTUFBTCxHQUFjLEtBQUssWUFBTCxDQUFrQixLQUFsQixDQUF3QixLQUFLLFlBQUwsRUFBbUIsQ0FDdkQsU0FEdUQsRUFFdkQsU0FGdUQsRUFHdkQsS0FBSyxPQUFMLENBQWEsTUFBYixHQUFzQixZQUFXLEVBQVgsR0FBZ0IsS0FBSyxPQUFMLENBQWEsSUFBYixDQUgxQixDQUFkLENBZEE7S0FORjs7V0F6RVc7O29CQXFHRSIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdjb25zb2xlJztcbmltcG9ydCBlbnZMb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCBvYmplY3RGaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBlbnZDb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMub3B0aW9ucy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5sb2FkZXIubG9hZCh7XG4gICAgICAgIHNpbGVudCA6IHRydWUsXG4gICAgICAgIHBhdGggOiBmaWxlUGF0aFxuICAgICAgfSk7XG4gICAgICBpZiAoIXN0YXR1cyAmJiB0aGlzLm9wdGlvbnMuc2lsZW50ICE9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDpgKTtcbiAgICAgICAgdGhpcy5jb25zb2xlLndhcm4oYCcke2ZpbGV9JyBjb3VsZCBub3QgZm91bmQgYXQgcGF0aDogJHtmaWxlUGF0aH1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnY7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0uY29uZmlnO1xuICB9XG5cbiAgc2V0IGNvbmZpZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb25maWcoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLmNvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uKCk7XG4gIH1cblxuICBnZXQgRU5WKCkge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHRoaXNbUFJPVEVDVEVEXS5FTlYpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbChhbnlPZihCb29sZWFuLCBTdHJpbmcsIEFycmF5LCBPYmplY3QpKSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRGaWx0ZXJlZENvbmZpZyhleGNsdWRlID0gZmFsc2UpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSBleGNsdWRlIHx8IHRoaXMub3B0aW9ucy5leGNsdWRlIHx8IHRoaXMuY29uZmlnLmV4Y2x1ZGUgfHwgZmFsc2U7XG4gICAgZXhjbHVkZXMgPSB0eXBlb2YgZXhjbHVkZXMgPT09ICdzdHJpbmcnID8gZXhjbHVkZXMuc3BsaXQoJywnKSA6IGV4Y2x1ZGVzO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMgPT09IGZhbHNlID8gJyonIDogZXhjbHVkZXM7XG5cbiAgICByZXR1cm4gdGhpcy5maWx0ZXIodGhpcy5jb25maWcsIGV4Y2x1ZGVzKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoYW55T2YoQm9vbGVhbiwgU3RyaW5nLCBBcnJheSwgT2JqZWN0KSkpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbihleGNsdWRlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRGaWx0ZXJlZENvbmZpZyhleGNsdWRlKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zID0gbmV3IENvbmZpZ3VyYXRpb24oKSxcbiAgICBjb25zb2xlID0gbG9nZ2VyLFxuICAgIGxvYWRlciA9IGVudkxvYWRlcixcbiAgICBjb25maWd1cmF0b3IgPSBlbnZDb25maWd1cmF0b3IsXG4gICAgZmlsdGVyID0gb2JqZWN0RmlsdGVyXG4gICkge1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG9wdGlvbnMsIGxvYWRlciwgY29uc29sZSwgY29uZmlndXJhdG9yLCBmaWx0ZXIgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtYXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSA6IHtcbiAgICAgICAgRU5WICAgIDoge30sXG4gICAgICAgIGNvbmZpZyA6IHt9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzW1BST1RFQ1RFRF0uRU5WID0gdGhpcy5sb2FkKCk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdG9yLmFwcGx5KHRoaXMuY29uZmlndXJhdG9yLCBbXG4gICAgICB1bmRlZmluZWQsXG4gICAgICB1bmRlZmluZWQsXG4gICAgICB0aGlzLm9wdGlvbnMuc2lsZW50ID8gZnVuY3Rpb24oKSB7fSA6IHRoaXMuY29uc29sZS53YXJuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
