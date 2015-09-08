System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'path', 'dotenv', 'app-root-path', 'filter-object', 'autobind-decorator', '@nod/console', 'node-env-configuration', 'decorate-this'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _Symbol, _Object$assign, path, loader, root, filter, autobind, console, debug, info, warn, configurator, param, returns, optional, PROTECTED, Environment, environment, ENV, config;

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
      debug = _nodConsole.debug;
      info = _nodConsole.info;
      warn = _nodConsole.warn;
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

      _export('default', Environment);

      environment = new Environment();

      _export('environment', environment);

      ENV = environment.ENV;
      config = environment.config;

      _export('ENV', ENV);

      _export('config', config);

      console.log({ environment: environment });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LFdBQVcsQ0FBdEIsTUFBTTs7Ozs7O0FBQ3hCLGFBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQVgsV0FBVyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBjb25zb2xlLCBkZWJ1ZywgaW5mbywgd2FybiB9IGZyb20gJ0Bub2QvY29uc29sZSc7XG5pbXBvcnQgY29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgW1BST1RFQ1RFRF0gOiB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9XG4gICAgfSxcbiAgICBjb25maWd1cmF0b3IsXG4gICAgcm9vdCxcbiAgICBsb2FkZXIsXG4gICAgZGVidWcsXG4gICAgaW5mbyxcbiAgICB3YXJuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5FTlYgPSB0aGlzLmxvYWQoKTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLmRlYnVnKTtcblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHJvb3QgICAgICAgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyAgICAgICA6IG9wdGlvbmFsKEFycmF5KSxcbiAgICBbUFJPVEVDVEVEXSA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogbG9hZGluZyAnJHt0aGlzLmZpbGVzfScuYCk7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGxvYWRlZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuZXhwb3J0IGxldCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCgpO1xuZXhwb3J0IGxldCB7IEVOViwgY29uZmlnIH0gPSBlbnZpcm9ubWVudDtcbmNvbnNvbGUubG9nKHsgZW52aXJvbm1lbnQgfSk7XG4iXX0=