#!/usr/bin/env node
'use strict';


const nodemon = require('nodemon');
const { resolve } = require('path');
nodemon({
  script: `${resolve(__dirname, '../lib/index.js')}`,
  ext: 'js json'
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});


