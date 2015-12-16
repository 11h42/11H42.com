import * as static from 'node-static';
import * as stylesheet from './styles/app.scss';

var file = new static.Server('./dist');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);