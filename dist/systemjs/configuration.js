'use strict';

System.register(['path', 'autobind-decorator', 'decorate-this'], function (_export, _context) {
  var path, autobind, param, returns, optional, anyOf, _createClass, _dec, _dec2, _desc, _value, _class, Configuration;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  return {
    setters: [function (_path) {
      path = _path.default;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
      anyOf = _decorateThis.AnyOf;
    }],
    execute: function () {
      _createClass = function () {
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

      _export('Configuration', Configuration = (_dec = param(optional({
        exclude: optional(anyOf(Boolean, String, Array, Object)),
        silent: optional(Boolean),
        root: optional(String),
        files: optional(Array)
      })), _dec2 = returns(Object), (_class = function () {
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
          this.root = path.dirname(require.main.filename);
          this.setOptions(options);
          return this;
        }

        return Configuration;
      }(), (_applyDecoratedDescriptor(_class.prototype, 'setOptions', [autobind, _dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'), _class.prototype)), _class)));

      _export('Configuration', Configuration);

      _export('default', Configuration);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkE2QmEsZ0VBQVU7Ozs7OztjQUlULGdFQUFVIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsLCBBbnlPZiBhcyBhbnlPZiB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG5cbiAgc2lsZW50ID0gdHJ1ZTtcblxuICBleGNsdWRlID0gJyc7XG5cbiAgZmlsZXMgPSBbXG4gICAgJy5lbnYubG9jYWwnLFxuICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICcuZW52LnRlc3QnLFxuICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAnLmVudicsXG4gICAgJy5lbnYubm9kJ1xuICBdO1xuXG4gIHJvb3QgPSBwYXRoLmRpcm5hbWUocmVxdWlyZS5tYWluLmZpbGVuYW1lKTtcblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICBleGNsdWRlIDogb3B0aW9uYWwoYW55T2YoQm9vbGVhbiwgU3RyaW5nLCBBcnJheSwgT2JqZWN0KSksXG4gICAgc2lsZW50IDogb3B0aW9uYWwoQm9vbGVhbiksXG4gICAgcm9vdCAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzIDogb3B0aW9uYWwoQXJyYXkpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
