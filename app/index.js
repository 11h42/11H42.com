import * as nodeStatic from 'node-static';
import * as stylesheet from '../assets/styles/app.scss';
import * as http from 'http';

var file = new nodeStatic.Server('./dist');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);