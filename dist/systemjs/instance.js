'use strict';

System.register(['./configuration', './index', './test'], function (_export, _context) {
  var Configuration, Environment, Test, environment, ENV, config, json;
  return {
    setters: [function (_configuration) {
      Configuration = _configuration.Configuration;
    }, function (_index) {
      Environment = _index.Environment;
    }, function (_test) {
      Test = _test.Test;
    }],
    execute: function () {
      _export('environment', environment = new Environment(new Configuration()));

      _export('environment', environment);

      _export('default', environment);

      _export('ENV', ENV = environment.ENV);

      _export('config', config = environment.config);

      _export('json', json = environment.json);

      _export('ENV', ENV);

      _export('config', config);

      _export('json', json);

      new Test({
        ENV: ENV,
        config: config,
        json: json
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
