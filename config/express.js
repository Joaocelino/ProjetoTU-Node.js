var express = require('express');
var load = require('express-load');

module.exports = function() {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //PUBLIC
    app.use(express.static('app/public'));
    app.use(express.static('node_modules/bootstrap/dist/css'));
    app.use(express.static('node_modules/bootstrap/dist/js'));
    app.use(express.static('node_modules/jquery/dist'));
    app.use(express.static('node_modules/popper.js/dist'));


    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}
