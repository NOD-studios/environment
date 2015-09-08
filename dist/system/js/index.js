System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'path', 'dotenv', 'app-root-path', 'filter-object', 'autobind-decorator', 'node-env-configuration', 'decorate-this'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _Symbol, _Object$assign, path, loader, root, filter, autobind, configurator, param, returns, optional, debug, info, warn, PROTECTED, Environment;

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
    }, function (_nodeEnvConfiguration) {
      configurator = _nodeEnvConfiguration['default'];
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
    }],
    execute: function () {
      'use strict';

      debug = function debug() {};

      info = debug;
      warn = debug;
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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgY29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmxldCBkZWJ1ZyA9ICgpID0+IHt9LFxuICAgIGluZm8gID0gZGVidWcsXG4gICAgd2FybiAgPSBkZWJ1ZztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBmaWxlcyAgICAgICA6IFtcbiAgICAgICcuZW52LmxvY2FsJyxcbiAgICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICAgJy5lbnYudGVzdCcsXG4gICAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgICAnLmVudicsXG4gICAgICAnLmVudi5ub2QnXG4gICAgXSxcbiAgICBbUFJPVEVDVEVEXSA6IHtcbiAgICAgIEVOViAgICA6IHt9LFxuICAgICAgY29uZmlnIDoge31cbiAgICB9LFxuICAgIGNvbmZpZ3VyYXRvcixcbiAgICByb290LFxuICAgIGxvYWRlcixcbiAgICBkZWJ1ZyxcbiAgICBpbmZvLFxuICAgIHdhcm5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLkVOViA9IHRoaXMubG9hZCgpO1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuZGVidWcpO1xuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgICAgICAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzICAgICAgIDogb3B0aW9uYWwoQXJyYXkpLFxuICAgIFtQUk9URUNURURdIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoU3RyaW5nKVxuICBtYWtlUGF0aChmaWxlID0gJycpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShgJHt0aGlzLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiBsb2FkaW5nICcke3RoaXMuZmlsZXN9Jy5gKTtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUpICA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSB0aGlzLm1ha2VQYXRoKGZpbGUpO1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgbG9hZGVkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBjb3VsZCBub3QgZm91bmRgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnY7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0uY29uZmlnO1xuICB9XG5cbiAgc2V0IGNvbmZpZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb25maWcoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLmNvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRKc29uKCkge1xuICAgIGxldCBleGNsdWRlcyA9IHRoaXMuY29uZmlnLkVYQ0xVREUgfHwgJyc7XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcy5zcGxpdCgnLCcpIHx8IFtdO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmaWx0ZXIodGhpcy5jb25maWcsIGV4Y2x1ZGVzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXX0=
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCByb290IGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5sZXQgZGVidWcgPSAoKSA9PiB7fSxcbiAgICBpbmZvICA9IGRlYnVnLFxuICAgIHdhcm4gID0gZGVidWc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgW1BST1RFQ1RFRF0gOiB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9XG4gICAgfSxcbiAgICBjb25maWd1cmF0b3IsXG4gICAgcm9vdCxcbiAgICBsb2FkZXIsXG4gICAgZGVidWcsXG4gICAgaW5mbyxcbiAgICB3YXJuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5FTlYgPSB0aGlzLmxvYWQoKTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLmRlYnVnKTtcblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHJvb3QgICAgICAgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyAgICAgICA6IG9wdGlvbmFsKEFycmF5KSxcbiAgICBbUFJPVEVDVEVEXSA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogbG9hZGluZyAnJHt0aGlzLmZpbGVzfScuYCk7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGxvYWRlZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuIl0sImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9