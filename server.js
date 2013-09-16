#!/bin/env node

var express = require('express'),
    app = express(),
    templator = require('hbs'),
    IP_ADDR = "127.0.0.1",
    PORT = 9000;

app.listen(PORT, IP_ADDR, function() {
    console.log('listening on port ' + PORT);
});
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/view');
app.set('view engine', 'hbs');


var requirejs = require('requirejs');
requirejs.config({ nodeRequire: require });
requirejs(['./public/js/a'],
function (a) {
    app.get('/', function (req, res) {
        res.render('index', { data: a.data });
    });
});


