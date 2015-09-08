System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'path', 'dotenv', 'app-root-path', 'filter-object', 'autobind-decorator', '@nod/console', 'node-env-configuration', 'decorate-this'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _Symbol, _Object$assign, path, loader, root, filter, autobind, console, configurator, param, returns, optional, debug, info, warn, PROTECTED, Environment, environment, ENV, config;

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
    }, function (_sourceMapSupportRegister) {}, function (_path) {
      path = _path['default'];
    }, function (_dotenv) {
      loader = _dotenv['default'];
    }, function (_appRootPath) {
      root = _appRootPath['default'];
    }, function (_filterObject) {
      filter = _filterObject['default'];
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator['default'];
    }, function (_nodConsole) {
      console = _nodConsole.console;
    }, function (_nodeEnvConfiguration) {
      configurator = _nodeEnvConfiguration['default'];
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
    }],
    execute: function () {
      'use strict';

      debug = console.debug || function () {};

      info = console.info || function () {};

      warn = console.warn || function () {};

      PROTECTED = _Symbol('PROTECTED');

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
          this.config = this.configurator(undefined, undefined, this.debug);

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
                _this.debug(_this.constructor.name + '.load: \'' + file + '\' could not found');
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

      _export('Environment', Environment);

      environment = new Environment();

      _export('environment', environment);

      ENV = environment.ENV;
      config = environment.config;

      _export('ENV', ENV);

      _export('config', config);

      _export('default', Environment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7K0tBVUksS0FBSyxFQUNMLElBQUksRUFDSixJQUFJLEVBRUYsU0FBUyxFQUVGLFdBQVcsRUFzR2IsV0FBVyxFQUNULEdBQUcsRUFBRSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBakhmLE9BQU87Ozs7NEJBRVAsS0FBSzs4QkFBRSxPQUFPOytCQUFFLFFBQVE7Ozs7O0FBRTdCLFdBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLFlBQU0sRUFBRTs7QUFDakMsVUFBSSxHQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksWUFBTyxFQUFFOztBQUNqQyxVQUFJLEdBQUksT0FBTyxDQUFDLElBQUksSUFBSSxZQUFPLEVBQUU7O0FBRS9CLGVBQVMsR0FBRyxRQUFPLFdBQVcsQ0FBQzs7QUFFeEIsaUJBQVc7QUF1QlgsaUJBdkJBLFdBQVcsR0F1Qkk7OztjQUFkLE9BQU8seURBQUcsRUFBRTs7Z0NBdkJiLFdBQVc7O2VBRXRCLFFBQVE7QUFDTixpQkFBSyxFQUFTLENBQ1osWUFBWSxFQUNaLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixVQUFVLENBQ1g7d0NBQ0EsU0FBUyxFQUFJO0FBQ1osZUFBRyxFQUFNLEVBQUU7QUFDWCxrQkFBTSxFQUFHLEVBQUU7V0FDWiw4Q0FDRCxZQUFZLHNDQUNaLElBQUksd0NBQ0osTUFBTSx1Q0FDTixLQUFLLHNDQUNMLElBQUksc0NBQ0osSUFBSTs7QUFJSixjQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLGNBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFbEUsY0FBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksb0JBQWlCLENBQUM7U0FDckQ7OzhCQTdCVSxXQUFXOzt1QkFxQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFMZixLQUFLLENBQUMsUUFBUTtBQUNiLGdCQUFJLEVBQVUsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUM5QixpQkFBSyxFQUFTLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDNUIsU0FBUyxFQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDOUIsQ0FBQyxFQUxGLFFBQVE7aUJBT0Msc0JBQWU7Z0JBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQixtQkFBTyxlQUFjLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1dBQ3BEOzs7dUJBR0EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQURmLEtBQUssQ0FBQyxNQUFNLENBQUM7aUJBRU4sb0JBQVk7Z0JBQVgsSUFBSSx5REFBRyxFQUFFOztBQUNoQixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBRyxPQUFLLElBQUksQ0FBRyxDQUFDO1dBQzNEOzs7dUJBR0EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQURmLFFBQVE7aUJBRUwsZ0JBQUc7OztBQUNMLGdCQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSx5QkFBbUIsSUFBSSxDQUFDLEtBQUssU0FBSyxDQUFDO0FBQ3RFLGdCQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBTTtBQUM1QixrQkFBSSxRQUFRLEdBQUcsTUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsa0JBQUksTUFBTSxHQUFHLE1BQUssTUFBTSxDQUFDLElBQUksQ0FBQztBQUM1QixzQkFBTSxFQUFHLElBQUk7QUFDYixvQkFBSSxFQUFHLFFBQVE7ZUFDaEIsQ0FBQyxDQUFDO0FBQ0gsa0JBQUksTUFBTSxFQUFFO0FBQ1Ysc0JBQUssSUFBSSxDQUFJLE1BQUssV0FBVyxDQUFDLElBQUksaUJBQVcsSUFBSSxnQkFBWSxDQUFDO2VBQy9ELE1BQU07QUFDTCxzQkFBSyxLQUFLLENBQUksTUFBSyxXQUFXLENBQUMsSUFBSSxpQkFBVyxJQUFJLHdCQUFvQixDQUFDO2VBQ3hFO2FBQ0YsQ0FBQyxDQUFDO0FBQ0gsbUJBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztXQUNwQjs7O3VCQU9BLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFEZixRQUFRO2lCQUVBLHFCQUFHO0FBQ1YsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztXQUMvQjs7O3VCQVFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFEZixLQUFLLENBQUMsTUFBTSxDQUFDLEVBRGIsUUFBUTtpQkFHQSxxQkFBYztnQkFBYixNQUFNLHlEQUFHLEVBQUU7O0FBQ25CLDJCQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztXQUNwQjs7O3VCQU9BLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFEZixRQUFRO2lCQUVGLG1CQUFHO0FBQ1IsZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QyxvQkFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JDLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztXQUN0RDs7O2VBaENTLGVBQUc7QUFDWCxtQkFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7V0FDekI7ZUFRUyxlQUFZO0FBQ3BCLG1CQUFPLElBQUksQ0FBQyxTQUFTLE1BQUEsQ0FBZCxJQUFJLFlBQXFCLENBQUM7V0FDbEM7OztlQVVPLGVBQUc7QUFDVCxtQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDdkI7OztlQTNGVSxXQUFXOzs7OztBQXNHYixpQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFOzs7O0FBQzdCLFNBQUcsR0FBYSxXQUFXLENBQTNCLEdBQUc7QUFBRSxZQUFNLEdBQUssV0FBVyxDQUF0QixNQUFNOzs7Ozs7eUJBQ1QsV0FBVyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBjb25zb2xlIH0gZnJvbSAnQG5vZC9jb25zb2xlJztcbmltcG9ydCBjb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxubGV0IGRlYnVnID0gY29uc29sZS5kZWJ1ZyB8fCAoKSA9PiB7fSxcbiAgICBpbmZvICA9IGNvbnNvbGUuaW5mbyB8fCAoKSAgPT4ge30sXG4gICAgd2FybiAgPSBjb25zb2xlLndhcm4gfHwgKCkgID0+IHt9O1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGZpbGVzICAgICAgIDogW1xuICAgICAgJy5lbnYubG9jYWwnLFxuICAgICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgICAnLmVudi50ZXN0JyxcbiAgICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAgICcuZW52JyxcbiAgICAgICcuZW52Lm5vZCdcbiAgICBdLFxuICAgIFtQUk9URUNURURdIDoge1xuICAgICAgRU5WICAgIDoge30sXG4gICAgICBjb25maWcgOiB7fVxuICAgIH0sXG4gICAgY29uZmlndXJhdG9yLFxuICAgIHJvb3QsXG4gICAgbG9hZGVyLFxuICAgIGRlYnVnLFxuICAgIGluZm8sXG4gICAgd2FyblxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuRU5WID0gdGhpcy5sb2FkKCk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcy5kZWJ1Zyk7XG5cbiAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfTogSW5pdGlhbGl6ZWQuYCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICAgICAgICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgICAgICAgOiBvcHRpb25hbChBcnJheSksXG4gICAgW1BST1RFQ1RFRF0gOiBvcHRpb25hbChPYmplY3QpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMucm9vdH1gKSwgYCR7ZmlsZX1gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6IGxvYWRpbmcgJyR7dGhpcy5maWxlc30nLmApO1xuICAgIHRoaXMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5sb2FkZXIubG9hZCh7XG4gICAgICAgIHNpbGVudCA6IHRydWUsXG4gICAgICAgIHBhdGggOiBmaWxlUGF0aFxuICAgICAgfSk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBsb2FkZWQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZGApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5leHBvcnQgbGV0IHsgRU5WLCBjb25maWcgfSA9IGVudmlyb25tZW50O1xuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXX0=