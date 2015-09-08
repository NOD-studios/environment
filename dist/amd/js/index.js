define(['exports', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'path', 'babel-runtime/helpers/interop-require-default', 'dotenv', 'app-root-path', 'filter-object', 'autobind-decorator', 'node-env-configuration', 'decorate-this'], function (exports, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeHelpersDefineProperty, _babelRuntimeCoreJsSymbol, _babelRuntimeCoreJsObjectAssign, _sourceMapSupportRegister, _path, _babelRuntimeHelpersInteropRequireDefault, _dotenv, _appRootPath, _filterObject, _autobindDecorator, _nodeEnvConfiguration, _decorateThis) {
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

  var debug = function debug() {},
      info = debug,
      warn = debug;

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
  exports['default'] = Environment;
});
//# sourceMappingURL=data:application/json;base64,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O21CQU9BLGtCQWhGYSxPQUFPLEVBZ0ZaLE1BQU0sQ0FBQzthQUNQLHFCQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO09BQy9COzs7bUJBUUEsa0JBM0ZhLE9BQU8sRUEyRlosTUFBTSxDQUFDLEVBRGYsa0JBMUZNLEtBQUssRUEwRkwsTUFBTSxDQUFDO2FBRUwscUJBQWM7WUFBYixNQUFNLHlEQUFHLEVBQUU7O0FBQ25CLHdEQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsZUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO09BQ3BCOzs7bUJBT0Esa0JBdEdhLE9BQU8sRUFzR1osTUFBTSxDQUFDO2FBQ1QsbUJBQUc7QUFDUixZQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDekMsZ0JBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNyQyxlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO09BQ3REOzs7V0FoQ1MsZUFBRztBQUNYLGVBQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO09BQ3pCO1dBUVMsZUFBWTtBQUNwQixlQUFPLElBQUksQ0FBQyxTQUFTLE1BQUEsQ0FBZCxJQUFJLFlBQXFCLENBQUM7T0FDbEM7OztXQVVPLGVBQUc7QUFDVCxlQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztPQUN2Qjs7V0EzRlUsV0FBVzs7Ozt1QkFzR1QsV0FBVyIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgY29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmxldCBkZWJ1ZyA9ICgpID0+IHt9LFxuICAgIGluZm8gID0gZGVidWcsXG4gICAgd2FybiAgPSBkZWJ1ZztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBmaWxlcyAgICAgICA6IFtcbiAgICAgICcuZW52LmxvY2FsJyxcbiAgICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICAgJy5lbnYudGVzdCcsXG4gICAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgICAnLmVudicsXG4gICAgICAnLmVudi5ub2QnXG4gICAgXSxcbiAgICBbUFJPVEVDVEVEXSA6IHtcbiAgICAgIEVOViAgICA6IHt9LFxuICAgICAgY29uZmlnIDoge31cbiAgICB9LFxuICAgIGNvbmZpZ3VyYXRvcixcbiAgICByb290LFxuICAgIGxvYWRlcixcbiAgICBkZWJ1ZyxcbiAgICBpbmZvLFxuICAgIHdhcm5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLkVOViA9IHRoaXMubG9hZCgpO1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuZGVidWcpO1xuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgICAgICAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzICAgICAgIDogb3B0aW9uYWwoQXJyYXkpLFxuICAgIFtQUk9URUNURURdIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoU3RyaW5nKVxuICBtYWtlUGF0aChmaWxlID0gJycpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShgJHt0aGlzLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiBsb2FkaW5nICcke3RoaXMuZmlsZXN9Jy5gKTtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUpICA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSB0aGlzLm1ha2VQYXRoKGZpbGUpO1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgbG9hZGVkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBjb3VsZCBub3QgZm91bmRgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnY7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0uY29uZmlnO1xuICB9XG5cbiAgc2V0IGNvbmZpZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb25maWcoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLmNvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRKc29uKCkge1xuICAgIGxldCBleGNsdWRlcyA9IHRoaXMuY29uZmlnLkVYQ0xVREUgfHwgJyc7XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcy5zcGxpdCgnLCcpIHx8IFtdO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmaWx0ZXIodGhpcy5jb25maWcsIGV4Y2x1ZGVzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXX0=
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCByb290IGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5sZXQgZGVidWcgPSAoKSA9PiB7fSxcbiAgICBpbmZvICA9IGRlYnVnLFxuICAgIHdhcm4gID0gZGVidWc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgW1BST1RFQ1RFRF0gOiB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9XG4gICAgfSxcbiAgICBjb25maWd1cmF0b3IsXG4gICAgcm9vdCxcbiAgICBsb2FkZXIsXG4gICAgZGVidWcsXG4gICAgaW5mbyxcbiAgICB3YXJuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5FTlYgPSB0aGlzLmxvYWQoKTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLmRlYnVnKTtcblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHJvb3QgICAgICAgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyAgICAgICA6IG9wdGlvbmFsKEFycmF5KSxcbiAgICBbUFJPVEVDVEVEXSA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogbG9hZGluZyAnJHt0aGlzLmZpbGVzfScuYCk7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGxvYWRlZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuIl0sImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9