#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: webpage-capture [options] <URL>')
  .help('help')
  .option('height', {
    alias: 'h',
    describe: 'Window height',
    default: 768,
  })
  .option('width', {
    alias: 'w',
    describe: 'Window width',
    default: 1366,
  })
  .epilog('copyright 2016')
  .demand(1)
  .argv;

const capture = require('./lib').default;
capture(argv._[0], {
  width: argv.w,
  height: argv.h,
});
