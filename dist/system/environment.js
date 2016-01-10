System.register(['babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'path', 'console', 'dotenv', 'filter-object', 'autobind-decorator', 'node-env-configuration', 'decorate-this'], function (_export) {
  var _createDecoratedClass, _classCallCheck, _Symbol, _Object$assign, path, console, loader, filter, autobind, configurator, param, returns, optional, PROTECTED, Environment;

  return {
    setters: [function (_babelRuntimeHelpersCreateDecoratedClass) {
      _createDecoratedClass = _babelRuntimeHelpersCreateDecoratedClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_babelRuntimeCoreJsSymbol) {
      _Symbol = _babelRuntimeCoreJsSymbol['default'];
    }, function (_babelRuntimeCoreJsObjectAssign) {
      _Object$assign = _babelRuntimeCoreJsObjectAssign['default'];
    }, function (_sourceMapSupportRegister) {}, function (_path) {
      path = _path['default'];
    }, function (_console) {
      console = _console['default'];
    }, function (_dotenv) {
      loader = _dotenv['default'];
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

      Environment = (function () {
        _createDecoratedClass(Environment, [{
          key: 'setOptions',
          decorators: [returns(Object), param(optional({
            root: optional(String),
            files: optional(Array)
          })), autobind],
          value: function setOptions() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            return _Object$assign(this[PROTECTED].options, this.defaults, options);
          }
        }, {
          key: 'makePath',
          decorators: [returns(String), param(String)],
          value: function makePath() {
            var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            return path.join(path.resolve('' + this.options.root), '' + file);
          }
        }, {
          key: 'load',
          decorators: [returns(Object), autobind],
          value: function load() {
            var _this = this;

            this.options.files.forEach(function (file) {
              var filePath = _this.makePath(file);
              var status = _this.options.loader.load({
                silent: true,
                path: filePath
              });
              if (!status && _this.options.silent !== true) {
                console.warn(_this.constructor.name + '.load: \'' + file + '\' could not found at path: ' + filePath);
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

          _classCallCheck(this, Environment);

          this.defaults = {
            silent: true,
            files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'],
            root: path.dirname(require.main.filename),
            configurator: configurator,
            loader: loader
          };

          this[PROTECTED] = this[PROTECTED] || {
            ENV: {},
            config: {},
            options: {}
          };

          this.options = options;
          this.ENV = this.load();

          var warn = this.options.silent !== true ? console.warn.bind(console) : function () {};
          this.config = this.options.configurator(undefined, undefined, warn);
        }

        return Environment;
      })();

      _export('Environment', Environment);

      _export('default', Environment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNyRTs7ZUF2R1UsV0FBVzs7Ozs7eUJBMEdULFdBQVciLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBjb25zb2xlIGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIHNpbGVudCAgICAgIDogdHJ1ZSxcbiAgICBmaWxlcyAgICAgICA6IFtcbiAgICAgICcuZW52LmxvY2FsJyxcbiAgICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICAgJy5lbnYudGVzdCcsXG4gICAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgICAnLmVudicsXG4gICAgICAnLmVudi5ub2QnXG4gICAgXSxcbiAgICByb290IDogcGF0aC5kaXJuYW1lKHJlcXVpcmUubWFpbi5maWxlbmFtZSksXG4gICAgY29uZmlndXJhdG9yLFxuICAgIGxvYWRlclxuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgICAgICAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzICAgICAgIDogb3B0aW9uYWwoQXJyYXkpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLm9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5vcHRpb25zLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMub3B0aW9ucy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLm9wdGlvbnMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKCFzdGF0dXMgJiYgdGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kIGF0IHBhdGg6ICR7ZmlsZVBhdGh9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpc1tQUk9URUNURURdID0gdGhpc1tQUk9URUNURURdIHx8IHtcbiAgICAgIEVOViAgICA6IHt9LFxuICAgICAgY29uZmlnIDoge30sXG4gICAgICBvcHRpb25zIDoge31cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLkVOViA9IHRoaXMubG9hZCgpO1xuXG4gICAgbGV0IHdhcm4gPSAodGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkgPyBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSA6IGZ1bmN0aW9uKCkge307XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB3YXJuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnZpcm9ubWVudDtcbiJdfQ==