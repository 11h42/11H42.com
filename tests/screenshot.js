const Pageres = require('pageres');

const pageres = new Pageres({
    delay: 2,
    filename: '<%= date %>-<%= time %>.<%= url %>-<%= size %><%= crop %>'
})
    .src('http://localhost:8080/', ['w3counter'])
    .src('http://localhost:8080/#!mentions-legales.html', ['w3counter'])
    .dest(__dirname + '/screenshots')
    .run()
    .then(function () {
        console.log('done')
    })
    .catch(function () {
        console.error('fail');
    });