Package.describe({
  name: 'indycloud:indycsv',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Collection to csv Export',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/INDYvishal/indycsv.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "json2csv": "3.6.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.5.1');
  api.use('ecmascript');
  api.mainModule('indycsv.js');
  api.add_files('lib.js', 'server');
  api.export('INDYcsv');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('indycloud:indycsv');
  
  api.mainModule('indycsv-tests.js');
});
