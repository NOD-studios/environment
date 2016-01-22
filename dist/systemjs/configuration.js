'use strict';

System.register(['path'], function (_export, _context) {
  var path, Configuration;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_path) {
      path = _path.default;
    }],
    execute: function () {
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
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQmMsZ0VBQVUiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG5cbiAgc2lsZW50ID0gdHJ1ZTtcblxuICBmaWxlcyA9IFtcbiAgICAnLmVudi5sb2NhbCcsXG4gICAgJy5lbnYucHJvZHVjdGlvbicsXG4gICAgJy5lbnYudGVzdCcsXG4gICAgJy5lbnYuZGV2ZWxvcG1lbnQnLFxuICAgICcuZW52JyxcbiAgICAnLmVudi5ub2QnXG4gIF07XG5cbiAgcm9vdCA9IHBhdGguZGlybmFtZShyZXF1aXJlLm1haW4uZmlsZW5hbWUpO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
