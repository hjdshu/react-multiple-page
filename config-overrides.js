const multipleEntry = require('react-app-rewire-multiple-entry')([
  {
    entry: 'src/page1/index.tsx',
    template: 'public/index.html',
    outPath: '/index.html'
  },
  {
    entry: 'src/page2/index.tsx',
    template: 'public/index.html',
    outPath: '/index2.html'
  },
]);

const rewireLess = require("@joiner/react-app-rewire-less-modules");

module.exports = {
  webpack: function(config, env) {
    config = rewireLess(config, env)
    multipleEntry.addMultiEntry(config);
    return config;
  }
};