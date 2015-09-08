'use strict';

var _createDecoratedClass = require('babel-runtime/helpers/create-decorated-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('source-map-support/register');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _filterObject = require('filter-object');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _nodConsole = require('@nod/console');

var _nodeEnvConfiguration = require('node-env-configuration');

var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

var _decorateThis = require('decorate-this');

var debug = _nodConsole.console.debug || function () {},
    info = _nodConsole.console.info || function () {},
    warn = _nodConsole.console.warn || function () {};

var PROTECTED = _Symbol('PROTECTED');

var Environment = (function () {
  function Environment() {
    var _defaults;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Environment);

    this.defaults = (_defaults = {
      files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod']
    }, _defineProperty(_defaults, PROTECTED, {
      ENV: {},
      config: {}
    }), _defineProperty(_defaults, 'configurator', _nodeEnvConfiguration2['default']), _defineProperty(_defaults, 'root', _appRootPath2['default']), _defineProperty(_defaults, 'loader', _dotenv2['default']), _defineProperty(_defaults, 'debug', debug), _defineProperty(_defaults, 'info', info), _defineProperty(_defaults, 'warn', warn), _defaults);

    this.setOptions(options);
    this.ENV = this.load();
    this.config = this.configurator(undefined, undefined, this.debug);

    this.info(this.constructor.name + ': Initialized.');
  }

  _createDecoratedClass(Environment, [{
    key: 'setOptions',
    decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)((0, _decorateThis.Optional)(_defineProperty({
      root: (0, _decorateThis.Optional)(String),
      files: (0, _decorateThis.Optional)(Array)
    }, PROTECTED, (0, _decorateThis.Optional)(Object)))), _autobindDecorator2['default']],
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _Object$assign(this, this.defaults, options);
    }
  }, {
    key: 'makePath',
    decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)(String)],
    value: function makePath() {
      var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      return _path2['default'].join(_path2['default'].resolve('' + this.root), '' + file);
    }
  }, {
    key: 'load',
    decorators: [(0, _decorateThis.returns)(Object), _autobindDecorator2['default']],
    value: function load() {
      var _this = this;

      this.debug(this.constructor.name + '.load: loading \'' + this.files + '\'.');
      this.files.forEach(function (file) {
        var filePath = _this.makePath(file);
        var status = _this.loader.load({
          silent: true,
          path: filePath
        });
        if (status) {
          _this.info(_this.constructor.name + '.load: \'' + file + '\' loaded.');
        } else {
          _this.debug(_this.constructor.name + '.load: \'' + file + '\' could not found');
        }
      });
      return process.env;
    }
  }, {
    key: 'getConfig',
    decorators: [(0, _decorateThis.returns)(Object), _autobindDecorator2['default']],
    value: function getConfig() {
      return this[PROTECTED].config;
    }
  }, {
    key: 'setConfig',
    decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)(Object), _autobindDecorator2['default']],
    value: function setConfig() {
      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _Object$assign(this[PROTECTED].config, config);
      return this.config;
    }
  }, {
    key: 'getJson',
    decorators: [(0, _decorateThis.returns)(String), _autobindDecorator2['default']],
    value: function getJson() {
      var excludes = this.config.EXCLUDE || '';
      excludes = excludes.split(',') || [];
      return JSON.stringify((0, _filterObject2['default'])(this.config, excludes));
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

  return Environment;
})();

exports.Environment = Environment;
var environment = new Environment();
exports.environment = environment;
var ENV = environment.ENV;
var config = environment.config;
exports.ENV = ENV;
exports.config = config;
exports['default'] = Environment;
//# sourceMappingURL=data:application/json;base64,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dXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBjb25zb2xlIH0gZnJvbSAnQG5vZC9jb25zb2xlJztcbmltcG9ydCBjb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxubGV0IGRlYnVnID0gY29uc29sZS5kZWJ1ZyB8fCAoKSA9PiB7fSxcbiAgICBpbmZvICA9IGNvbnNvbGUuaW5mbyB8fCAoKSAgPT4ge30sXG4gICAgd2FybiAgPSBjb25zb2xlLndhcm4gfHwgKCkgID0+IHt9O1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGZpbGVzICAgICAgIDogW1xuICAgICAgJy5lbnYubG9jYWwnLFxuICAgICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgICAnLmVudi50ZXN0JyxcbiAgICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAgICcuZW52JyxcbiAgICAgICcuZW52Lm5vZCdcbiAgICBdLFxuICAgIFtQUk9URUNURURdIDoge1xuICAgICAgRU5WICAgIDoge30sXG4gICAgICBjb25maWcgOiB7fVxuICAgIH0sXG4gICAgY29uZmlndXJhdG9yLFxuICAgIHJvb3QsXG4gICAgbG9hZGVyLFxuICAgIGRlYnVnLFxuICAgIGluZm8sXG4gICAgd2FyblxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuRU5WID0gdGhpcy5sb2FkKCk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcy5kZWJ1Zyk7XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICAgICAgICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgICAgICAgOiBvcHRpb25hbChBcnJheSksXG4gICAgW1BST1RFQ1RFRF0gOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMucm9vdH1gKSwgYCR7ZmlsZX1gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6IGxvYWRpbmcgJyR7dGhpcy5maWxlc30nLmApO1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5sb2FkZXIubG9hZCh7XG4gICAgICAgIHNpbGVudCA6IHRydWUsXG4gICAgICAgIHBhdGggOiBmaWxlUGF0aFxuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBsb2FkZWQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZGApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5leHBvcnQgbGV0IHsgRU5WLCBjb25maWcgfSA9IGVudmlyb25tZW50O1xuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXX0=