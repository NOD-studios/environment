define(['exports', 'module', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/define-property', 'babel-runtime/core-js/symbol', 'babel-runtime/core-js/object/assign', 'source-map-support/register', 'console', 'babel-runtime/helpers/interop-require-default', 'dotenv', 'path', 'app-root-path', 'filter-object', 'autobind-decorator', 'node-env-configuration', 'decorate-this'], function (exports, module, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeHelpersDefineProperty, _babelRuntimeCoreJsSymbol, _babelRuntimeCoreJsObjectAssign, _sourceMapSupportRegister, _console, _babelRuntimeHelpersInteropRequireDefault, _dotenv, _path, _appRootPath, _filterObject, _autobindDecorator, _nodeEnvConfiguration, _decorateThis) {
  'use strict';

  var _console2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_console);

  var _loader = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_dotenv);

  var _path2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_path);

  var _root = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_appRootPath);

  var _filter = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_filterObject);

  var _autobind = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_autobindDecorator);

  var _configurator = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_nodeEnvConfiguration);

  var PROTECTED = (0, _babelRuntimeCoreJsSymbol['default'])('PROTECTED');

  var info = _console2['default'].log.bind(_console2['default']),
      debug = info,
      warn = _console2['default'].error.bind(_console2['default']);

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
      this.config = this.configurator(undefined, undefined, this.warn);

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
            _this.warn(_this.constructor.name + '.load: \'' + file + '\' could not loaded');
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

  module.exports = Environment;
});
//# sourceMappingURL=data:application/json;base64,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TyxPQUFPLENBQUMsR0FBRyxDQUFDO09BQ3BCOzs7bUJBT0Esa0JBaEZhLE9BQU8sRUFnRlosTUFBTSxDQUFDO2FBQ1AscUJBQUc7QUFDVixlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7T0FDL0I7OzttQkFRQSxrQkEzRmEsT0FBTyxFQTJGWixNQUFNLENBQUMsRUFEZixrQkExRk0sS0FBSyxFQTBGTCxNQUFNLENBQUM7YUFFTCxxQkFBYztZQUFiLE1BQU0seURBQUcsRUFBRTs7QUFDbkIsd0RBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxlQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7T0FDcEI7OzttQkFPQSxrQkF0R2EsT0FBTyxFQXNHWixNQUFNLENBQUM7YUFDVCxtQkFBRztBQUNSLFlBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QyxnQkFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JDLGVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBTyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7T0FDdEQ7OztXQWhDUyxlQUFHO0FBQ1gsZUFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7T0FDekI7V0FRUyxlQUFZO0FBQ3BCLGVBQU8sSUFBSSxDQUFDLFNBQVMsTUFBQSxDQUFkLElBQUksWUFBcUIsQ0FBQztPQUNsQzs7O1dBVU8sZUFBRztBQUNULGVBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO09BQ3ZCOztXQTNGa0IsV0FBVzs7O21CQUFYLFdBQVciLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgY29uc29sZSBmcm9tICdjb25zb2xlJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgY29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmxldCBpbmZvID0gY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgZGVidWcgPSBpbmZvLFxuICB3YXJuID0gY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgW1BST1RFQ1RFRF0gOiB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9XG4gICAgfSxcbiAgICBjb25maWd1cmF0b3IsXG4gICAgcm9vdCxcbiAgICBsb2FkZXIsXG4gICAgZGVidWcsXG4gICAgaW5mbyxcbiAgICB3YXJuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5FTlYgPSB0aGlzLmxvYWQoKTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLndhcm4pO1xuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgICAgICAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzICAgICAgIDogb3B0aW9uYWwoQXJyYXkpLFxuICAgIFtQUk9URUNURURdIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoU3RyaW5nKVxuICBtYWtlUGF0aChmaWxlID0gJycpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShgJHt0aGlzLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiBsb2FkaW5nICcke3RoaXMuZmlsZXN9Jy5gKTtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUpICA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSB0aGlzLm1ha2VQYXRoKGZpbGUpO1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgbG9hZGVkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGNvdWxkIG5vdCBsb2FkZWRgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnY7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0uY29uZmlnO1xuICB9XG5cbiAgc2V0IGNvbmZpZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb25maWcoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLmNvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRKc29uKCkge1xuICAgIGxldCBleGNsdWRlcyA9IHRoaXMuY29uZmlnLkVYQ0xVREUgfHwgJyc7XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcy5zcGxpdCgnLCcpIHx8IFtdO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmaWx0ZXIodGhpcy5jb25maWcsIGV4Y2x1ZGVzKSk7XG4gIH1cbn1cbiJdfQ==