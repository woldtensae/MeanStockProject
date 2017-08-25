var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;
var app = express();

//view Engines 
//specifies that our view is in the view folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static floder sets our angular 
app.use(express.static(path.join(__dirname, 'client')));

//body parser MW
//helps us to recive forms as a whole body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//our router
app.use('/', index)
app.use('/api', tasks);

//listnes at this port for request
app.listen(port, function(){
    console.log("server started on port " + port);
});