require('babel/register');
var md = require('./tests/model');

process.stdin
  .pipe(md)
  .pipe(process.stdout);
