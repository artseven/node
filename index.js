// include modules
var    express = require('express'),
           app = express(),
          path = require('path');
    

// serve static content
app.use(express.static(path.join(__dirname, 'index.html')));

// setup server
var server = app.listen(1337);
console.log('Server is listening...');