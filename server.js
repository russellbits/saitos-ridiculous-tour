var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/')).listen(8080, function () {
    console.log('Ridiculous Tour test running on 8080...');
});
