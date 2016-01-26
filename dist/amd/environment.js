define(['exports', 'path', 'console', 'dotenv', 'filter-object', 'autobind-decorator', 'node-env-configuration', 'decorate-this', 'source-map-support/register', 'babel-polyfill'], function (exports, _path, _console, _dotenv, _filterObject, _autobindDecorator, _nodeEnvConfiguration, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Environment = exports.Configuration = undefined;

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

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _class2;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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
});
//# sourceMappingURL=data:application/json;base64,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QixDQURROzs7O0FBWVYsYUF6RVcsV0F5RVgsR0FLRTtVQUpBLGdFQUFVLElBQUksYUFBSixrQkFJVjtVQUhBLGlHQUdBO1VBRkEsK0ZBRUE7VUFEQSxtSEFDQTs7NEJBOUVTLGFBOEVUOztBQUVBLGFBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsRUFBRSxnQkFBRixFQUFXLGNBQVgsRUFBbUIsZ0JBQW5CLEVBQTRCLDBCQUE1QixFQUFwQixFQUZBOztBQUlBLGFBQU8sY0FBUCxDQUFzQixJQUF0QixFQUE0QixTQUE1QixFQUF1QztBQUNyQyxvQkFBYSxLQUFiO0FBQ0EsZUFBUTtBQUNOLGVBQVMsRUFBVDtBQUNBLGtCQUFTLEVBQVQ7U0FGRjtPQUZGLEVBSkE7O0FBWUEsV0FBSyxTQUFMLEVBQWdCLEdBQWhCLEdBQXNCLEtBQUssSUFBTCxFQUF0QixDQVpBOztBQWNBLFdBQUssTUFBTCxHQUFjLEtBQUssWUFBTCxDQUFrQixTQUFsQixFQUE2QixTQUE3QixFQUF3QyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQXRELENBZEE7S0FMRjs7V0F6RVc7O29CQWdHRSIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IGVudkxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGVudkNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG5cbiAgc2lsZW50ID0gdHJ1ZTtcblxuICBmaWxlcyA9IFtcbiAgICAnLmVudi5sb2NhbCcsXG4gICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgJy5lbnYudGVzdCcsXG4gICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICcuZW52JyxcbiAgICAnLmVudi5ub2QnXG4gIF07XG5cbiAgcm9vdCA9IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4uZmlsZW5hbWUpO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHJvb3QgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyA6IG9wdGlvbmFsKEFycmF5KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoU3RyaW5nKVxuICBtYWtlUGF0aChmaWxlID0gJycpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShgJHt0aGlzLm9wdGlvbnMucm9vdH1gKSwgYCR7ZmlsZX1gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5vcHRpb25zLmZpbGVzLmZvckVhY2goKGZpbGUpICA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSB0aGlzLm1ha2VQYXRoKGZpbGUpO1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKCFzdGF0dXMgJiYgdGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNvbnNvbGUud2FybihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6YCk7XG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kIGF0IHBhdGg6ICR7ZmlsZVBhdGh9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgZ2V0IEVOVigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh0aGlzW1BST1RFQ1RFRF0uRU5WKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnMgPSBuZXcgQ29uZmlndXJhdGlvbigpLFxuICAgIGNvbnNvbGUgPSBsb2dnZXIsXG4gICAgbG9hZGVyID0gZW52TG9hZGVyLFxuICAgIGNvbmZpZ3VyYXRvciA9IGVudkNvbmZpZ3VyYXRvclxuICApIHtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBvcHRpb25zLCBsb2FkZXIsIGNvbnNvbGUsIGNvbmZpZ3VyYXRvciB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBQUk9URUNURUQsIHtcbiAgICAgIGVudW1hcmFibGUgOiBmYWxzZSxcbiAgICAgIHZhbHVlIDoge1xuICAgICAgICBFTlYgICAgOiB7fSxcbiAgICAgICAgY29uZmlnIDoge31cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXNbUFJPVEVDVEVEXS5FTlYgPSB0aGlzLmxvYWQoKTtcblxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuY29uc29sZS53YXJuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnZpcm9ubWVudDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
