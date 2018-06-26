var path = require('path');

var apos = require('apostrophe')({
  shortName: 'muse-workshop',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-workflow': {
      // IMPORTANT: if you follow the examples below,
      // be sure to set this so the templates work
      alias: 'workflow'
    },

    // Custom Stuff:
    'spectrum-color-picker':{},

    'single-island-widgets':{},
    'double-island-widgets':{},

    'top-navigation-widgets':{}
  }
});
