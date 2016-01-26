'use strict';

System.register(['source-map-support/register', 'babel-polyfill', './environment'], function (_export, _context) {
  var Environment, _typeof, environment, ENV, config;

  return {
    setters: [function (_sourceMapSupportRegister) {}, function (_babelPolyfill) {}, function (_environment) {
      Environment = _environment.Environment;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('environment', environment = new Environment());

      _export('environment', environment);

      _export('default', environment);

      ENV = environment.ENV;
      config = environment.config;

      if ((typeof ENV === 'undefined' ? 'undefined' : _typeof(ENV)) !== 'object') {
        throw new Error('Environment variables are could not parsed');
      }

      if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
        throw new Error('Environment variables are could not converted into object');
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
