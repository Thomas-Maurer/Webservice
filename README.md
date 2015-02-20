# Webservice
Webservice API Exo LPDW

Install dependencies

then npm start or node app.js in project root

go to http://yoururl.com/reviews/api

Enjoy !

exemple : https://secure-bayou-7207.herokuapp.com/reviews/api/

Fix bson load module error :
  Go to the file (in your project):
  'node_modules/mongoose/node_modules/mongodb/node_modules/bson/ext/index.js'
  and change
  bson = require('../build/Release/bson');
  to
  bson = require('bson');
  
:D
