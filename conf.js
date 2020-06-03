exports.config = {
  // The address of a running selenium server.
 directConnect:true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'firefox'
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['./Tests/CustomerCardTests.js'],  

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};

