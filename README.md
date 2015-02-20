# Webservice
Webservice API Exo LPDW

Fix bson load module error :
  Go to the file (in your project):
  'node_modules/mongoose/node_modules/mongodb/node_modules/bson/ext/index.js'
  and change
  bson = require('../build/Release/bson');
  to
  bson = require('bson');
  
:D
