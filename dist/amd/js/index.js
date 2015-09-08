define(['exports', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'path', 'babel-runtime/helpers/interop-require-default', 'dotenv', 'app-root-path', 'filter-object', 'autobind-decorator', '@nod/console', 'node-env-configuration', 'decorate-this'], function (exports, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeHelpersDefineProperty, _babelRuntimeCoreJsSymbol, _babelRuntimeCoreJsObjectAssign, _sourceMapSupportRegister, _path, _babelRuntimeHelpersInteropRequireDefault, _dotenv, _appRootPath, _filterObject, _autobindDecorator, _nodConsole, _nodeEnvConfiguration, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _path2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_path);

  var _loader = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_dotenv);

  var _root = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_appRootPath);

  var _filter = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_filterObject);

  var _autobind = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_autobindDecorator);

  var _configurator = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_nodeEnvConfiguration);

  var debug = _nodConsole.console.debug || function () {},
      info = _nodConsole.console.info || function () {},
      warn = _nodConsole.console.warn || function () {};

  var PROTECTED = (0, _babelRuntimeCoreJsSymbol['default'])('PROTECTED');

  var Environment = (function () {
    function Environment() {
      var _defaults;

      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Environment);
      this.defaults = (_defaults = {
        files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod']
      }, (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, PROTECTED, {
        ENV: {},
        config: {}
      }), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'configurator', _configurator['default']), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'root', _root['default']), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'loader', _loader['default']), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'debug', debug), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'info', info), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'warn', warn), _defaults);

      this.setOptions(options);
      this.ENV = this.load();
      this.config = this.configurator(undefined, undefined, this.debug);

      this.info(this.constructor.name + ': Initialized.');
    }

    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Environment, [{
      key: 'setOptions',
      decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)((0, _decorateThis.Optional)((0, _babelRuntimeHelpersDefineProperty['default'])({
        root: (0, _decorateThis.Optional)(String),
        files: (0, _decorateThis.Optional)(Array)
      }, PROTECTED, (0, _decorateThis.Optional)(Object)))), _autobind['default']],
      value: function setOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return (0, _babelRuntimeCoreJsObjectAssign['default'])(this, this.defaults, options);
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
      decorators: [(0, _decorateThis.returns)(Object), _autobind['default']],
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
      decorators: [(0, _decorateThis.returns)(Object), _autobind['default']],
      value: function getConfig() {
        return this[PROTECTED].config;
      }
    }, {
      key: 'setConfig',
      decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)(Object), _autobind['default']],
      value: function setConfig() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        (0, _babelRuntimeCoreJsObjectAssign['default'])(this[PROTECTED].config, config);
        return this.config;
      }
    }, {
      key: 'getJson',
      decorators: [(0, _decorateThis.returns)(String), _autobind['default']],
      value: function getJson() {
        var excludes = this.config.EXCLUDE || '';
        excludes = excludes.split(',') || [];
        return JSON.stringify((0, _filter['default'])(this.config, excludes));
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
});
//# sourceMappingURL=data:application/json;base64,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LEdBQUssV0FBVyxDQUF0QixNQUFNOzs7dUJBQ1QsV0FBVyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBjb25zb2xlIH0gZnJvbSAnQG5vZC9jb25zb2xlJztcbmltcG9ydCBjb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxubGV0IGRlYnVnID0gY29uc29sZS5kZWJ1ZyB8fCAoKSA9PiB7fSxcbiAgICBpbmZvICA9IGNvbnNvbGUuaW5mbyB8fCAoKSAgPT4ge30sXG4gICAgd2FybiAgPSBjb25zb2xlLndhcm4gfHwgKCkgID0+IHt9O1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGZpbGVzICAgICAgIDogW1xuICAgICAgJy5lbnYubG9jYWwnLFxuICAgICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgICAnLmVudi50ZXN0JyxcbiAgICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAgICcuZW52JyxcbiAgICAgICcuZW52Lm5vZCdcbiAgICBdLFxuICAgIFtQUk9URUNURURdIDoge1xuICAgICAgRU5WICAgIDoge30sXG4gICAgICBjb25maWcgOiB7fVxuICAgIH0sXG4gICAgY29uZmlndXJhdG9yLFxuICAgIHJvb3QsXG4gICAgbG9hZGVyLFxuICAgIGRlYnVnLFxuICAgIGluZm8sXG4gICAgd2FyblxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuRU5WID0gdGhpcy5sb2FkKCk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcy5kZWJ1Zyk7XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICAgICAgICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgICAgICAgOiBvcHRpb25hbChBcnJheSksXG4gICAgW1BST1RFQ1RFRF0gOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMucm9vdH1gKSwgYCR7ZmlsZX1gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6IGxvYWRpbmcgJyR7dGhpcy5maWxlc30nLmApO1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5sb2FkZXIubG9hZCh7XG4gICAgICAgIHNpbGVudCA6IHRydWUsXG4gICAgICAgIHBhdGggOiBmaWxlUGF0aFxuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBsb2FkZWQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZGApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5leHBvcnQgbGV0IHsgRU5WLCBjb25maWcgfSA9IGVudmlyb25tZW50O1xuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXX0=