(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['three'],
      __esModule: true,
    };
  }

  define('three', [], vendorModule);
})();
