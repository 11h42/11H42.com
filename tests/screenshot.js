const Pageres = require('pageres');

const pageres = new Pageres({
        delay: 2,
        filename: '<%= date %>-<%= time %>.<%= url %>-<%= size %><%= crop %>'
    })
    .src('11h42.com', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
    .dest(__dirname + '/screenshots')
    .run()
    .then(function () {
       console.log('done')
    })
    .catch(function () {
       console.error('fail');
    });