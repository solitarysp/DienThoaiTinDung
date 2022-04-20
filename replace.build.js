var replace = require('replace-in-file');
var moment = require('moment');

var buildDate = moment().format('HH:mm DD-MM-YYYY ');

var options = {
  files: [
    'src/environments/environment.ts',
    'src/environments/environment.prod.ts',
  ],
  from: /buildDate: '(.*)'/g,
  to: "buildDate: '" + buildDate + "'",
  allowEmptyPaths: false
};

var options2 = {
  files: 'src/app/**',
  from: /timeLastBuildFixCache = '(.*)'/g,
  to: "timeLastBuildFixCache = '" + buildDate + "'",
  allowEmptyPaths: false
};

try {
  replace.sync(options);
  replace.sync(options2);
  console.log('Build Date: ' + buildDate);
} catch (error) {
  console.error('Error occurred:', error);
  throw error;
}
