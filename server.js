// production.js
var deployd = require('deployd');
var port = process.env.OPENSHIFT_INTERNAL_PORT;
var ip = process.env.OPENSHIFT_INTERNAL_IP
var server = deployd({
 
  env: 'production',
  db: {
    host: 'mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/',
    port: 27105,
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