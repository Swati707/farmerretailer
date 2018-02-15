//importing modules
var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.Promise = global.Promise;
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/farmerretailer', 
            {useMongoClient: true, server: { poolSize: 5 }});

//on connection
mongoose.connection.on('connected', ()=>{
    console.log("connected to database mongodb");
});
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log("error in connection to database mongodb.\n"+err);
    }
});


//adding middleware
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
const route = require('./routes/route');
const users_route = require('./routes/users');

app.use('/users', users_route);
app.use('/signup', route);

//testing server
app.get('/', function(req, res){
    console.log("at homepage");
    // res.send('<p>foobarjgrt,bf</p>');
});

//initiating the server
const port = app.get('port') || 3000;

app.listen(port, ()=>{
    console.log("server started at port: "+port);
});