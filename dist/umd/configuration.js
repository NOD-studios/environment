(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'path', 'autobind-decorator', 'decorate-this'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('path'), require('autobind-decorator'), require('decorate-this'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.path, global.autobindDecorator, global.decorateThis);
    global.configuration = mod.exports;
  }
})(this, function (exports, _path, _autobindDecorator, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Configuration = undefined;

  var _path2 = _interopRequireDefault(_path);

  var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var _dec, _dec2, _desc, _value, _class;

  var Configuration = exports.Configuration = (_dec = (0, _decorateThis.param)((0, _decorateThis.Optional)({
    exclude: (0, _decorateThis.Optional)((0, _decorateThis.AnyOf)(Boolean, String, Array, Object)),
    silent: (0, _decorateThis.Optional)(Boolean),
    root: (0, _decorateThis.Optional)(String),
    files: (0, _decorateThis.Optional)(Array)
  })), _dec2 = (0, _decorateThis.returns)(Object), (_class = function () {
    _createClass(Configuration, [{
      key: 'setOptions',
      value: function setOptions() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return Object.assign(this, options);
      }
    }]);

    function Configuration() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Configuration);

      this.silent = true;
      this.exclude = '';
      this.files = ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'];
      this.root = _path2.default.dirname(require.main.filename);

      this.setOptions(options);

      return this;
    }

    return Configuration;
  }(), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [_autobindDecorator2.default, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class));
  exports.default = Configuration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUlhLGdEQWtCVix5QkFBTSw0QkFBUztBQUNkLGFBQVUsNEJBQVMseUJBQU0sT0FBTixFQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFBOEIsTUFBOUIsQ0FBVCxDQUFWO0FBQ0EsWUFBUyw0QkFBUyxPQUFULENBQVQ7QUFDQSxVQUFRLDRCQUFTLE1BQVQsQ0FBUjtBQUNBLFdBQVEsNEJBQVMsS0FBVCxDQUFSO0dBSkssQ0FBTixXQU1BLDJCQUFRLE1BQVI7aUJBeEJVOzttQ0F5QmM7WUFBZCxnRUFBVSxrQkFBSTs7QUFDdkIsZUFBTyxPQUFPLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLE9BQXBCLENBQVAsQ0FEdUI7Ozs7QUFJekIsYUE3QlcsYUE2QlgsR0FBMEI7VUFBZCxnRUFBVSxrQkFBSTs7NEJBN0JmLGVBNkJlOztXQTNCMUIsU0FBUyxLQTJCaUI7V0F6QjFCLFVBQVUsR0F5QmdCO1dBdkIxQixRQUFRLENBQ04sWUFETSxFQUVOLGlCQUZNLEVBR04sV0FITSxFQUlOLGtCQUpNLEVBS04sTUFMTSxFQU1OLFVBTk0sRUF1QmtCO1dBZDFCLE9BQU8sZUFBSyxPQUFMLENBQWEsUUFBUSxJQUFSLENBQWEsUUFBYixFQWNNOztBQUN4QixXQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsRUFEd0I7O0FBR3hCLGFBQU8sSUFBUCxDQUh3QjtLQUExQjs7V0E3Qlc7O29CQW9DRSIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IHBhcmFtLCByZXR1cm5zLCBPcHRpb25hbCBhcyBvcHRpb25hbCwgQW55T2YgYXMgYW55T2YgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuXG4gIHNpbGVudCA9IHRydWU7XG5cbiAgZXhjbHVkZSA9ICcnO1xuXG4gIGZpbGVzID0gW1xuICAgICcuZW52LmxvY2FsJyxcbiAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAnLmVudi50ZXN0JyxcbiAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgJy5lbnYnLFxuICAgICcuZW52Lm5vZCdcbiAgXTtcblxuICByb290ID0gcGF0aC5kaXJuYW1lKHJlcXVpcmUubWFpbi5maWxlbmFtZSk7XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgZXhjbHVkZSA6IG9wdGlvbmFsKGFueU9mKEJvb2xlYW4sIFN0cmluZywgQXJyYXksIE9iamVjdCkpLFxuICAgIHNpbGVudCA6IG9wdGlvbmFsKEJvb2xlYW4pLFxuICAgIHJvb3QgIDogb3B0aW9uYWwoU3RyaW5nKSxcbiAgICBmaWxlcyA6IG9wdGlvbmFsKEFycmF5KVxuICB9KSlcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
