'use strict';

System.register(['path', 'console', 'dotenv', 'filter-object', 'autobind-decorator', 'node-env-configuration', './configuration', 'decorate-this'], function (_export, _context) {
  var path, logger, envLoader, objectFilter, autobind, envConfigurator, Configuration, param, returns, optional, anyOf, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _class, PROTECTED, Environment;

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
    }, function (_console) {
      logger = _console.default;
    }, function (_dotenv) {
      envLoader = _dotenv.default;
    }, function (_filterObject) {
      objectFilter = _filterObject.default;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_nodeEnvConfiguration) {
      envConfigurator = _nodeEnvConfiguration.default;
    }, function (_configuration) {
      Configuration = _configuration.Configuration;
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

      PROTECTED = Symbol('PROTECTED');

      _export('Environment', Environment = (_dec = param(String), _dec2 = returns(String), _dec3 = returns(Object), _dec4 = returns(Object), _dec5 = param(Object), _dec6 = returns(Object), _dec7 = param(optional(anyOf(Boolean, String, Array, Object))), _dec8 = returns(Object), _dec9 = param(optional(anyOf(Boolean, String, Array, Object))), _dec10 = returns(String), (_class = function () {
        _createClass(Environment, [{
          key: 'makePath',
          value: function makePath() {
            var file = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            return path.join(path.resolve('' + this.options.root), '' + file);
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
                _this.console.warn(_this.constructor.name + '.load:');

                _this.console.warn('\'' + file + '\' could not found at path: ' + filePath);
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
          key: 'getFilteredConfig',
          value: function getFilteredConfig() {
            var exclude = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
            var excludes = exclude || this.options.exclude || this.config.exclude || false;
            excludes = typeof excludes === 'string' ? excludes.split(',') : excludes;
            excludes = excludes === false ? '*' : excludes;
            return this.filter(this.config, excludes);
          }
        }, {
          key: 'getJson',
          value: function getJson() {
            var exclude = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
            return JSON.stringify(this.getFilteredConfig(exclude));
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
        }, {
          key: 'ENV',
          get: function get() {
            return Object.freeze(this[PROTECTED].ENV);
          }
        }]);

        function Environment() {
          var options = arguments.length <= 0 || arguments[0] === undefined ? new Configuration() : arguments[0];
          var console = arguments.length <= 1 || arguments[1] === undefined ? logger : arguments[1];
          var loader = arguments.length <= 2 || arguments[2] === undefined ? envLoader : arguments[2];
          var configurator = arguments.length <= 3 || arguments[3] === undefined ? envConfigurator : arguments[3];
          var filter = arguments.length <= 4 || arguments[4] === undefined ? objectFilter : arguments[4];

          _classCallCheck(this, Environment);

          Object.assign(this, {
            options: options,
            loader: loader,
            console: console,
            configurator: configurator,
            filter: filter
          });
          Object.defineProperty(this, PROTECTED, {
            enumarable: false,
            value: {
              ENV: {},
              config: {}
            }
          });
          this[PROTECTED].ENV = this.load();
          this.config = this.configurator.apply(this.configurator, [undefined, undefined, this.options.silent ? function () {} : this.console.warn]);
        }

        return Environment;
      }(), (_applyDecoratedDescriptor(_class.prototype, 'makePath', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'makePath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'load', [autobind, _dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'load'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getConfig', [autobind, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'getConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setConfig', [autobind, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'setConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getFilteredConfig', [autobind, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'getFilteredConfig'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getJson', [autobind, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'getJson'), _class.prototype)), _class)));

      _export('Environment', Environment);

      _export('default', Environment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWVXLDZEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFzQ04sK0RBQVM7Ozs7Ozs7Z0JBZ0JELGdFQUFVOzs7Ozs7Ozs7Z0JBV3BCLGdFQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FLaEIsZ0VBQVUsSUFBSSxhQUFKO2NBQ1YsZ0VBQVU7Y0FDViwrREFBUztjQUNULHFFQUFlO2NBQ2YsK0RBQVMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnY29uc29sZSc7XG5pbXBvcnQgZW52TG9hZGVyIGZyb20gJ2RvdGVudic7XG5pbXBvcnQgb2JqZWN0RmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgZW52Q29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBwYXJhbSwgcmV0dXJucywgT3B0aW9uYWwgYXMgb3B0aW9uYWwsIEFueU9mIGFzIGFueU9mIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgQHBhcmFtKFN0cmluZylcbiAgQHJldHVybnMoU3RyaW5nKVxuICBtYWtlUGF0aChmaWxlID0gJycpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShgJHt0aGlzLm9wdGlvbnMucm9vdH1gKSwgYCR7ZmlsZX1gKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5vcHRpb25zLmZpbGVzLmZvckVhY2goKGZpbGUpICA9PiB7XG4gICAgICBsZXQgZmlsZVBhdGggPSB0aGlzLm1ha2VQYXRoKGZpbGUpO1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubG9hZGVyLmxvYWQoe1xuICAgICAgICBzaWxlbnQgOiB0cnVlLFxuICAgICAgICBwYXRoIDogZmlsZVBhdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKCFzdGF0dXMgJiYgdGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNvbnNvbGUud2FybihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6YCk7XG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGAnJHtmaWxlfScgY291bGQgbm90IGZvdW5kIGF0IHBhdGg6ICR7ZmlsZVBhdGh9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52O1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhPYmplY3QpXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpc1tQUk9URUNURURdLmNvbmZpZztcbiAgfVxuXG4gIHNldCBjb25maWcoLi4ucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Q29uZmlnKC4uLnBhcmFtcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKE9iamVjdClcbiAgQHJldHVybnMoT2JqZWN0KVxuICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXNbUFJPVEVDVEVEXS5jb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SnNvbigpO1xuICB9XG5cbiAgZ2V0IEVOVigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh0aGlzW1BST1RFQ1RFRF0uRU5WKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0ob3B0aW9uYWwoYW55T2YoQm9vbGVhbiwgU3RyaW5nLCBBcnJheSwgT2JqZWN0KSkpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0RmlsdGVyZWRDb25maWcoZXhjbHVkZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gZXhjbHVkZSB8fCB0aGlzLm9wdGlvbnMuZXhjbHVkZSB8fCB0aGlzLmNvbmZpZy5leGNsdWRlIHx8IGZhbHNlO1xuICAgIGV4Y2x1ZGVzID0gdHlwZW9mIGV4Y2x1ZGVzID09PSAnc3RyaW5nJyA/IGV4Y2x1ZGVzLnNwbGl0KCcsJykgOiBleGNsdWRlcztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzID09PSBmYWxzZSA/ICcqJyA6IGV4Y2x1ZGVzO1xuXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcyk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHBhcmFtKG9wdGlvbmFsKGFueU9mKEJvb2xlYW4sIFN0cmluZywgQXJyYXksIE9iamVjdCkpKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oZXhjbHVkZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0RmlsdGVyZWRDb25maWcoZXhjbHVkZSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucyA9IG5ldyBDb25maWd1cmF0aW9uKCksXG4gICAgY29uc29sZSA9IGxvZ2dlcixcbiAgICBsb2FkZXIgPSBlbnZMb2FkZXIsXG4gICAgY29uZmlndXJhdG9yID0gZW52Q29uZmlndXJhdG9yLFxuICAgIGZpbHRlciA9IG9iamVjdEZpbHRlclxuICApIHtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBvcHRpb25zLCBsb2FkZXIsIGNvbnNvbGUsIGNvbmZpZ3VyYXRvciwgZmlsdGVyIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWFyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIEVOViAgICA6IHt9LFxuICAgICAgICBjb25maWcgOiB7fVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpc1tQUk9URUNURURdLkVOViA9IHRoaXMubG9hZCgpO1xuXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRvci5hcHBseSh0aGlzLmNvbmZpZ3VyYXRvciwgW1xuICAgICAgdW5kZWZpbmVkLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgdGhpcy5vcHRpb25zLnNpbGVudCA/IGZ1bmN0aW9uKCkge30gOiB0aGlzLmNvbnNvbGUud2FyblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
