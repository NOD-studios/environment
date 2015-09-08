'use strict';

var _createDecoratedClass = require('babel-runtime/helpers/create-decorated-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Symbol = require('babel-runtime/core-js/symbol')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

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

var _nodeEnvConfiguration = require('node-env-configuration');

var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

var _decorateThis = require('decorate-this');

var debug = function debug() {},
    info = debug,
    warn = debug;

var PROTECTED = _Symbol('PROTECTED');

var Environment = (function () {
  var _optional;

  function Environment() {
    var _defaults;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Environment);

    this.defaults = (_defaults = {
      files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod']
    }, _defaults[PROTECTED] = {
      ENV: {},
      config: {}
    }, _defaults.configurator = _nodeEnvConfiguration2['default'], _defaults.root = _appRootPath2['default'], _defaults.loader = _dotenv2['default'], _defaults.debug = debug, _defaults.info = info, _defaults.warn = warn, _defaults);

    this.setOptions(options);
    this.ENV = this.load();
    this.config = this.configurator(undefined, undefined, this.debug);

    this.info(this.constructor.name + ': Initialized.');
  }

  _createDecoratedClass(Environment, [{
    key: 'setOptions',
    decorators: [_decorateThis.returns(Object), _decorateThis.param(_decorateThis.Optional((_optional = {
      root: _decorateThis.Optional(String),
      files: _decorateThis.Optional(Array)
    }, _optional[PROTECTED] = _decorateThis.Optional(Object), _optional))), _autobindDecorator2['default']],
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _Object$assign(this, this.defaults, options);
    }
  }, {
    key: 'makePath',
    decorators: [_decorateThis.returns(String), _decorateThis.param(String)],
    value: function makePath() {
      var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      return _path2['default'].join(_path2['default'].resolve('' + this.root), '' + file);
    }
  }, {
    key: 'load',
    decorators: [_decorateThis.returns(Object), _autobindDecorator2['default']],
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
    decorators: [_decorateThis.returns(Object), _autobindDecorator2['default']],
    value: function getConfig() {
      return this[PROTECTED].config;
    }
  }, {
    key: 'setConfig',
    decorators: [_decorateThis.returns(Object), _decorateThis.param(Object), _autobindDecorator2['default']],
    value: function setConfig() {
      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _Object$assign(this[PROTECTED].config, config);
      return this.config;
    }
  }, {
    key: 'getJson',
    decorators: [_decorateThis.returns(String), _autobindDecorator2['default']],
    value: function getJson() {
      var excludes = this.config.EXCLUDE || '';
      excludes = excludes.split(',') || [];
      return JSON.stringify(_filterObject2['default'](this.config, excludes));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdXJrYW50dW5hbGkvU2l0ZXMvX1NhbmRib3gvTk9EL2Vudmlyb25tZW50L3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztRQUFPLDZCQUE2Qjs7b0JBQ25CLE1BQU07Ozs7c0JBQ0osUUFBUTs7OzsyQkFDVixlQUFlOzs7OzRCQUNiLGVBQWU7Ozs7aUNBQ2Isb0JBQW9COzs7O29DQUNoQix3QkFBd0I7Ozs7NEJBQ0ksZUFBZTs7QUFFcEUsSUFBSSxLQUFLLEdBQUcsU0FBUixLQUFLLEdBQVMsRUFBRTtJQUNoQixJQUFJLEdBQUksS0FBSztJQUNiLElBQUksR0FBSSxLQUFLLENBQUM7O0FBRWxCLElBQU0sU0FBUyxHQUFHLFFBQU8sV0FBVyxDQUFDLENBQUM7O0lBRXpCLFdBQVc7OztBQXVCWCxXQXZCQSxXQUFXLEdBdUJJOzs7UUFBZCxPQUFPLHlEQUFHLEVBQUU7OzBCQXZCYixXQUFXOztTQUV0QixRQUFRO0FBQ04sV0FBSyxFQUFTLENBQ1osWUFBWSxFQUNaLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixVQUFVLENBQ1g7aUJBQ0EsU0FBUyxJQUFJO0FBQ1osU0FBRyxFQUFNLEVBQUU7QUFDWCxZQUFNLEVBQUcsRUFBRTtLQUNaLFlBQ0QsWUFBWSxnREFDWixJQUFJLHVDQUNKLE1BQU0sa0NBQ04sS0FBSyxHQUFMLEtBQUssWUFDTCxJQUFJLEdBQUosSUFBSSxZQUNKLElBQUksR0FBSixJQUFJOztBQUlKLFFBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekIsUUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdkIsUUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsRSxRQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxvQkFBaUIsQ0FBQztHQUNyRDs7d0JBN0JVLFdBQVc7O2lCQXFDckIsc0JBQVEsTUFBTSxDQUFDLEVBTGYsb0JBQU07QUFDTCxVQUFJLEVBQVUsdUJBQVMsTUFBTSxDQUFDO0FBQzlCLFdBQUssRUFBUyx1QkFBUyxLQUFLLENBQUM7aUJBQzVCLFNBQVMsSUFBSSx1QkFBUyxNQUFNLENBQUMsYUFDOUIsQ0FBQztXQUVPLHNCQUFlO1VBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQixhQUFPLGVBQWMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDcEQ7OztpQkFHQSxzQkFBUSxNQUFNLENBQUMsRUFEZixvQkFBTSxNQUFNLENBQUM7V0FFTixvQkFBWTtVQUFYLElBQUkseURBQUcsRUFBRTs7QUFDaEIsYUFBTyxrQkFBSyxJQUFJLENBQUMsa0JBQUssT0FBTyxNQUFJLElBQUksQ0FBQyxJQUFJLENBQUcsT0FBSyxJQUFJLENBQUcsQ0FBQztLQUMzRDs7O2lCQUdBLHNCQUFRLE1BQU0sQ0FBQztXQUNaLGdCQUFHOzs7QUFDTCxVQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSx5QkFBbUIsSUFBSSxDQUFDLEtBQUssU0FBSyxDQUFDO0FBQ3RFLFVBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFNO0FBQzVCLFlBQUksUUFBUSxHQUFHLE1BQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLFlBQUksTUFBTSxHQUFHLE1BQUssTUFBTSxDQUFDLElBQUksQ0FBQztBQUM1QixnQkFBTSxFQUFHLElBQUk7QUFDYixjQUFJLEVBQUcsUUFBUTtTQUNoQixDQUFDLENBQUM7QUFDSCxZQUFJLE1BQU0sRUFBRTtBQUNWLGdCQUFLLElBQUksQ0FBSSxNQUFLLFdBQVcsQ0FBQyxJQUFJLGlCQUFXLElBQUksZ0JBQVksQ0FBQztTQUMvRCxNQUFNO0FBQ0wsZ0JBQUssS0FBSyxDQUFJLE1BQUssV0FBVyxDQUFDLElBQUksaUJBQVcsSUFBSSx3QkFBb0IsQ0FBQztTQUN4RTtPQUNGLENBQUMsQ0FBQztBQUNILGFBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztLQUNwQjs7O2lCQU9BLHNCQUFRLE1BQU0sQ0FBQztXQUNQLHFCQUFHO0FBQ1YsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQy9COzs7aUJBUUEsc0JBQVEsTUFBTSxDQUFDLEVBRGYsb0JBQU0sTUFBTSxDQUFDO1dBRUwscUJBQWM7VUFBYixNQUFNLHlEQUFHLEVBQUU7O0FBQ25CLHFCQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsYUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7aUJBT0Esc0JBQVEsTUFBTSxDQUFDO1dBQ1QsbUJBQUc7QUFDUixVQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDekMsY0FBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JDLGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQywwQkFBTyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7OztTQWhDUyxlQUFHO0FBQ1gsYUFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDekI7U0FRUyxlQUFZO0FBQ3BCLGFBQU8sSUFBSSxDQUFDLFNBQVMsTUFBQSxDQUFkLElBQUksWUFBcUIsQ0FBQztLQUNsQzs7O1NBVU8sZUFBRztBQUNULGFBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZCOzs7U0EzRlUsV0FBVzs7OztxQkFzR1QsV0FBVyIsImZpbGUiOiIvVXNlcnMvZnVya2FudHVuYWxpL1NpdGVzL19TYW5kYm94L05PRC9lbnZpcm9ubWVudC9zcmMvanMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCByb290IGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5sZXQgZGVidWcgPSAoKSA9PiB7fSxcbiAgICBpbmZvICA9IGRlYnVnLFxuICAgIHdhcm4gID0gZGVidWc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgZGVmYXVsdHMgPSB7XG4gICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAnLmVudi5sb2NhbCcsXG4gICAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAgICcuZW52LnRlc3QnLFxuICAgICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICAgJy5lbnYnLFxuICAgICAgJy5lbnYubm9kJ1xuICAgIF0sXG4gICAgW1BST1RFQ1RFRF0gOiB7XG4gICAgICBFTlYgICAgOiB7fSxcbiAgICAgIGNvbmZpZyA6IHt9XG4gICAgfSxcbiAgICBjb25maWd1cmF0b3IsXG4gICAgcm9vdCxcbiAgICBsb2FkZXIsXG4gICAgZGVidWcsXG4gICAgaW5mbyxcbiAgICB3YXJuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5FTlYgPSB0aGlzLmxvYWQoKTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLmRlYnVnKTtcblxuICAgIHRoaXMuaW5mbyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9OiBJbml0aWFsaXplZC5gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoe1xuICAgIHJvb3QgICAgICAgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyAgICAgICA6IG9wdGlvbmFsKEFycmF5KSxcbiAgICBbUFJPVEVDVEVEXSA6IG9wdGlvbmFsKE9iamVjdClcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLmRlYnVnKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogbG9hZGluZyAnJHt0aGlzLmZpbGVzfScuYCk7XG4gICAgdGhpcy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDogJyR7ZmlsZX0nIGxvYWRlZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuIl19