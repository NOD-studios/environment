define(['exports', 'decorate-this'], function (exports, _decorateThis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Test = undefined;

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

  var _dec, _dec2, _dec3, _desc, _value, _class;

  var Test = exports.Test = (_dec = (0, _decorateThis.param)(Object), _dec2 = (0, _decorateThis.param)(String), _dec3 = (0, _decorateThis.param)(Object), (_class = function () {
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
  }(), (_applyDecoratedDescriptor(_class.prototype, 'testConfig', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'testConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'testJson', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'testJson'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'testEnv', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'testEnv'), _class.prototype)), _class));
  exports.default = Test;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRWEsOEJBRVYseUJBQU0sTUFBTixXQUtBLHlCQUFNLE1BQU4sV0FLQSx5QkFBTSxNQUFOO2lCQVpVOztpQ0FHQSxPQUFPO0FBQ2hCLGVBQU8sSUFBUCxDQURnQjs7OzsrQkFLVCxPQUFPO0FBQ2QsZUFBTyxJQUFQLENBRGM7Ozs7OEJBS1IsT0FBTztBQUNiLGVBQU8sSUFBUCxDQURhOzs7O3dCQUlKLE9BQU87QUFDaEIsZUFBTyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBUCxDQURnQjs7Ozt3QkFJVCxPQUFPO0FBQ2QsZUFBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQVAsQ0FEYzs7Ozt3QkFJUixPQUFPO0FBQ2IsZUFBTyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBQVAsQ0FEYTs7OztBQUlmLGFBN0JXLElBNkJYLEdBQTZCO1VBQWpCLGdFQUFVLHFCQUFPOzs0QkE3QmxCLE1BNkJrQjs7QUFDM0IsVUFBSSxDQUFDLE9BQUQsRUFBVTtBQUNaLGNBQU0sSUFBSSxLQUFKLENBQVUsMkJBQVYsQ0FBTixDQURZO09BQWQ7O0FBSUEsYUFBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixPQUFwQixFQUwyQjs7QUFPM0IsYUFBTyxJQUFQLENBUDJCO0tBQTdCOztXQTdCVzs7b0JBd0NFIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJhbSB9IGZyb20gJ2RlY29yYXRlLXRoaXMnO1xuXG5leHBvcnQgY2xhc3MgVGVzdCB7XG5cbiAgQHBhcmFtKE9iamVjdClcbiAgdGVzdENvbmZpZyh2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgdGVzdEpzb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIEBwYXJhbShPYmplY3QpXG4gIHRlc3RFbnYodmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldCBjb25maWcodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0Q29uZmlnKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBqc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdEpzb24odmFsdWUpO1xuICB9XG5cbiAgc2V0IEVOVih2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRlc3RFbnYodmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2JqZWN0cyA9IGZhbHNlKSB7XG4gICAgaWYgKCFvYmplY3RzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG9iamVjdHMgcGFzc2VkIHRvIHRlc3QnKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdHMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
