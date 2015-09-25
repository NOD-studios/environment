System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'path', 'dotenv', 'filter-object', 'autobind-decorator', '@nod/console/instance', 'node-env-configuration', 'decorate-this'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _defineProperty, _Symbol, _Object$assign, path, loader, filter, autobind, debug, info, warn, configurator, param, returns, optional, PROTECTED, Environment;

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
    }, function (_filterObject) {
      filter = _filterObject['default'];
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator['default'];
    }, function (_nodConsoleInstance) {
      debug = _nodConsoleInstance.debug;
      info = _nodConsoleInstance.info;
      warn = _nodConsoleInstance.warn;
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
          }), _defineProperty(_defaults, 'root', path.dirname(require.main.filename)), _defineProperty(_defaults, 'configurator', configurator), _defineProperty(_defaults, 'loader', loader), _defineProperty(_defaults, 'debug', debug), _defineProperty(_defaults, 'info', info), _defineProperty(_defaults, 'warn', warn), _defaults);

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
//# sourceMappingURL=data:application/json;base64,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eEU7YUFDRixDQUFDLENBQUM7QUFDSCxtQkFBTyxPQUFPLENBQUMsR0FBRyxDQUFDO1dBQ3BCOzs7dUJBT0EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQURmLFFBQVE7aUJBRUEscUJBQUc7QUFDVixtQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO1dBQy9COzs7dUJBUUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQURmLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFEYixRQUFRO2lCQUdBLHFCQUFjO2dCQUFiLE1BQU0seURBQUcsRUFBRTs7QUFDbkIsMkJBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1dBQ3BCOzs7dUJBT0EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQURmLFFBQVE7aUJBRUYsbUJBQUc7QUFDUixnQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3pDLG9CQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckMsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1dBQ3REOzs7ZUFoQ1MsZUFBRztBQUNYLG1CQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztXQUN6QjtlQVFTLGVBQVk7QUFDcEIsbUJBQU8sSUFBSSxDQUFDLFNBQVMsTUFBQSxDQUFkLElBQUksWUFBcUIsQ0FBQztXQUNsQzs7O2VBVU8sZUFBRztBQUNULG1CQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztXQUN2Qjs7O2VBM0ZVLFdBQVc7Ozs7O3lCQXNHVCxXQUFXIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbG9hZGVyIGZyb20gJ2RvdGVudic7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgeyBkZWJ1ZywgaW5mbywgd2FybiB9IGZyb20gJ0Bub2QvY29uc29sZS9pbnN0YW5jZSc7XG5pbXBvcnQgY29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgW1BST1RFQ1RFRF0gOiB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9XG4gICAgfSxcbiAgICByb290IDogcGF0aC5kaXJuYW1lKHJlcXVpcmUubWFpbi5maWxlbmFtZSksXG4gICAgY29uZmlndXJhdG9yLFxuICAgIGxvYWRlcixcbiAgICBkZWJ1ZyxcbiAgICBpbmZvLFxuICAgIHdhcm5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLkVOViA9IHRoaXMubG9hZCgpO1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuZGVidWcpO1xuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgICAgICAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzICAgICAgIDogb3B0aW9uYWwoQXJyYXkpLFxuICAgIFtQUk9URUNURURdIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoU3RyaW5nKVxuICBtYWtlUGF0aChmaWxlID0gJycpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShgJHt0aGlzLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiBsb2FkaW5nICcke3RoaXMuZmlsZXN9Jy5gKTtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUpICA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSB0aGlzLm1ha2VQYXRoKGZpbGUpO1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgbG9hZGVkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBjb3VsZCBub3QgZm91bmRgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnY7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0uY29uZmlnO1xuICB9XG5cbiAgc2V0IGNvbmZpZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb25maWcoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLmNvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRKc29uKCkge1xuICAgIGxldCBleGNsdWRlcyA9IHRoaXMuY29uZmlnLkVYQ0xVREUgfHwgJyc7XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcy5zcGxpdCgnLCcpIHx8IFtdO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmaWx0ZXIodGhpcy5jb25maWcsIGV4Y2x1ZGVzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXX0=