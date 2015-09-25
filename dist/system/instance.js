System.register(['./environment'], function (_export) {
  'use strict';

  var Environment, environment;
  return {
    setters: [function (_environment) {
      Environment = _environment.Environment;
    }],
    execute: function () {
      environment = new Environment();

      _export('environment', environment);

      _export('default', environment);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzttQkFDVyxXQUFXOzs7aUNBRGIsV0FBVzs7O0FBQ1QsaUJBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRTs7Ozt5QkFDM0IsV0FBVyIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5leHBvcnQgbGV0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KCk7XG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcbiJdfQ==