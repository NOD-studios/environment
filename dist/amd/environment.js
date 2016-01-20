var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(['exports', 'path', 'console', 'dotenv', 'filter-object', 'autobind-decorator', '@nod/base', 'node-env-configuration', 'decorate-this', 'source-map-support/register', 'babel-polyfill'], function (exports, _path, _console, _dotenv, _filterObject, _autobindDecorator, _base, _nodeEnvConfiguration, _decorateThis) {
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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _class;

  var PROTECTED = Symbol('PROTECTED');
  var Environment = exports.Environment = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
    root: (0, _decorateThis.Optional)(String),
    files: (0, _decorateThis.Optional)(Array)
  })), _dec2 = (0, _decorateThis.returns)(Object), _dec3 = (0, _decorateThis.param)(String), _dec4 = (0, _decorateThis.returns)(String), _dec5 = (0, _decorateThis.returns)(Object), _dec6 = (0, _decorateThis.returns)(Object), _dec7 = (0, _decorateThis.param)(Object), _dec8 = (0, _decorateThis.returns)(Object), _dec9 = (0, _decorateThis.returns)(String), (_class = function (_Base) {
    _inherits(Environment, _Base);

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
        var _this2 = this;

        this.options.files.forEach(function (file) {
          var filePath = _this2.makePath(file);
          var status = _this2.options.loader.load({
            silent: true,
            path: filePath
          });
          if (!status && _this2.options.silent !== true) {
            _console2.default.warn(_this2.constructor.name + '.load: \'' + file + '\' could not found at path: ' + filePath);
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
    }]);

    function Environment() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Environment);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Environment).call(this, options, {
        silent: true,
        files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'],
        root: _path2.default.dirname(require.main.filename),
        configurator: _nodeEnvConfiguration2.default,
        loader: _dotenv2.default
      }));

      _this[PROTECTED] = _this[PROTECTED] || {};

      Object.assign(_this[PROTECTED], {
        ENV: {},
        config: {}
      });

      _this.ENV = _this.load();

      var warn = _this.options.silent !== true ? _console2.default.warn.bind(_console2.default) : function () {};
      _this.config = _this.options.configurator(undefined, undefined, warn);
      return _this;
    }

    return Environment;
  }(_base.Base), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'makePath', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'makePath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'load', [_autobindDecorator2.default, _dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'load'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getConfig', [_autobindDecorator2.default, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'getConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setConfig', [_autobindDecorator2.default, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'setConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getJson', [_autobindDecorator2.default, _dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'getJson'), _class.prototype)), _class));
  exports.default = Environment;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFhYSxXQUFXLFdBQVgsV0FBVyxXQUdyQixrQkFQTSxLQUFLLEVBT0wsa0JBUGdCLFFBQVEsRUFPZjtBQUNkLFFBQUksRUFBSSxrQkFSYSxRQUFRLEVBUVosTUFBTSxDQUFDO0FBQ3hCLFNBQUssRUFBRyxrQkFUYSxRQUFRLEVBU1osS0FBSyxDQUFDO0dBQ3hCLENBQUMsQ0FBQyxVQUNGLGtCQVhhLE9BQU8sRUFXWixNQUFNLENBQUMsVUFLZixrQkFoQk0sS0FBSyxFQWdCTCxNQUFNLENBQUMsVUFDYixrQkFqQmEsT0FBTyxFQWlCWixNQUFNLENBQUMsVUFNZixrQkF2QmEsT0FBTyxFQXVCWixNQUFNLENBQUMsVUFvQmYsa0JBM0NhLE9BQU8sRUEyQ1osTUFBTSxDQUFDLFVBVWYsa0JBckRNLEtBQUssRUFxREwsTUFBTSxDQUFDLFVBQ2Isa0JBdERhLE9BQU8sRUFzRFosTUFBTSxDQUFDLFVBV2Ysa0JBakVhLE9BQU8sRUFpRVosTUFBTSxDQUFDO2NBN0RMLFdBQVc7O2lCQUFYLFdBQVc7O21DQVFHO1lBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQiwwQ0FUUyxXQUFXLDRDQVNJLE9BQU8sRUFBRTtPQUNsQzs7O2lDQUltQjtZQUFYLElBQUkseURBQUcsRUFBRTs7QUFDaEIsZUFBTyxlQUFLLElBQUksQ0FBQyxlQUFLLE9BQU8sTUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRyxPQUFLLElBQUksQ0FBRyxDQUFDO09BQ25FOzs7NkJBSU07OztBQUNMLFlBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBTTtBQUNwQyxjQUFJLFFBQVEsR0FBRyxPQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxjQUFJLE1BQU0sR0FBRyxPQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3BDLGtCQUFNLEVBQUcsSUFBSTtBQUNiLGdCQUFJLEVBQUcsUUFBUTtXQUNoQixDQUFDLENBQUM7QUFDSCxjQUFJLENBQUMsTUFBTSxJQUFJLE9BQUssT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7QUFDM0MsOEJBQVEsSUFBSSxDQUFJLE9BQUssV0FBVyxDQUFDLElBQUksaUJBQVcsSUFBSSxvQ0FBOEIsUUFBUSxDQUFHLENBQUM7V0FDL0Y7U0FDRixDQUFDLENBQUM7QUFDSCxlQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7T0FDcEI7OztrQ0FRVztBQUNWLGVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztPQUMvQjs7O2tDQVNzQjtZQUFiLE1BQU0seURBQUcsRUFBRTs7QUFDbkIsY0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztPQUNwQjs7O2dDQVFTO0FBQ1IsWUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3pDLGdCQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckMsZUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztPQUN0RDs7OzBCQWhDWTtBQUNYLGVBQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO09BQ3pCOzBCQVFxQjtBQUNwQixlQUFPLElBQUksQ0FBQyxTQUFTLE1BQUEsQ0FBZCxJQUFJLFlBQXFCLENBQUM7T0FDbEM7OzswQkFVVTtBQUNULGVBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO09BQ3ZCOzs7QUFVRCxhQXBFVyxXQUFXLEdBb0VJO1VBQWQsT0FBTyx5REFBRyxFQUFFOzs0QkFwRWIsV0FBVzs7eUVBQVgsV0FBVyxhQXFFZCxPQUFPLEVBQUU7QUFDYixjQUFNLEVBQVEsSUFBSTtBQUNsQixhQUFLLEVBQVMsQ0FDWixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsTUFBTSxFQUNOLFVBQVUsQ0FDWDtBQUNELFlBQUksRUFBRyxlQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMxQyxvQkFBWSxnQ0FBQTtBQUNaLGNBQU0sa0JBQUE7T0FDUDs7QUFFRCxZQUFLLFNBQVMsQ0FBQyxHQUFHLE1BQUssU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUV4QyxZQUFNLENBQUMsTUFBTSxDQUFDLE1BQUssU0FBUyxDQUFDLEVBQUU7QUFDN0IsV0FBRyxFQUFNLEVBQUU7QUFDWCxjQUFNLEVBQUcsRUFBRTtPQUNaLENBQUMsQ0FBQzs7QUFFSCxZQUFLLEdBQUcsR0FBRyxNQUFLLElBQUksRUFBRSxDQUFDOztBQUV2QixVQUFJLElBQUksR0FBRyxBQUFDLE1BQUssT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUksa0JBQVEsSUFBSSxDQUFDLElBQUksbUJBQVMsR0FBRyxZQUFXLEVBQUUsQ0FBQztBQUN2RixZQUFLLE1BQU0sR0FBRyxNQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7S0FDckU7O1dBL0ZVLFdBQVc7VUFOZixJQUFJO29CQXdHRSxXQUFXIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGNvbnNvbGUgZnJvbSAnY29uc29sZSc7XG5pbXBvcnQgbG9hZGVyIGZyb20gJ2RvdGVudic7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSAnQG5vZC9iYXNlJztcbmltcG9ydCBjb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IGV4dGVuZHMgQmFzZSB7XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzIDogb3B0aW9uYWwoQXJyYXkpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMub3B0aW9ucy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5vcHRpb25zLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmICghc3RhdHVzICYmIHRoaXMub3B0aW9ucy5zaWxlbnQgIT09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZCBhdCBwYXRoOiAke2ZpbGVQYXRofWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMsIHtcbiAgICAgIHNpbGVudCAgICAgIDogdHJ1ZSxcbiAgICAgIGZpbGVzICAgICAgIDogW1xuICAgICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICAgICAnLmVudi50ZXN0JyxcbiAgICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgICAnLmVudicsXG4gICAgICAgICcuZW52Lm5vZCdcbiAgICAgIF0sXG4gICAgICByb290IDogcGF0aC5kaXJuYW1lKHJlcXVpcmUubWFpbi5maWxlbmFtZSksXG4gICAgICBjb25maWd1cmF0b3IsXG4gICAgICBsb2FkZXJcbiAgICB9KTtcblxuICAgIHRoaXNbUFJPVEVDVEVEXSA9IHRoaXNbUFJPVEVDVEVEXSB8fCB7fTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLCB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9XG4gICAgfSk7XG5cbiAgICB0aGlzLkVOViA9IHRoaXMubG9hZCgpO1xuXG4gICAgbGV0IHdhcm4gPSAodGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkgPyBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSA6IGZ1bmN0aW9uKCkge307XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB3YXJuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnZpcm9ubWVudDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
