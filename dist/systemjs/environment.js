'use strict';

System.register(['source-map-support/register', 'babel-polyfill', 'path', 'dotenv', 'console', 'filter-object', 'autobind-decorator', './configuration', 'node-env-configuration', 'aurelia-dependency-injection', 'decorate-this'], function (_export, _context) {
  var path, loading, logger, filter, autobind, Configuration, configurator, inject, param, returns, optional, _createClass, _get, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, PROTECTED, Environment;

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
    setters: [function (_sourceMapSupportRegister) {}, function (_babelPolyfill) {}, function (_path) {
      path = _path.default;
    }, function (_dotenv) {
      loading = _dotenv.default;
    }, function (_console) {
      logger = _console.default;
    }, function (_filterObject) {
      filter = _filterObject.default;
    }, function (_autobindDecorator) {
      autobind = _autobindDecorator.default;
    }, function (_configuration) {
      Configuration = _configuration.Configuration;
    }, function (_nodeEnvConfiguration) {
      configurator = _nodeEnvConfiguration.default;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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

      _export('Environment', Environment = (_dec = inject(Configuration), _dec2 = param(optional({
        root: optional(String),
        files: optional(Array)
      })), _dec3 = returns(Object), _dec4 = param(String), _dec5 = returns(String), _dec6 = returns(Object), _dec7 = returns(Object), _dec8 = param(Object), _dec9 = returns(Object), _dec10 = returns(String), _dec(_class = (_class2 = function () {
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
        }]);

        function Environment() {
          var options = arguments.length <= 0 || arguments[0] === undefined ? new Configuration() : arguments[0];
          var console = arguments.length <= 1 || arguments[1] === undefined ? logger : arguments[1];
          var configurify = arguments.length <= 2 || arguments[2] === undefined ? configurator : arguments[2];
          var loader = arguments.length <= 3 || arguments[3] === undefined ? loading : arguments[3];

          _classCallCheck(this, Environment);

          Object.assign(this, {
            loader: loader,
            console: console,
            options: options,
            configurify: configurify
          });
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
      }(), (_applyDecoratedDescriptor(_class2.prototype, 'setOptions', [autobind, _dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'setOptions'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'makePath', [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'makePath'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'load', [autobind, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'load'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getConfig', [autobind, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'getConfig'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setConfig', [autobind, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'setConfig'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getJson', [autobind, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'getJson'), _class2.prototype)), _class2)) || _class));

      _export('Environment', Environment);

      _export('default', Environment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBdUJhLGdFQUFVOzs7Ozs7Z0JBTVosNkRBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBc0NOLCtEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FrQmpCLGdFQUFVLElBQUksYUFBSjtjQUNWLGdFQUFVO2NBQ1Ysb0VBQWM7Y0FDZCwrREFBUyIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbG9hZGluZyBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdjb25zb2xlJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnZmlsdGVyLW9iamVjdCc7XG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IGNvbmZpZ3VyYXRvciBmcm9tICdub2RlLWVudi1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHsgcGFyYW0sIHJldHVybnMsIE9wdGlvbmFsIGFzIG9wdGlvbmFsIH0gZnJvbSAnZGVjb3JhdGUtdGhpcyc7XG5cbmNvbnN0IFBST1RFQ1RFRCA9IFN5bWJvbCgnUFJPVEVDVEVEJyk7XG5cbkBpbmplY3QoQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShvcHRpb25hbCh7XG4gICAgcm9vdCAgOiBvcHRpb25hbChTdHJpbmcpLFxuICAgIGZpbGVzIDogb3B0aW9uYWwoQXJyYXkpXG4gIH0pKVxuICBAcmV0dXJucyhPYmplY3QpXG4gIHNldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBAcGFyYW0oU3RyaW5nKVxuICBAcmV0dXJucyhTdHJpbmcpXG4gIG1ha2VQYXRoKGZpbGUgPSAnJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKGAke3RoaXMub3B0aW9ucy5yb290fWApLCBgJHtmaWxlfWApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEByZXR1cm5zKE9iamVjdClcbiAgbG9hZCgpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsZXMuZm9yRWFjaCgoZmlsZSkgID0+IHtcbiAgICAgIGxldCBmaWxlUGF0aCA9IHRoaXMubWFrZVBhdGgoZmlsZSk7XG4gICAgICBsZXQgc3RhdHVzID0gdGhpcy5sb2FkZXIubG9hZCh7XG4gICAgICAgIHNpbGVudCA6IHRydWUsXG4gICAgICAgIHBhdGggOiBmaWxlUGF0aFxuICAgICAgfSk7XG4gICAgICBpZiAoIXN0YXR1cyAmJiB0aGlzLm9wdGlvbnMuc2lsZW50ICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9LmxvYWQ6YCk7XG4gICAgICAgIGNvbnNvbGUud2FybihgJyR7ZmlsZX0nIGNvdWxkIG5vdCBmb3VuZCBhdCBwYXRoOiAke2ZpbGVQYXRofWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9jZXNzLmVudjtcbiAgfVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCk7XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgQHJldHVybnMoT2JqZWN0KVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXNbUFJPVEVDVEVEXS5jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKC4uLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNldENvbmZpZyguLi5wYXJhbXMpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIEBwYXJhbShPYmplY3QpXG4gIEByZXR1cm5zKE9iamVjdClcbiAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzW1BST1RFQ1RFRF0uY29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldCBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEpzb24oKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBAcmV0dXJucyhTdHJpbmcpXG4gIGdldEpzb24oKSB7XG4gICAgbGV0IGV4Y2x1ZGVzID0gdGhpcy5jb25maWcuRVhDTFVERSB8fCAnJztcbiAgICBleGNsdWRlcyA9IGV4Y2x1ZGVzLnNwbGl0KCcsJykgfHwgW107XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZpbHRlcih0aGlzLmNvbmZpZywgZXhjbHVkZXMpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnMgPSBuZXcgQ29uZmlndXJhdGlvbigpLFxuICAgIGNvbnNvbGUgPSBsb2dnZXIsXG4gICAgY29uZmlndXJpZnkgPSBjb25maWd1cmF0b3IsXG4gICAgbG9hZGVyID0gbG9hZGluZ1xuICApIHtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBsb2FkZXIsIGNvbnNvbGUsIG9wdGlvbnMsIGNvbmZpZ3VyaWZ5IH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFBST1RFQ1RFRCwge1xuICAgICAgZW51bWFyYWJsZSA6IGZhbHNlLFxuICAgICAgdmFsdWUgOiB7XG4gICAgICAgIEVOViAgICA6IHt9LFxuICAgICAgICBjb25maWcgOiB7fVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpc1tQUk9URUNURURdLkVOViA9IHRoaXMubG9hZCgpO1xuXG4gICAgbGV0IHdhcm4gPSAodGhpcy5vcHRpb25zLnNpbGVudCAhPT0gdHJ1ZSkgPyB0aGlzLmNvbnNvbGUud2Fybi5iaW5kKHRoaXMuY29uc29sZSkgOiBmdW5jdGlvbigpIHt9O1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmlmeSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgd2Fybik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW52aXJvbm1lbnQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
