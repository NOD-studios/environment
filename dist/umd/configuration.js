(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'path'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('path'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.path);
    global.configuration = mod.exports;
  }
})(this, function (exports, _path) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Configuration = undefined;

  var _path2 = _interopRequireDefault(_path);

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

  var Configuration = exports.Configuration = function Configuration() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Configuration);

    this.silent = true;
    this.files = ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'];
    this.root = _path2.default.dirname(require.main.filename);

    Object.assign(this, options);

    return this;
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUVhLHdDQWVYLFNBZlcsYUFlWCxHQUEwQjtRQUFkLGdFQUFVLGtCQUFJOzswQkFmZixlQWVlOztTQWIxQixTQUFTLEtBYWlCO1NBWDFCLFFBQVEsQ0FDTixZQURNLEVBRU4saUJBRk0sRUFHTixXQUhNLEVBSU4sa0JBSk0sRUFLTixNQUxNLEVBTU4sVUFOTSxFQVdrQjtTQUYxQixPQUFPLGVBQUssT0FBTCxDQUFhLFFBQVEsSUFBUixDQUFhLFFBQWIsRUFFTTs7QUFDeEIsV0FBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixPQUFwQixFQUR3Qjs7QUFHeEIsV0FBTyxJQUFQLENBSHdCO0dBQTFCIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuXG4gIHNpbGVudCA9IHRydWU7XG5cbiAgZmlsZXMgPSBbXG4gICAgJy5lbnYubG9jYWwnLFxuICAgICcuZW52LnByb2R1Y3Rpb24nLFxuICAgICcuZW52LnRlc3QnLFxuICAgICcuZW52LmRldmVsb3BtZW50JyxcbiAgICAnLmVudicsXG4gICAgJy5lbnYubm9kJ1xuICBdO1xuXG4gIHJvb3QgPSBwYXRoLmRpcm5hbWUocmVxdWlyZS5tYWluLmZpbGVuYW1lKTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
