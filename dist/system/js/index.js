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

      _export('Environment', Environment);

      _export('default', Environment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7K0tBVU0sU0FBUyxFQUVYLElBQUksRUFDTixLQUFLLEVBQ0wsSUFBSSxFQUVPLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBUmYsS0FBSzs4QkFBRSxPQUFPOytCQUFFLFFBQVE7Ozs7O0FBRTNCLGVBQVMsR0FBRyxRQUFPLFdBQVcsQ0FBQztBQUVqQyxVQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ2xDLFdBQUssR0FBRyxJQUFJO0FBQ1osVUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7QUFFdkIsaUJBQVc7QUF1QlgsaUJBdkJBLFdBQVcsR0F1Qkk7OztjQUFkLE9BQU8seURBQUcsRUFBRTs7Z0NBdkJiLFdBQVc7O2VBRXRCLFFBQVE7QUFDTixpQkFBSyxFQUFTLENBQ1osWUFBWSxFQUNaLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixVQUFVLENBQ1g7d0NBQ0EsU0FBUyxFQUFJO0FBQ1osZUFBRyxFQUFNLEVBQUU7QUFDWCxrQkFBTSxFQUFHLEVBQUU7V0FDWiw4Q0FDRCxZQUFZLHNDQUNaLElBQUksd0NBQ0osTUFBTSx1Q0FDTixLQUFLLHNDQUNMLElBQUksc0NBQ0osSUFBSTs7QUFJSixjQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLGNBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFakUsY0FBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksb0JBQWlCLENBQUM7U0FDckQ7OzhCQTdCVSxXQUFXOzt1QkFxQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFMZixLQUFLLENBQUMsUUFBUTtBQUNiLGdCQUFJLEVBQVUsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUM5QixpQkFBSyxFQUFTLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDNUIsU0FBUyxFQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDOUIsQ0FBQyxFQUxGLFFBQVE7aUJBT0Msc0JBQWU7Z0JBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQixtQkFBTyxlQUFjLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1dBQ3BEOzs7dUJBR0EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQURmLEtBQUssQ0FBQyxNQUFNLENBQUM7aUJBRU4sb0JBQVk7Z0JBQVgsSUFBSSx5REFBRyxFQUFFOztBQUNoQixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQUksSUFBSSxDQUFDLElBQUksQ0FBRyxPQUFLLElBQUksQ0FBRyxDQUFDO1dBQzNEOzs7dUJBR0EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQURmLFFBQVE7aUJBRUwsZ0JBQUc7OztBQUNMLGdCQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSx5QkFBbUIsSUFBSSxDQUFDLEtBQUssU0FBSyxDQUFDO0FBQ3RFLGdCQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBTTtBQUM1QixrQkFBSSxRQUFRLEdBQUcsTUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsa0JBQUksTUFBTSxHQUFHLE1BQUssTUFBTSxDQUFDLElBQUksQ0FBQztBQUM1QixzQkFBTSxFQUFHLElBQUk7QUFDYixvQkFBSSxFQUFHLFFBQVE7ZUFDaEIsQ0FBQyxDQUFDO0FBQ0gsa0JBQUksTUFBTSxFQUFFO0FBQ1Ysc0JBQUssSUFBSSxDQUFJLE1BQUssV0FBVyxDQUFDLElBQUksaUJBQVcsSUFBSSxnQkFBWSxDQUFDO2VBQy9ELE1BQU07QUFDTCxzQkFBSyxJQUFJLENBQUksTUFBSyxXQUFXLENBQUMsSUFBSSxpQkFBVyxJQUFJLHlCQUFxQixDQUFDO2VBQ3hFO2FBQ0YsQ0FBQyxDQUFDO0FBQ0gsbUJBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztXQUNwQjs7O3VCQU9BLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFEZixRQUFRO2lCQUVBLHFCQUFHO0FBQ1YsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztXQUMvQjs7O3VCQVFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFEZixLQUFLLENBQUMsTUFBTSxDQUFDLEVBRGIsUUFBUTtpQkFHQSxxQkFBYztnQkFBYixNQUFNLHlEQUFHLEVBQUU7O0FBQ25CLDJCQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztXQUNwQjs7O3VCQU9BLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFEZixRQUFRO2lCQUVGLG1CQUFHO0FBQ1IsZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QyxvQkFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JDLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztXQUN0RDs7O2VBaENTLGVBQUc7QUFDWCxtQkFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7V0FDekI7ZUFRUyxlQUFZO0FBQ3BCLG1CQUFPLElBQUksQ0FBQyxTQUFTLE1BQUEsQ0FBZCxJQUFJLFlBQXFCLENBQUM7V0FDbEM7OztlQVVPLGVBQUc7QUFDVCxtQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDdkI7OztlQTNGVSxXQUFXOzs7Ozt5QkFzR1QsV0FBVyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBjb25zb2xlIGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcm9vdCBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBjb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxubGV0IGluZm8gPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLFxuICBkZWJ1ZyA9IGluZm8sXG4gIHdhcm4gPSBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgW1BST1RFQ1RFRF0gOiB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9XG4gICAgfSxcbiAgICBjb25maWd1cmF0b3IsXG4gICAgcm9vdCxcbiAgICBsb2FkZXIsXG4gICAgZGVidWcsXG4gICAgaW5mbyxcbiAgICB3YXJuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5FTlYgPSB0aGlzLmxvYWQoKTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLndhcm4pO1xuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgICAgICAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzICAgICAgIDogb3B0aW9uYWwoQXJyYXkpLFxuICAgIFtQUk9URUNURURdIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoU3RyaW5nKVxuICBtYWtlUGF0aChmaWxlID0gJycpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShgJHt0aGlzLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiBsb2FkaW5nICcke3RoaXMuZmlsZXN9Jy5gKTtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUpICA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSB0aGlzLm1ha2VQYXRoKGZpbGUpO1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgbG9hZGVkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGNvdWxkIG5vdCBsb2FkZWRgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnY7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0uY29uZmlnO1xuICB9XG5cbiAgc2V0IGNvbmZpZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb25maWcoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLmNvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRKc29uKCkge1xuICAgIGxldCBleGNsdWRlcyA9IHRoaXMuY29uZmlnLkVYQ0xVREUgfHwgJyc7XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcy5zcGxpdCgnLCcpIHx8IFtdO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmaWx0ZXIodGhpcy5jb25maWcsIGV4Y2x1ZGVzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXX0=