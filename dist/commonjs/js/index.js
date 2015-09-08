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

var _console = require('console');

var _console2 = _interopRequireDefault(_console);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _filterObject = require('filter-object');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _nodeEnvConfiguration = require('node-env-configuration');

var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

var _decorateThis = require('decorate-this');

var PROTECTED = _Symbol('PROTECTED');

var info = _console2['default'].log.bind(_console2['default']),
    debug = info,
    warn = _console2['default'].error.bind(_console2['default']);

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
    }), _defineProperty(_defaults, 'configurator', _nodeEnvConfiguration2['default']), _defineProperty(_defaults, 'root', _appRootPath2['default']), _defineProperty(_defaults, 'loader', _dotenv2['default']), _defineProperty(_defaults, 'debug', debug), _defineProperty(_defaults, 'info', info), _defineProperty(_defaults, 'warn', warn), _defaults);

    this.setOptions(options);
    this.ENV = this.load();
    this.config = this.configurator(undefined, undefined, this.warn);

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
          _this.warn(_this.constructor.name + '.load: \'' + file + '\' could not loaded');
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
//# sourceMappingURL=data:application/json;base64,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QUFDLENBQUM7QUFDSCxhQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7S0FDcEI7OztpQkFPQSwyQkFBUSxNQUFNLENBQUM7V0FDUCxxQkFBRztBQUNWLGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztLQUMvQjs7O2lCQVFBLDJCQUFRLE1BQU0sQ0FBQyxFQURmLHlCQUFNLE1BQU0sQ0FBQztXQUVMLHFCQUFjO1VBQWIsTUFBTSx5REFBRyxFQUFFOztBQUNuQixxQkFBYyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7O2lCQU9BLDJCQUFRLE1BQU0sQ0FBQztXQUNULG1CQUFHO0FBQ1IsVUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3pDLGNBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNyQyxhQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsK0JBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ3REOzs7U0FoQ1MsZUFBRztBQUNYLGFBQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ3pCO1NBUVMsZUFBWTtBQUNwQixhQUFPLElBQUksQ0FBQyxTQUFTLE1BQUEsQ0FBZCxJQUFJLFlBQXFCLENBQUM7S0FDbEM7OztTQVVPLGVBQUc7QUFDVCxhQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN2Qjs7O1NBM0ZVLFdBQVc7Ozs7cUJBc0dULFdBQVciLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgY29uc29sZSBmcm9tICdjb25zb2xlJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHJvb3QgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgY29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmxldCBpbmZvID0gY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgZGVidWcgPSBpbmZvLFxuICB3YXJuID0gY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGZpbGVzICAgICAgIDogW1xuICAgICAgJy5lbnYubG9jYWwnLFxuICAgICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgICAnLmVudi50ZXN0JyxcbiAgICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAgICcuZW52JyxcbiAgICAgICcuZW52Lm5vZCdcbiAgICBdLFxuICAgIFtQUk9URUNURURdIDoge1xuICAgICAgRU5WICAgIDoge30sXG4gICAgICBjb25maWcgOiB7fVxuICAgIH0sXG4gICAgY29uZmlndXJhdG9yLFxuICAgIHJvb3QsXG4gICAgbG9hZGVyLFxuICAgIGRlYnVnLFxuICAgIGluZm8sXG4gICAgd2FyblxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuRU5WID0gdGhpcy5sb2FkKCk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcy53YXJuKTtcblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHJvb3QgICAgICAgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyAgICAgICA6IG9wdGlvbmFsKEFycmF5KSxcbiAgICBbUFJPVEVDVEVEXSA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogbG9hZGluZyAnJHt0aGlzLmZpbGVzfScuYCk7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGxvYWRlZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2FybihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBjb3VsZCBub3QgbG9hZGVkYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuIl19