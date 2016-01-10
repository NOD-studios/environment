define(['exports', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'path', 'babel-runtime/helpers/interop-require-default', 'console', 'dotenv', 'filter-object', 'autobind-decorator', 'node-env-configuration', 'decorate-this'], function (exports, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsSymbol, _babelRuntimeCoreJsObjectAssign, _sourceMapSupportRegister, _path, _babelRuntimeHelpersInteropRequireDefault, _console, _dotenv, _filterObject, _autobindDecorator, _nodeEnvConfiguration, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _path2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_path);

  var _console2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_console);

  var _loader = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_dotenv);

  var _filter = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_filterObject);

  var _autobind = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_autobindDecorator);

  var _configurator = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_nodeEnvConfiguration);

  var PROTECTED = (0, _babelRuntimeCoreJsSymbol['default'])('PROTECTED');

  var Environment = (function () {
    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(Environment, [{
      key: 'setOptions',
      decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)((0, _decorateThis.Optional)({
        root: (0, _decorateThis.Optional)(String),
        files: (0, _decorateThis.Optional)(Array)
      })), _autobind['default']],
      value: function setOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return (0, _babelRuntimeCoreJsObjectAssign['default'])(this[PROTECTED].options, this.defaults, options);
      }
    }, {
      key: 'makePath',
      decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)(String)],
      value: function makePath() {
        var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        return _path2['default'].join(_path2['default'].resolve('' + this.options.root), '' + file);
      }
    }, {
      key: 'load',
      decorators: [(0, _decorateThis.returns)(Object), _autobind['default']],
      value: function load() {
        var _this = this;

        this.options.files.forEach(function (file) {
          var filePath = _this.makePath(file);
          var status = _this.options.loader.load({
            silent: true,
            path: filePath
          });
          if (!status && _this.options.silent !== true) {
            _console2['default'].warn(_this.constructor.name + '.load: \'' + file + '\' could not found at path: ' + filePath);
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
      key: 'options',
      get: function get() {
        return this[PROTECTED].options;
      },
      set: function set() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return this.setOptions(options);
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
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Environment);
      this.defaults = {
        silent: true,
        files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'],
        root: _path2['default'].dirname(require.main.filename),
        configurator: _configurator['default'],
        loader: _loader['default']
      };

      this[PROTECTED] = this[PROTECTED] || {
        ENV: {},
        config: {},
        options: {}
      };

      this.options = options;
      this.ENV = this.load();

      var warn = this.options.silent !== true ? _console2['default'].warn.bind(_console2['default']) : function () {};
      this.config = this.options.configurator(undefined, undefined, warn);
    }

    return Environment;
  })();

  exports.Environment = Environment;
  exports['default'] = Environment;
});
//# sourceMappingURL=data:application/json;base64,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Q3JFOztXQXZHVSxXQUFXOzs7O3VCQTBHVCxXQUFXIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgY29uc29sZSBmcm9tICdjb25zb2xlJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBjb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBzaWxlbnQgICAgICA6IHRydWUsXG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgcm9vdCA6IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4uZmlsZW5hbWUpLFxuICAgIGNvbmZpZ3VyYXRvcixcbiAgICBsb2FkZXJcbiAgfVxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0ub3B0aW9ucztcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHJvb3QgICAgICAgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyAgICAgICA6IG9wdGlvbmFsKEFycmF5KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldCBvcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMub3B0aW9ucy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5vcHRpb25zLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmICghc3RhdHVzICYmIHRoaXMub3B0aW9ucy5zaWxlbnQgIT09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZCBhdCBwYXRoOiAke2ZpbGVQYXRofWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXNbUFJPVEVDVEVEXSA9IHRoaXNbUFJPVEVDVEVEXSB8fCB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9LFxuICAgICAgb3B0aW9ucyA6IHt9XG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5FTlYgPSB0aGlzLmxvYWQoKTtcblxuICAgIGxldCB3YXJuID0gKHRoaXMub3B0aW9ucy5zaWxlbnQgIT09IHRydWUpID8gY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkgOiBmdW5jdGlvbigpIHt9O1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5vcHRpb25zLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgd2Fybik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXX0=