'use strict';

System.register(['source-map-support/register', 'babel-polyfill', 'path', 'console', 'dotenv', 'filter-object', 'autobind-decorator', 'node-env-configuration', 'decorate-this'], function (_export, _context) {
  var path, logger, envLoader, filter, autobind, envConfigurator, param, returns, optional, _createClass, _get, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _class2, PROTECTED, Configuration, Environment;

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_sourceMapSupportRegister) {}, function (_babelPolyfill) {}, function (_path) {
      path = _path.default;
    }, function (_console) {
      logger = _console.default;
    }, function (_dotenv) {
      envLoader = _dotenv.default;
    }, function (_filterObject) {
      filter = _filterObject.default;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_nodeEnvConfiguration) {
      envConfigurator = _nodeEnvConfiguration.default;
    }, function (_decorateThis) {
      param = _decorateThis.param;
      returns = _decorateThis.returns;
      optional = _decorateThis.Optional;
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

      _get = function get(object, property, receiver) {
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

      PROTECTED = Symbol('PROTECTED');

      _export('Configuration', Configuration = function Configuration() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Configuration);

        this.silent = true;
        this.files = ['.env.local', '.env.production', '.env.test', '.env.development', '.env', '.env.nod'];
        this.root = path.dirname(require.main.filename);
        Object.assign(this, options);
        return this;
      });

      _export('Configuration', Configuration);

      _export('Environment', Environment = (_dec = param(optional({
        root: optional(String),
        files: optional(Array)
      })), _dec2 = returns(Object), _dec3 = param(String), _dec4 = returns(String), _dec5 = returns(Object), _dec6 = returns(Object), _dec7 = param(Object), _dec8 = returns(Object), _dec9 = returns(String), (_class2 = function () {
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
          key: 'getJson',
          value: function getJson() {
            var excludes = this.config.EXCLUDE || '';
            excludes = excludes.split(',') || [];
            return JSON.stringify(filter(this.config, excludes));
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

          _classCallCheck(this, Environment);

          Object.assign(this, {
            options: options,
            loader: loader,
            console: console,
            configurator: configurator
          });
          Object.defineProperty(this, PROTECTED, {
            enumarable: false,
            value: {
              ENV: {},
              config: {}
            }
          });
          this[PROTECTED].ENV = this.load();
          this.config = this.configurator(undefined, undefined, this.console.warn);
        }

        return Environment;
      }(), (_applyDecoratedDescriptor(_class2.prototype, 'setOptions', [autobind, _dec, _dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'setOptions'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'makePath', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'makePath'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'load', [autobind, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'load'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getConfig', [autobind, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'getConfig'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setConfig', [autobind, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'setConfig'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getJson', [autobind, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'getJson'), _class2.prototype)), _class2)));

      _export('Environment', Environment);

      _export('default', Environment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCYyxnRUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBZVgsZ0VBQVU7Ozs7OztnQkFNWiw2REFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBc0NOLCtEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQXNCakIsZ0VBQVUsSUFBSSxhQUFKO2NBQ1YsZ0VBQVU7Y0FDViwrREFBUztjQUNULHFFQUFlIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnY29uc29sZSc7XG5pbXBvcnQgZW52TG9hZGVyIGZyb20gJ2RvdGVudic7XG5pbXBvcnQgZmlsdGVyIGZyb20gJ2ZpbHRlci1vYmplY3QnO1xuaW1wb3J0IGF1dG9iaW5kIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgZW52Q29uZmlndXJhdG9yIGZyb20gJ25vZGUtZW52LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcblxuICBzaWxlbnQgPSB0cnVlO1xuXG4gIGZpbGVzID0gW1xuICAgICcuZW52LmxvY2FsJyxcbiAgICAnLmVudi5wcm9kdWN0aW9uJyxcbiAgICAnLmVudi50ZXN0JyxcbiAgICAnLmVudi5kZXZlbG9wbWVudCcsXG4gICAgJy5lbnYnLFxuICAgICcuZW52Lm5vZCdcbiAgXTtcblxuICByb290ID0gcGF0aC5kaXJuYW1lKHJlcXVpcmUubWFpbi5maWxlbmFtZSk7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzIDogb3B0aW9uYWwoQXJyYXkpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMub3B0aW9ucy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5sb2FkZXIubG9hZCh7XG4gICAgICAgIHNpbGVudCA6IHRydWUsXG4gICAgICAgIHBhdGggOiBmaWxlUGF0aFxuICAgICAgfSk7XG4gICAgICBpZiAoIXN0YXR1cyAmJiB0aGlzLm9wdGlvbnMuc2lsZW50ICE9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0ubG9hZDpgKTtcbiAgICAgICAgdGhpcy5jb25zb2xlLndhcm4oYCcke2ZpbGV9JyBjb3VsZCBub3QgZm91bmQgYXQgcGF0aDogJHtmaWxlUGF0aH1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnY7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzW1BST1RFQ1RFRF0uY29uZmlnO1xuICB9XG5cbiAgc2V0IGNvbmZpZyguLi5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRDb25maWcoLi4ucGFyYW1zKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcGFyYW0oT2JqZWN0KVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpc1tQUk9URUNURURdLmNvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uKCk7XG4gIH1cblxuICBnZXQgRU5WKCkge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHRoaXNbUFJPVEVDVEVEXS5FTlYpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKFN0cmluZylcbiAgZ2V0SnNvbigpIHtcbiAgICBsZXQgZXhjbHVkZXMgPSB0aGlzLmNvbmZpZy5FWENMVURFIHx8ICcnO1xuICAgIGV4Y2x1ZGVzID0gZXhjbHVkZXMuc3BsaXQoJywnKSB8fCBbXTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmlsdGVyKHRoaXMuY29uZmlnLCBleGNsdWRlcykpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucyA9IG5ldyBDb25maWd1cmF0aW9uKCksXG4gICAgY29uc29sZSA9IGxvZ2dlcixcbiAgICBsb2FkZXIgPSBlbnZMb2FkZXIsXG4gICAgY29uZmlndXJhdG9yID0gZW52Q29uZmlndXJhdG9yXG4gICkge1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG9wdGlvbnMsIGxvYWRlciwgY29uc29sZSwgY29uZmlndXJhdG9yIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWFyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIEVOViAgICA6IHt9LFxuICAgICAgICBjb25maWcgOiB7fVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpc1tQUk9URUNURURdLkVOViA9IHRoaXMubG9hZCgpO1xuXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRvcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcy5jb25zb2xlLndhcm4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudmlyb25tZW50O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
