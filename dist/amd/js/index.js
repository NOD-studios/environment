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
      }), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'configurator', _configurator['default']), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'root', _root['default']), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'loader', _loader['default']), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'debug', _nodConsole.debug), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'info', _nodConsole.info), (0, _babelRuntimeHelpersDefineProperty['default'])(_defaults, 'warn', _nodConsole.warn), _defaults);

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
  exports['default'] = Environment;
  var environment = new Environment();
  exports.environment = environment;
  var ENV = environment.ENV;
  var config = environment.config;
  exports.ENV = ENV;
  exports.config = config;

  _nodConsole.console.log({ environment: environment });
});
//# sourceMappingURL=data:application/json;base64,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WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCByb290IGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgY29uc29sZSwgZGVidWcsIGluZm8sIHdhcm4gfSBmcm9tICdAbm9kL2NvbnNvbGUnO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGZpbGVzICAgICAgIDogW1xuICAgICAgJy5lbnYubG9jYWwnLFxuICAgICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgICAnLmVudi50ZXN0JyxcbiAgICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAgICcuZW52JyxcbiAgICAgICcuZW52Lm5vZCdcbiAgICBdLFxuICAgIFtQUk9URUNURURdIDoge1xuICAgICAgRU5WICAgIDoge30sXG4gICAgICBjb25maWcgOiB7fVxuICAgIH0sXG4gICAgY29uZmlndXJhdG9yLFxuICAgIHJvb3QsXG4gICAgbG9hZGVyLFxuICAgIGRlYnVnLFxuICAgIGluZm8sXG4gICAgd2FyblxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuRU5WID0gdGhpcy5sb2FkKCk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcy5kZWJ1Zyk7XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICAgICAgICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgICAgICAgOiBvcHRpb25hbChBcnJheSksXG4gICAgW1BST1RFQ1RFRF0gOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMucm9vdH1gKSwgYCR7ZmlsZX1gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6IGxvYWRpbmcgJyR7dGhpcy5maWxlc30nLmApO1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5sb2FkZXIubG9hZCh7XG4gICAgICAgIHNpbGVudCA6IHRydWUsXG4gICAgICAgIHBhdGggOiBmaWxlUGF0aFxuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBsb2FkZWQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZGApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnZpcm9ubWVudDtcbmV4cG9ydCBsZXQgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoKTtcbmV4cG9ydCBsZXQgeyBFTlYsIGNvbmZpZyB9ID0gZW52aXJvbm1lbnQ7XG5jb25zb2xlLmxvZyh7IGVudmlyb25tZW50IH0pO1xuIl19