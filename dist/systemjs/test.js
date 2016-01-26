'use strict';

System.register(['decorate-this'], function (_export, _context) {
  var param, _createClass, _dec, _dec2, _dec3, _desc, _value, _class, Test;

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
    setters: [function (_decorateThis) {
      param = _decorateThis.param;
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

      _export('Test', Test = (_dec = param(Object), _dec2 = param(String), _dec3 = param(Object), (_class = function () {
        _createClass(Test, [{
          key: 'testConfig',
          value: function testConfig(value) {
            return true;
          }
        }, {
          key: 'testJson',
          value: function testJson(value) {
            return true;
          }
        }, {
          key: 'testEnv',
          value: function testEnv(value) {
            return true;
          }
        }, {
          key: 'config',
          set: function set(value) {
            return this.testConfig(value);
          }
        }, {
          key: 'json',
          set: function set(value) {
            return this.testJson(value);
          }
        }, {
          key: 'ENV',
          set: function set(value) {
            return this.testEnv(value);
          }
        }]);

        function Test() {
          var objects = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

          _classCallCheck(this, Test);

          if (!objects) {
            throw new Error('No objects passed to test');
          }

          Object.assign(this, objects);
          return this;
        }

        return Test;
      }(), (_applyDecoratedDescriptor(_class.prototype, 'testConfig', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'testConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'testJson', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'testJson'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'testEnv', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'testEnv'), _class.prototype)), _class)));

      _export('Test', Test);

      _export('default', Test);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQStCYyxnRUFBVSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyYW0gfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuZXhwb3J0IGNsYXNzIFRlc3Qge1xuXG4gIEBwYXJhbShPYmplY3QpXG4gIHRlc3RDb25maWcodmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIHRlc3RKc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBAcGFyYW0oT2JqZWN0KVxuICB0ZXN0RW52KHZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXQgY29uZmlnKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdENvbmZpZyh2YWx1ZSk7XG4gIH1cblxuICBzZXQganNvbih2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRlc3RKc29uKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBFTlYodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0RW52KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9iamVjdHMgPSBmYWxzZSkge1xuICAgIGlmICghb2JqZWN0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBvYmplY3RzIHBhc3NlZCB0byB0ZXN0Jyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3RzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
