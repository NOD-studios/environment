var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'path', 'console', 'dotenv', 'filter-object', 'autobind-decorator', '@nod/base', 'node-env-configuration', 'decorate-this', 'source-map-support/register'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('path'), require('console'), require('dotenv'), require('filter-object'), require('autobind-decorator'), require('@nod/base'), require('node-env-configuration'), require('decorate-this'), require('source-map-support/register'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.path, global.console, global.dotenv, global.filterObject, global.autobindDecorator, global.base, global.nodeEnvConfiguration, global.decorateThis, global.register);
    global.environment = mod.exports;
  }
})(this, function (exports, _path, _console, _dotenv, _filterObject, _autobindDecorator, _base, _nodeEnvConfiguration, _decorateThis) {
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

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Environment).call(this, options));

      _this.defaults = {
        silent: true,
        files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'],
        root: _path2.default.dirname(require.main.filename),
        configurator: _nodeEnvConfiguration2.default,
        loader: _dotenv2.default
      };

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFZYSxXQUFXLFdBQVgsV0FBVyxXQWtCckIsa0JBdEJNLEtBQUssRUFzQkwsa0JBdEJnQixRQUFRLEVBc0JmO0FBQ2QsUUFBSSxFQUFVLGtCQXZCTyxRQUFRLEVBdUJOLE1BQU0sQ0FBQztBQUM5QixTQUFLLEVBQVMsa0JBeEJPLFFBQVEsRUF3Qk4sS0FBSyxDQUFDO0dBQzlCLENBQUMsQ0FBQyxVQUNGLGtCQTFCYSxPQUFPLEVBMEJaLE1BQU0sQ0FBQyxVQUtmLGtCQS9CTSxLQUFLLEVBK0JMLE1BQU0sQ0FBQyxVQUNiLGtCQWhDYSxPQUFPLEVBZ0NaLE1BQU0sQ0FBQyxVQU1mLGtCQXRDYSxPQUFPLEVBc0NaLE1BQU0sQ0FBQyxVQW9CZixrQkExRGEsT0FBTyxFQTBEWixNQUFNLENBQUMsVUFVZixrQkFwRU0sS0FBSyxFQW9FTCxNQUFNLENBQUMsVUFDYixrQkFyRWEsT0FBTyxFQXFFWixNQUFNLENBQUMsVUFXZixrQkFoRmEsT0FBTyxFQWdGWixNQUFNLENBQUM7Y0E1RUwsV0FBVzs7aUJBQVgsV0FBVzs7bUNBdUJHO1lBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQiwwQ0F4QlMsV0FBVyw0Q0F3QkksT0FBTyxFQUFFO09BQ2xDOzs7aUNBSW1CO1lBQVgsSUFBSSx5REFBRyxFQUFFOztBQUNoQixlQUFPLGVBQUssSUFBSSxDQUFDLGVBQUssT0FBTyxNQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFHLE9BQUssSUFBSSxDQUFHLENBQUM7T0FDbkU7Ozs2QkFJTTs7O0FBQ0wsWUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFNO0FBQ3BDLGNBQUksUUFBUSxHQUFHLE9BQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLGNBQUksTUFBTSxHQUFHLE9BQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDcEMsa0JBQU0sRUFBRyxJQUFJO0FBQ2IsZ0JBQUksRUFBRyxRQUFRO1dBQ2hCLENBQUMsQ0FBQztBQUNILGNBQUksQ0FBQyxNQUFNLElBQUksT0FBSyxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtBQUMzQyw4QkFBUSxJQUFJLENBQUksT0FBSyxXQUFXLENBQUMsSUFBSSxpQkFBVyxJQUFJLG9DQUE4QixRQUFRLENBQUcsQ0FBQztXQUMvRjtTQUNGLENBQUMsQ0FBQztBQUNILGVBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztPQUNwQjs7O2tDQVFXO0FBQ1YsZUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO09BQy9COzs7a0NBU3NCO1lBQWIsTUFBTSx5REFBRyxFQUFFOztBQUNuQixjQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsZUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO09BQ3BCOzs7Z0NBUVM7QUFDUixZQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDekMsZ0JBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNyQyxlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO09BQ3REOzs7MEJBaENZO0FBQ1gsZUFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7T0FDekI7MEJBUXFCO0FBQ3BCLGVBQU8sSUFBSSxDQUFDLFNBQVMsTUFBQSxDQUFkLElBQUksWUFBcUIsQ0FBQztPQUNsQzs7OzBCQVVVO0FBQ1QsZUFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7T0FDdkI7OztBQVVELGFBbkZXLFdBQVcsR0FtRkk7VUFBZCxPQUFPLHlEQUFHLEVBQUU7OzRCQW5GYixXQUFXOzt5RUFBWCxXQUFXLGFBb0ZkLE9BQU87O1lBbEZmLFFBQVEsR0FBRztBQUNULGNBQU0sRUFBUSxJQUFJO0FBQ2xCLGFBQUssRUFBUyxDQUNaLFlBQVksRUFDWixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixNQUFNLEVBQ04sVUFBVSxDQUNYO0FBQ0QsWUFBSSxFQUFHLGVBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzFDLG9CQUFZLGdDQUFBO0FBQ1osY0FBTSxrQkFBQTtPQUNQOztBQXVFQyxZQUFNLENBQUMsTUFBTSxDQUFDLE1BQUssU0FBUyxDQUFDLEVBQUU7QUFDN0IsV0FBRyxFQUFNLEVBQUU7QUFDWCxjQUFNLEVBQUcsRUFBRTtPQUNaLENBQUMsQ0FBQzs7QUFFSCxZQUFLLEdBQUcsR0FBRyxNQUFLLElBQUksRUFBRSxDQUFDOztBQUV2QixVQUFJLElBQUksR0FBRyxBQUFDLE1BQUssT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUksa0JBQVEsSUFBSSxDQUFDLElBQUksbUJBQVMsR0FBRyxZQUFXLEVBQUUsQ0FBQztBQUN2RixZQUFLLE1BQU0sR0FBRyxNQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7S0FDckU7O1dBL0ZVLFdBQVc7VUFOZixJQUFJO29CQXdHRSxXQUFXIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgY29uc29sZSBmcm9tICdjb25zb2xlJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICdAbm9kL2Jhc2UnO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlIHtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBzaWxlbnQgICAgICA6IHRydWUsXG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgcm9vdCA6IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4uZmlsZW5hbWUpLFxuICAgIGNvbmZpZ3VyYXRvcixcbiAgICBsb2FkZXJcbiAgfTtcblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICAgICAgICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgICAgICAgOiBvcHRpb25hbChBcnJheSlcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5vcHRpb25zLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMub3B0aW9ucy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLm9wdGlvbnMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKCFzdGF0dXMgJiYgdGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kIGF0IHBhdGg6ICR7ZmlsZVBhdGh9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXSwge1xuICAgICAgRU5WICAgIDoge30sXG4gICAgICBjb25maWcgOiB7fVxuICAgIH0pO1xuXG4gICAgdGhpcy5FTlYgPSB0aGlzLmxvYWQoKTtcblxuICAgIGxldCB3YXJuID0gKHRoaXMub3B0aW9ucy5zaWxlbnQgIT09IHRydWUpID8gY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkgOiBmdW5jdGlvbigpIHt9O1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgd2Fybik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
