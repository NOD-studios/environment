System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'console', 'dotenv', 'path', 'app-root-path', 'filter-object', 'autobind-decorator', 'node-env-configuration', 'decorate-this'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _Symbol, _Object$assign, console, loader, path, root, filter, autobind, configurator, param, returns, optional, PROTECTED, info, debug, warn, Environment;

  return {
    setters: [function (_babelRuntimeHelpersCreateDecoratedClass) {
      _createDecoratedClass = _babelRuntimeHelpersCreateDecoratedClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_babelRuntimeHelpersDefineProperty) {
      _defineProperty = _babelRuntimeHelpersDefineProperty['default'];
    }, function (_babelRuntimeCoreJsSymbol) {
      _Symbol = _babelRuntimeCoreJsSymbol['default'];
    }, function (_babelRuntimeCoreJsObjectAssign) {
      _Object$assign = _babelRuntimeCoreJsObjectAssign['default'];
    }, function (_sourceMapSupportRegister) {}, function (_console) {
      console = _console['default'];
    }, function (_dotenv) {
      loader = _dotenv['default'];
    }, function (_path) {
      path = _path['default'];
    }, function (_appRootPath) {
      root = _appRootPath['default'];
    }, function (_filterObject) {
      filter = _filterObject['default'];
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator['default'];
    }, function (_nodeEnvConfiguration) {
      configurator = _nodeEnvConfiguration['default'];
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
    }],
    execute: function () {
      'use strict';

      PROTECTED = _Symbol('PROTECTED');
      info = console.log.bind(console);
      debug = info;
      warn = console.error.bind(console);

      Environment = (function () {
        function Environment() {
          var _defaults;

          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          _classCallCheck(this, Environment);

          this.defaults = (_defaults = {
            files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod']
          }, _defineProperty(_defaults, PROTECTED, {
            ENV: {},
            config: {}
          }), _defineProperty(_defaults, 'configurator', configurator), _defineProperty(_defaults, 'root', root), _defineProperty(_defaults, 'loader', loader), _defineProperty(_defaults, 'debug', debug), _defineProperty(_defaults, 'info', info), _defineProperty(_defaults, 'warn', warn), _defaults);

          this.setOptions(options);
          this.ENV = this.load();
          this.config = this.configurator(undefined, undefined, this.warn);

          this.info(this.constructor.name + ': Initialized.');
        }

        _createDecoratedClass(Environment, [{
          key: 'setOptions',
          decorators: [returns(Object), param(optional(_defineProperty({
            root: optional(String),
            files: optional(Array)
          }, PROTECTED, optional(Object)))), autobind],
          value: function setOptions() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            return _Object$assign(this, this.defaults, options);
          }
        }, {
          key: 'makePath',
          decorators: [returns(String), param(String)],
          value: function makePath() {
            var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            return path.join(path.resolve('' + this.root), '' + file);
          }
        }, {
          key: 'load',
          decorators: [returns(Object), autobind],
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
                _this.warn(_this.constructor.name + '.load: \'' + file + '\' could not loaded');
              }
            });
            return process.env;
          }
        }, {
          key: 'getConfig',
          decorators: [returns(Object), autobind],
          value: function getConfig() {
            return this[PROTECTED].config;
          }
        }, {
          key: 'setConfig',
          decorators: [returns(Object), param(Object), autobind],
          value: function setConfig() {
            var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            _Object$assign(this[PROTECTED].config, config);
            return this.config;
          }
        }, {
          key: 'getJson',
          decorators: [returns(String), autobind],
          value: function getJson() {
            var excludes = this.config.EXCLUDE || '';
            excludes = excludes.split(',') || [];
            return JSON.stringify(filter(this.config, excludes));
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

      _export('default', Environment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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V0FBVyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBjb25zb2xlIGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcm9vdCBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBjb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxubGV0IGluZm8gPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICBkZWJ1ZyA9IGluZm8sXG4gIHdhcm4gPSBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBmaWxlcyAgICAgICA6IFtcbiAgICAgICcuZW52LmxvY2FsJyxcbiAgICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICAgJy5lbnYudGVzdCcsXG4gICAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgICAnLmVudicsXG4gICAgICAnLmVudi5ub2QnXG4gICAgXSxcbiAgICBbUFJPVEVDVEVEXSA6IHtcbiAgICAgIEVOViAgICA6IHt9LFxuICAgICAgY29uZmlnIDoge31cbiAgICB9LFxuICAgIGNvbmZpZ3VyYXRvcixcbiAgICByb290LFxuICAgIGxvYWRlcixcbiAgICBkZWJ1ZyxcbiAgICBpbmZvLFxuICAgIHdhcm5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLkVOViA9IHRoaXMubG9hZCgpO1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMud2Fybik7XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICAgICAgICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgICAgICAgOiBvcHRpb25hbChBcnJheSksXG4gICAgW1BST1RFQ1RFRF0gOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMucm9vdH1gKSwgYCR7ZmlsZX1gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6IGxvYWRpbmcgJyR7dGhpcy5maWxlc30nLmApO1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5sb2FkZXIubG9hZCh7XG4gICAgICAgIHNpbGVudCA6IHRydWUsXG4gICAgICAgIHBhdGggOiBmaWxlUGF0aFxuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBsb2FkZWQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndhcm4oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGxvYWRlZGApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxufVxuIl19