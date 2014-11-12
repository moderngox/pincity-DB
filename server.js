// production.js
var deployd = require('deployd');
var port = process.env.OPENSHIFT_NODEJS_PORT;
var ip = process.env.OPENSHIFT_NODEJS_IP;
var server = deployd({
 
  env: 'development',
  db: {
    host: '127.5.72.130',
    port: 27017,
    name: 'pincity',
    credentials: {
      username: 'admin',
      password: '6fEz75PT8IdQ'
    }
  }
});

server.listen(port, ip);

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});