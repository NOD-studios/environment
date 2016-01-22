System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      (function (global, factory) {
        if (typeof define === "function" && define.amd) {
          define(['exports', 'path', 'dotenv', 'console', 'filter-object', 'autobind-decorator', './configuration', 'node-env-configuration', 'aurelia-dependency-injection', 'decorate-this', 'source-map-support/register', 'babel-polyfill'], factory);
        } else if (typeof exports !== "undefined") {
          factory(exports, require('path'), require('dotenv'), require('console'), require('filter-object'), require('autobind-decorator'), require('./configuration'), require('node-env-configuration'), require('aurelia-dependency-injection'), require('decorate-this'), require('source-map-support/register'), require('babel-polyfill'));
        } else {
          var mod = {
            exports: {}
          };
          factory(mod.exports, global.path, global.dotenv, global.console, global.filterObject, global.autobindDecorator, global.configuration, global.nodeEnvConfiguration, global.aureliaDependencyInjection, global.decorateThis, global.register, global.babelPolyfill);
          global.environment = mod.exports;
        }
      })(this, function (exports, _path, _dotenv, _console, _filterObject, _autobindDecorator, _configuration, _nodeEnvConfiguration, _aureliaDependencyInjection, _decorateThis) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Environment = undefined;

        var _path2 = _interopRequireDefault(_path);

        var _dotenv2 = _interopRequireDefault(_dotenv);

        var _console2 = _interopRequireDefault(_console);

        var _filterObject2 = _interopRequireDefault(_filterObject);

        var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

        var _nodeEnvConfiguration2 = _interopRequireDefault(_nodeEnvConfiguration);

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

        var _get = function get(object, property, receiver) {
          if (object === null) object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);

          if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
              return undefined;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;

            if (getter === undefined) {
              return undefined;
            }

            return getter.call(receiver);
          }
        };

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

        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2;

        var PROTECTED = Symbol('PROTECTED');
        var Environment = exports.Environment = (_dec = (0, _aureliaDependencyInjection.inject)(_configuration.Configuration), _dec2 = (0, _decorateThis.param)((0, _decorateThis.Optional)({
          root: (0, _decorateThis.Optional)(String),
          files: (0, _decorateThis.Optional)(Array)
        })), _dec3 = (0, _decorateThis.returns)(Object), _dec4 = (0, _decorateThis.param)(String), _dec5 = (0, _decorateThis.returns)(String), _dec6 = (0, _decorateThis.returns)(Object), _dec7 = (0, _decorateThis.returns)(Object), _dec8 = (0, _decorateThis.param)(Object), _dec9 = (0, _decorateThis.returns)(Object), _dec10 = (0, _decorateThis.returns)(String), _dec(_class = (_class2 = function () {
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
              var _this = this;

              this.options.files.forEach(function (file) {
                var filePath = _this.makePath(file);
                var status = _this.loader.load({
                  silent: true,
                  path: filePath
                });
                if (!status && _this.options.silent !== true) {
                  console.warn(_this.constructor.name + '.load:');
                  console.warn('\'' + file + '\' could not found at path: ' + filePath);
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
            var options = arguments.length <= 0 || arguments[0] === undefined ? new _configuration.Configuration() : arguments[0];
            var console = arguments.length <= 1 || arguments[1] === undefined ? _console2.default : arguments[1];
            var configurify = arguments.length <= 2 || arguments[2] === undefined ? _nodeEnvConfiguration2.default : arguments[2];
            var loader = arguments.length <= 3 || arguments[3] === undefined ? _dotenv2.default : arguments[3];

            _classCallCheck(this, Environment);

            Object.assign(this, { loader: loader, console: console, options: options, configurify: configurify });

            Object.defineProperty(this, PROTECTED, {
              enumarable: false,
              value: {
                ENV: {},
                config: {}
              }
            });

            this[PROTECTED].ENV = this.load();

            var warn = this.options.silent !== true ? this.console.warn.bind(this.console) : function () {};
            this.config = this.configurify(undefined, undefined, warn);
          }

          return Environment;
        }(), (_applyDecoratedDescriptor(_class2.prototype, 'setOptions', [_autobindDecorator2.default, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'setOptions'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'makePath', [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'makePath'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'load', [_autobindDecorator2.default, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'load'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getConfig', [_autobindDecorator2.default, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'getConfig'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setConfig', [_autobindDecorator2.default, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'setConfig'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getJson', [_autobindDecorator2.default, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'getJson'), _class2.prototype)), _class2)) || _class);
        exports.default = Environment;
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVhLDRDQURaLCtFQUlFLHlCQUFNLDRCQUFTO0FBQ2QsZ0JBQVEsNEJBQVMsTUFBVCxDQUFSO0FBQ0EsaUJBQVEsNEJBQVMsS0FBVCxDQUFSO1NBRkssQ0FBTixXQUlBLDJCQUFRLE1BQVIsV0FLQSx5QkFBTSxNQUFOLFdBQ0EsMkJBQVEsTUFBUixXQU1BLDJCQUFRLE1BQVIsV0FxQkEsMkJBQVEsTUFBUixXQVVBLHlCQUFNLE1BQU4sV0FDQSwyQkFBUSxNQUFSLFlBV0EsMkJBQVEsTUFBUjt1QkE5RFU7O3lDQVFjO2tCQUFkLGdFQUFVLGtCQUFJOztBQUN2QixnREFUUyx1REFTZSxRQUF4QixDQUR1Qjs7Ozt1Q0FNTDtrQkFBWCw2REFBTyxrQkFBSTs7QUFDbEIscUJBQU8sZUFBSyxJQUFMLENBQVUsZUFBSyxPQUFMLE1BQWdCLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBMUIsT0FBbUQsSUFBbkQsQ0FBUCxDQURrQjs7OzttQ0FNYjs7O0FBQ0wsbUJBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsQ0FBMkIsVUFBQyxJQUFELEVBQVc7QUFDcEMsb0JBQUksV0FBVyxNQUFLLFFBQUwsQ0FBYyxJQUFkLENBQVgsQ0FEZ0M7QUFFcEMsb0JBQUksU0FBUyxNQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCO0FBQzVCLDBCQUFTLElBQVQ7QUFDQSx3QkFBTyxRQUFQO2lCQUZXLENBQVQsQ0FGZ0M7QUFNcEMsb0JBQUksQ0FBQyxNQUFELElBQVcsTUFBSyxPQUFMLENBQWEsTUFBYixLQUF3QixJQUF4QixFQUE4QjtBQUMzQywwQkFBUSxJQUFSLENBQWdCLE1BQUssV0FBTCxDQUFpQixJQUFqQixXQUFoQixFQUQyQztBQUUzQywwQkFBUSxJQUFSLFFBQWlCLHdDQUFrQyxRQUFuRCxFQUYyQztpQkFBN0M7ZUFOeUIsQ0FBM0IsQ0FESztBQVlMLHFCQUFPLFFBQVEsR0FBUixDQVpGOzs7O3dDQXFCSztBQUNWLHFCQUFPLEtBQUssU0FBTCxFQUFnQixNQUFoQixDQURHOzs7O3dDQVdXO2tCQUFiLCtEQUFTLGtCQUFJOztBQUNyQixxQkFBTyxNQUFQLENBQWMsS0FBSyxTQUFMLEVBQWdCLE1BQWhCLEVBQXdCLE1BQXRDLEVBRHFCO0FBRXJCLHFCQUFPLEtBQUssTUFBTCxDQUZjOzs7O3NDQVdiO0FBQ1Isa0JBQUksV0FBVyxLQUFLLE1BQUwsQ0FBWSxPQUFaLElBQXVCLEVBQXZCLENBRFA7QUFFUix5QkFBVyxTQUFTLEtBQVQsQ0FBZSxHQUFmLEtBQXVCLEVBQXZCLENBRkg7QUFHUixxQkFBTyxLQUFLLFNBQUwsQ0FBZSw0QkFBTyxLQUFLLE1BQUwsRUFBYSxRQUFwQixDQUFmLENBQVAsQ0FIUTs7OztnQ0E1Qkc7QUFDWCxxQkFBTyxLQUFLLFNBQUwsRUFBUCxDQURXOztnQ0FVUztBQUNwQixxQkFBTyxLQUFLLFNBQUwsdUJBQVAsQ0FEb0I7Ozs7Z0NBWVg7QUFDVCxxQkFBTyxLQUFLLE9BQUwsRUFBUCxDQURTOzs7O0FBWVgsbUJBckVXLFdBcUVYLEdBS0U7Z0JBSkEsZ0VBQVUsa0RBSVY7Z0JBSEEsaUdBR0E7Z0JBRkEsa0hBRUE7Z0JBREEsK0ZBQ0E7O2tDQTFFUyxhQTBFVDs7QUFFQSxtQkFBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixFQUFFLGNBQUYsRUFBVSxnQkFBVixFQUFtQixnQkFBbkIsRUFBNEIsd0JBQTVCLEVBQXBCLEVBRkE7O0FBSUEsbUJBQU8sY0FBUCxDQUFzQixJQUF0QixFQUE0QixTQUE1QixFQUF1QztBQUNyQywwQkFBYSxLQUFiO0FBQ0EscUJBQVE7QUFDTixxQkFBUyxFQUFUO0FBQ0Esd0JBQVMsRUFBVDtlQUZGO2FBRkYsRUFKQTs7QUFZQSxpQkFBSyxTQUFMLEVBQWdCLEdBQWhCLEdBQXNCLEtBQUssSUFBTCxFQUF0QixDQVpBOztBQWNBLGdCQUFJLE9BQU8sSUFBQyxDQUFLLE9BQUwsQ0FBYSxNQUFiLEtBQXdCLElBQXhCLEdBQWdDLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FBdUIsS0FBSyxPQUFMLENBQXhELEdBQXdFLFlBQVcsRUFBWCxDQWRuRjtBQWVBLGlCQUFLLE1BQUwsR0FBYyxLQUFLLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEIsU0FBNUIsRUFBdUMsSUFBdkMsQ0FBZCxDQWZBO1dBTEY7O2lCQXJFVzs7MEJBNkZFIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsb2FkaW5nIGZyb20gJ2RvdGVudic7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IGZpbHRlciBmcm9tICdmaWx0ZXItb2JqZWN0JztcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgY29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwgfSBmcm9tICdkZWNvcmF0ZS10aGlzJztcblxuY29uc3QgUFJPVEVDVEVEID0gU3ltYm9sKCdQUk9URUNURUQnKTtcblxuQGluamVjdChDb25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKHtcbiAgICByb290ICA6IG9wdGlvbmFsKFN0cmluZyksXG4gICAgZmlsZXMgOiBvcHRpb25hbChBcnJheSlcbiAgfSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBwYXJhbShTdHJpbmcpXG4gIEByZXR1cm5zKFN0cmluZylcbiAgbWFrZVBhdGgoZmlsZSA9ICcnKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwYXRoLnJlc29sdmUoYCR7dGhpcy5vcHRpb25zLnJvb3R9YCksIGAke2ZpbGV9YCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBsb2FkKCkge1xuICAgIHRoaXMub3B0aW9ucy5maWxlcy5mb3JFYWNoKChmaWxlKSAgPT4ge1xuICAgICAgbGV0IGZpbGVQYXRoID0gdGhpcy5tYWtlUGF0aChmaWxlKTtcbiAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmxvYWRlci5sb2FkKHtcbiAgICAgICAgc2lsZW50IDogdHJ1ZSxcbiAgICAgICAgcGF0aCA6IGZpbGVQYXRoXG4gICAgICB9KTtcbiAgICAgIGlmICghc3RhdHVzICYmIHRoaXMub3B0aW9ucy5zaWxlbnQgIT09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDpgKTtcbiAgICAgICAgY29uc29sZS53YXJuKGAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kIGF0IHBhdGg6ICR7ZmlsZVBhdGh9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucyA9IG5ldyBDb25maWd1cmF0aW9uKCksXG4gICAgY29uc29sZSA9IGxvZ2dlcixcbiAgICBjb25maWd1cmlmeSA9IGNvbmZpZ3VyYXRvcixcbiAgICBsb2FkZXIgPSBsb2FkaW5nXG4gICkge1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IGxvYWRlciwgY29uc29sZSwgb3B0aW9ucywgY29uZmlndXJpZnkgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUFJPVEVDVEVELCB7XG4gICAgICBlbnVtYXJhYmxlIDogZmFsc2UsXG4gICAgICB2YWx1ZSA6IHtcbiAgICAgICAgRU5WICAgIDoge30sXG4gICAgICAgIGNvbmZpZyA6IHt9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzW1BST1RFQ1RFRF0uRU5WID0gdGhpcy5sb2FkKCk7XG5cbiAgICBsZXQgd2FybiA9ICh0aGlzLm9wdGlvbnMuc2lsZW50ICE9PSB0cnVlKSA/IHRoaXMuY29uc29sZS53YXJuLmJpbmQodGhpcy5jb25zb2xlKSA6IGZ1bmN0aW9uKCkge307XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyaWZ5KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB3YXJuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnZpcm9ubWVudDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
