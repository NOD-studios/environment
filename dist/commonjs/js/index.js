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

exports['default'] = Environment;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,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LENBQUMsQ0FBQztBQUNILGFBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztLQUNwQjs7O2lCQU9BLDJCQUFRLE1BQU0sQ0FBQztXQUNQLHFCQUFHO0FBQ1YsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQy9COzs7aUJBUUEsMkJBQVEsTUFBTSxDQUFDLEVBRGYseUJBQU0sTUFBTSxDQUFDO1dBRUwscUJBQWM7VUFBYixNQUFNLHlEQUFHLEVBQUU7O0FBQ25CLHFCQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsYUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7aUJBT0EsMkJBQVEsTUFBTSxDQUFDO1dBQ1QsbUJBQUc7QUFDUixVQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDekMsY0FBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JDLGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQywrQkFBTyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7OztTQWhDUyxlQUFHO0FBQ1gsYUFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDekI7U0FRUyxlQUFZO0FBQ3BCLGFBQU8sSUFBSSxDQUFDLFNBQVMsTUFBQSxDQUFkLElBQUksWUFBcUIsQ0FBQztLQUNsQzs7O1NBVU8sZUFBRztBQUNULGFBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZCOzs7U0EzRmtCLFdBQVc7OztxQkFBWCxXQUFXIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IGNvbnNvbGUgZnJvbSAnY29uc29sZSc7XG5pbXBvcnQgbG9hZGVyIGZyb20gJ2RvdGVudic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCByb290IGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5sZXQgaW5mbyA9IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gIGRlYnVnID0gaW5mbyxcbiAgd2FybiA9IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIGZpbGVzICAgICAgIDogW1xuICAgICAgJy5lbnYubG9jYWwnLFxuICAgICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgICAnLmVudi50ZXN0JyxcbiAgICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAgICcuZW52JyxcbiAgICAgICcuZW52Lm5vZCdcbiAgICBdLFxuICAgIFtQUk9URUNURURdIDoge1xuICAgICAgRU5WICAgIDoge30sXG4gICAgICBjb25maWcgOiB7fVxuICAgIH0sXG4gICAgY29uZmlndXJhdG9yLFxuICAgIHJvb3QsXG4gICAgbG9hZGVyLFxuICAgIGRlYnVnLFxuICAgIGluZm8sXG4gICAgd2FyblxuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMuRU5WID0gdGhpcy5sb2FkKCk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcy53YXJuKTtcblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHJvb3QgICAgICAgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyAgICAgICA6IG9wdGlvbmFsKEFycmF5KSxcbiAgICBbUFJPVEVDVEVEXSA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogbG9hZGluZyAnJHt0aGlzLmZpbGVzfScuYCk7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGxvYWRlZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2FybihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6ICcke2ZpbGV9JyBjb3VsZCBub3QgbG9hZGVkYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG59XG4iXX0=