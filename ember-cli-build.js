'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ['public/assets/images/']
    }
  });

  app.import('node_modules/three/build/three.min.js');
  app.import('vendor/shims/three.js');

  return app.toTree();
};
