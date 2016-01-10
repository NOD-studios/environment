'use strict';

var _createDecoratedClass = require('babel-runtime/helpers/create-decorated-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

require('source-map-support/register');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _console = require('console');

var _console2 = _interopRequireDefault(_console);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _filterObject = require('filter-object');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _nodeEnvConfiguration = require('node-env-configuration');

var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

var _decorateThis = require('decorate-this');

var PROTECTED = _Symbol('PROTECTED');

var Environment = (function () {
  _createDecoratedClass(Environment, [{
    key: 'setOptions',
    decorators: [(0, _decorateThis.returns)(Object), (0, _decorateThis.param)((0, _decorateThis.Optional)({
      root: (0, _decorateThis.Optional)(String),
      files: (0, _decorateThis.Optional)(Array)
    })), _autobindDecorator2['default']],
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _Object$assign(this[PROTECTED].options, this.defaults, options);
    }
  }, {
    key: 'makePath',
    decorators: [(0, _decorateThis.returns)(String), (0, _decorateThis.param)(String)],
    value: function makePath() {
      var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      return _path2['default'].join(_path2['default'].resolve('' + this.options.root), '' + file);
    }
  }, {
    key: 'load',
    decorators: [(0, _decorateThis.returns)(Object), _autobindDecorator2['default']],
    value: function load() {
      var _this = this;

      this.options.files.forEach(function (file) {
        var filePath = _this.makePath(file);
        var status = _this.options.loader.load({
          silent: true,
          path: filePath
        });
        if (!status && _this.options.silent !== true) {
          _console2['default'].warn(_this.constructor.name + '.load: \'' + file + '\' could not found at path: ' + filePath);
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
      root: _path2['default'].dirname(require.main.filename),
      configurator: _nodeEnvConfiguration2['default'],
      loader: _dotenv2['default']
    };

    this[PROTECTED] = this[PROTECTED] || {
      ENV: {},
      config: {},
      options: {}
    };

    this.options = options;
    this.ENV = this.load();

    var warn = this.options.silent !== true ? _console2['default'].warn.bind(_console2['default']) : function () {};
    this.config = this.options.configurator(undefined, undefined, warn);
  }

  return Environment;
})();

exports.Environment = Environment;
exports['default'] = Environment;
//# sourceMappingURL=data:application/json;base64,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aWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBjb25zb2xlIGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IGxvYWRlciBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIGRlZmF1bHRzID0ge1xuICAgIHNpbGVudCAgICAgIDogdHJ1ZSxcbiAgICBmaWxlcyAgICAgICA6IFtcbiAgICAgICcuZW52LmxvY2FsJyxcbiAgICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICAgJy5lbnYudGVzdCcsXG4gICAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgICAnLmVudicsXG4gICAgICAnLmVudi5ub2QnXG4gICAgXSxcbiAgICByb290IDogcGF0aC5kaXJuYW1lKHJlcXVpcmUubWFpbi5maWxlbmFtZSksXG4gICAgY29uZmlndXJhdG9yLFxuICAgIGxvYWRlclxuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5vcHRpb25zO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgICAgICAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzICAgICAgIDogb3B0aW9uYWwoQXJyYXkpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLm9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0IG9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5vcHRpb25zLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMub3B0aW9ucy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLm9wdGlvbnMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKCFzdGF0dXMgJiYgdGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kIGF0IHBhdGg6ICR7ZmlsZVBhdGh9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpc1tQUk9URUNURURdID0gdGhpc1tQUk9URUNURURdIHx8IHtcbiAgICAgIEVOViAgICA6IHt9LFxuICAgICAgY29uZmlnIDoge30sXG4gICAgICBvcHRpb25zIDoge31cbiAgICB9O1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLkVOViA9IHRoaXMubG9hZCgpO1xuXG4gICAgbGV0IHdhcm4gPSAodGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkgPyBjb25zb2xlLndhcm4uYmluZChjb25zb2xlKSA6IGZ1bmN0aW9uKCkge307XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLm9wdGlvbnMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB3YXJuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnZpcm9ubWVudDtcbiJdfQ==