'use strict';

System.register(['source-map-support/register', 'babel-polyfill', './environment', './configuration', './test'], function (_export, _context) {
  var Environment, Configuration, Test;
  return {
    setters: [function (_sourceMapSupportRegister) {}, function (_babelPolyfill) {}, function (_environment) {
      Environment = _environment.Environment;
    }, function (_configuration) {
      Configuration = _configuration.Configuration;
    }, function (_test) {
      Test = _test.Test;
    }],
    execute: function () {
      _export('Environment', Environment);

      _export('Configuration', Configuration);

      _export('Test', Test);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
