'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _class;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Environment = undefined;

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

var _base = require('@nod/base');

var _nodeEnvConfiguration = require('node-env-configuration');

var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

var _decorateThis = require('decorate-this');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var PROTECTED = Symbol('PROTECTED');

var Environment = exports.Environment = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
  root: (0, _decorateThis.Optional)(String),
  files: (0, _decorateThis.Optional)(Array)
})), _dec2 = (0, _decorateThis.returns)(Object), _dec3 = (0, _decorateThis.param)(String), _dec4 = (0, _decorateThis.returns)(String), _dec5 = (0, _decorateThis.returns)(Object), _dec6 = (0, _decorateThis.returns)(Object), _dec7 = (0, _decorateThis.param)(Object), _dec8 = (0, _decorateThis.returns)(Object), _dec9 = (0, _decorateThis.returns)(String), (_class = function (_Base) {
  _inherits(Environment, _Base);

  _createClass(Environment, [{
    key: 'setOptions',
    value: function setOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _get(Object.getPrototypeOf(Environment.prototype), 'setOptions', this).call(this, options);
    }
  }, {
    key: 'makePath',
    value: function makePath() {
      var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      return _path2.default.join(_path2.default.resolve('' + this.options.root), '' + file);
    }
  }, {
    key: 'load',
    value: function load() {
      var _this2 = this;

      this.options.files.forEach(function (file) {
        var filePath = _this2.makePath(file);
        var status = _this2.options.loader.load({
          silent: true,
          path: filePath
        });
        if (!status && _this2.options.silent !== true) {
          _console2.default.warn(_this2.constructor.name + '.load: \'' + file + '\' could not found at path: ' + filePath);
        }
      });
      return process.env;
    }
  }, {
    key: 'getConfig',
    value: function getConfig() {
      return this[PROTECTED].config;
    }
  }, {
    key: 'setConfig',
    value: function setConfig() {
      var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      Object.assign(this[PROTECTED].config, config);
      return this.config;
    }
  }, {
    key: 'getJson',
    value: function getJson() {
      var excludes = this.config.EXCLUDE || '';
      excludes = excludes.split(',') || [];
      return JSON.stringify((0, _filterObject2.default)(this.config, excludes));
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Environment).call(this, options, {
      silent: true,
      files: ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'],
      root: _path2.default.dirname(require.main.filename),
      configurator: _nodeEnvConfiguration2.default,
      loader: _dotenv2.default
    }));

    _this[PROTECTED] = _this[PROTECTED] || {};

    Object.assign(_this[PROTECTED], {
      ENV: {},
      config: {}
    });

    _this.ENV = _this.load();

    var warn = _this.options.silent !== true ? _console2.default.warn.bind(_console2.default) : function () {};
    _this.config = _this.options.configurator(undefined, undefined, warn);
    return _this;
  }

  return Environment;
}(_base.Base), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'makePath', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'makePath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'load', [_autobindDecorator2.default, _dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'load'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getConfig', [_autobindDecorator2.default, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'getConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setConfig', [_autobindDecorator2.default, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'setConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getJson', [_autobindDecorator2.default, _dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'getJson'), _class.prototype)), _class));
exports.default = Environment;
//# sourceMappingURL=data:application/json;base64,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LGFBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZCOzs7QUFVRCxXQXBFVyxXQUFXLEdBb0VJO1FBQWQsT0FBTyx5REFBRyxFQUFFOzswQkFwRWIsV0FBVzs7dUVBQVgsV0FBVyxhQXFFZCxPQUFPLEVBQUU7QUFDYixZQUFNLEVBQVEsSUFBSTtBQUNsQixXQUFLLEVBQVMsQ0FDWixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsTUFBTSxFQUNOLFVBQVUsQ0FDWDtBQUNELFVBQUksRUFBRyxlQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMxQyxrQkFBWSxnQ0FBQTtBQUNaLFlBQU0sa0JBQUE7S0FDUDs7QUFFRCxVQUFLLFNBQVMsQ0FBQyxHQUFHLE1BQUssU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUV4QyxVQUFNLENBQUMsTUFBTSxDQUFDLE1BQUssU0FBUyxDQUFDLEVBQUU7QUFDN0IsU0FBRyxFQUFNLEVBQUU7QUFDWCxZQUFNLEVBQUcsRUFBRTtLQUNaLENBQUMsQ0FBQzs7QUFFSCxVQUFLLEdBQUcsR0FBRyxNQUFLLElBQUksRUFBRSxDQUFDOztBQUV2QixRQUFJLElBQUksR0FBRyxBQUFDLE1BQUssT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLEdBQUksa0JBQVEsSUFBSSxDQUFDLElBQUksbUJBQVMsR0FBRyxZQUFXLEVBQUUsQ0FBQztBQUN2RixVQUFLLE1BQU0sR0FBRyxNQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7R0FDckU7O1NBL0ZVLFdBQVc7UUFOZixJQUFJO2tCQXdHRSxXQUFXIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgY29uc29sZSBmcm9tICdjb25zb2xlJztcbmltcG9ydCBsb2FkZXIgZnJvbSAnZG90ZW52JztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICdAbm9kL2Jhc2UnO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5jb25zdCBQUk9URUNURUQgPSBTeW1ib2woJ1BST1RFQ1RFRCcpO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQgZXh0ZW5kcyBCYXNlIHtcblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICAgICAgICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgICAgICAgOiBvcHRpb25hbChBcnJheSlcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5vcHRpb25zLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMub3B0aW9ucy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLm9wdGlvbnMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKCFzdGF0dXMgJiYgdGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5sb2FkOiAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kIGF0IHBhdGg6ICR7ZmlsZVBhdGh9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucywge1xuICAgICAgc2lsZW50ICAgICAgOiB0cnVlLFxuICAgICAgZmlsZXMgICAgICAgOiBbXG4gICAgICAgICcuZW52LmxvY2FsJyxcbiAgICAgICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgICAgICcuZW52LnRlc3QnLFxuICAgICAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgICAgICcuZW52JyxcbiAgICAgICAgJy5lbnYubm9kJ1xuICAgICAgXSxcbiAgICAgIHJvb3QgOiBwYXRoLmRpcm5hbWUocmVxdWlyZS5tYWluLmZpbGVuYW1lKSxcbiAgICAgIGNvbmZpZ3VyYXRvcixcbiAgICAgIGxvYWRlclxuICAgIH0pO1xuXG4gICAgdGhpc1tQUk9URUNURURdID0gdGhpc1tQUk9URUNURURdIHx8IHt9O1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0sIHtcbiAgICAgIEVOViAgICA6IHt9LFxuICAgICAgY29uZmlnIDoge31cbiAgICB9KTtcblxuICAgIHRoaXMuRU5WID0gdGhpcy5sb2FkKCk7XG5cbiAgICBsZXQgd2FybiA9ICh0aGlzLm9wdGlvbnMuc2lsZW50ICE9PSB0cnVlKSA/IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpIDogZnVuY3Rpb24oKSB7fTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMub3B0aW9ucy5jb25maWd1cmF0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHdhcm4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
