'use strict';

var _createDecoratedClass = require('babel-runtime/helpers/create-decorated-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('source-map-support/register');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _filterObject = require('filter-object');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _nodConsole = require('@nod/console');

var _nodeEnvConfiguration = require('node-env-configuration');

var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

var _decorateThis = require('decorate-this');

var PROTECTED = _Symbol('PROTECTED');

var Environment = (function () {
  function Environment() {
    var _defaults;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Environment);

    this.defaults = (_defaults = {
      files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod']
    }, _defineProperty(_defaults, PROTECTED, {
      ENV: {},
      config: {}
    }), _defineProperty(_defaults, 'configurator', _nodeEnvConfiguration2['default']), _defineProperty(_defaults, 'root', _appRootPath2['default']), _defineProperty(_defaults, 'loader', _dotenv2['default']), _defineProperty(_defaults, 'debug', _nodConsole.debug), _defineProperty(_defaults, 'info', _nodConsole.info), _defineProperty(_defaults, 'warn', _nodConsole.warn), _defaults);

    this.setOptions(options);
    this.ENV = this.load();
    this.config = this.configurator(undefined, undefined, this.debug);

    this.info(this.constructor.name + ': Initialized.');
  }

  _createDecoratedClass(Environment, [{
    key: 'setOptions',
    decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)((0, _decorateThis.Optional)(_defineProperty({
      root: (0, _decorateThis.Optional)(String),
      files: (0, _decorateThis.Optional)(Array)
    }, PROTECTED, (0, _decorateThis.Optional)(Object)))), _autobindDecorator2['default']],
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _Object$assign(this, this.defaults, options);
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
    decorators: [(0, _decorateThis.returns)(Object), _autobindDecorator2['default']],
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
    decorators: [(0, _decorateThis.returns)(Object), _autobindDecorator2['default']],
    value: function getConfig() {
      return this[PROTECTED].config;
    }
  }, {
    key: 'setConfig',
    decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)(Object), _autobindDecorator2['default']],
    value: function setConfig() {
      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _Object$assign(this[PROTECTED].config, config);
      return this.config;
    }
  }, {
    key: 'getJson',
    decorators: [(0, _decorateThis.returns)(String), _autobindDecorator2['default']],
    value: function getJson() {
      var excludes = this.config.EXCLUDE || '';
      excludes = excludes.split(',') || [];
      return JSON.stringify((0, _filterObject2['default'])(this.config, excludes));
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
var environment = new Environment();
exports.environment = environment;
var ENV = environment.ENV;
var config = environment.config;
exports.ENV = ENV;
exports.config = config;

_nodConsole.console.log({ environment: environment });
//# sourceMappingURL=data:application/json;base64,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QUMsRUFEZix5QkFBTSxNQUFNLENBQUM7V0FFTCxxQkFBYztVQUFiLE1BQU0seURBQUcsRUFBRTs7QUFDbkIscUJBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7OztpQkFPQSwyQkFBUSxNQUFNLENBQUM7V0FDVCxtQkFBRztBQUNSLFVBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QyxjQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckMsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLCtCQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUN0RDs7O1NBaENTLGVBQUc7QUFDWCxhQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUN6QjtTQVFTLGVBQVk7QUFDcEIsYUFBTyxJQUFJLENBQUMsU0FBUyxNQUFBLENBQWQsSUFBSSxZQUFxQixDQUFDO0tBQ2xDOzs7U0FVTyxlQUFHO0FBQ1QsYUFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDdkI7OztTQTNGVSxXQUFXOzs7O3FCQXNHVCxXQUFXO0FBQ25CLElBQUksV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7O0lBQzlCLEdBQUcsR0FBYSxXQUFXLENBQTNCLEdBQUc7SUFBRSxNQUFNLEdBQUssV0FBVyxDQUF0QixNQUFNOzs7O0FBQ3hCLG9CQUFRLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBWCxXQUFXLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbG9hZGVyIGZyb20gJ2RvdGVudic7XG5pbXBvcnQgcm9vdCBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IGNvbnNvbGUsIGRlYnVnLCBpbmZvLCB3YXJuIH0gZnJvbSAnQG5vZC9jb25zb2xlJztcbmltcG9ydCBjb25maWd1cmF0b3IgZnJvbSAnbm9kZS1lbnYtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBkZWZhdWx0cyA9IHtcbiAgICBmaWxlcyAgICAgICA6IFtcbiAgICAgICcuZW52LmxvY2FsJyxcbiAgICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICAgJy5lbnYudGVzdCcsXG4gICAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgICAnLmVudicsXG4gICAgICAnLmVudi5ub2QnXG4gICAgXSxcbiAgICBbUFJPVEVDVEVEXSA6IHtcbiAgICAgIEVOViAgICA6IHt9LFxuICAgICAgY29uZmlnIDoge31cbiAgICB9LFxuICAgIGNvbmZpZ3VyYXRvcixcbiAgICByb290LFxuICAgIGxvYWRlcixcbiAgICBkZWJ1ZyxcbiAgICBpbmZvLFxuICAgIHdhcm5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLkVOViA9IHRoaXMubG9hZCgpO1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuZGVidWcpO1xuXG4gICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX06IEluaXRpYWxpemVkLmApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgICAgICAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzICAgICAgIDogb3B0aW9uYWwoQXJyYXkpLFxuICAgIFtQUk9URUNURURdIDogb3B0aW9uYWwoT2JqZWN0KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoU3RyaW5nKVxuICBtYWtlUGF0aChmaWxlID0gJycpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShgJHt0aGlzLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiBsb2FkaW5nICcke3RoaXMuZmlsZXN9Jy5gKTtcbiAgICB0aGlzLmZpbGVzLmZvckVhY2goKGZpbGUpICA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSB0aGlzLm1ha2VQYXRoKGZpbGUpO1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICB0aGlzLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgbG9hZGVkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBjb3VsZCBub3QgZm91bmRgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnY7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0uY29uZmlnO1xuICB9XG5cbiAgc2V0IGNvbmZpZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb25maWcoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLmNvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoU3RyaW5nKVxuICBnZXRKc29uKCkge1xuICAgIGxldCBleGNsdWRlcyA9IHRoaXMuY29uZmlnLkVYQ0xVREUgfHwgJyc7XG4gICAgZXhjbHVkZXMgPSBleGNsdWRlcy5zcGxpdCgnLCcpIHx8IFtdO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmaWx0ZXIodGhpcy5jb25maWcsIGV4Y2x1ZGVzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG5leHBvcnQgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5leHBvcnQgbGV0IHsgRU5WLCBjb25maWcgfSA9IGVudmlyb25tZW50O1xuY29uc29sZS5sb2coeyBlbnZpcm9ubWVudCB9KTtcbiJdfQ==