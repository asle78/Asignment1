var  express = require('express');
var path= require('path');
var config =  require('./webpack.config.js');
var webpack = require('webpack');
var devMidleware = require('webpack-dev-middleware');
var hotMidleware = require('webpack-hot-middleware');
var fs = require('fs');
var FastCSV = require('fast-csv');

var array = [];


 FastCSV.fromPath('./albums.txt', {delimiter: ';'})
 .on('data', function (data){


var album = {
   artist:data[0],
   title:data[1],
   year:data[2]
  }
  array.push(album);
 });


var app = express();
var engine = webpack(config);

app.use(devMidleware(engine, {noInfo: true, publicPath: config.output.publicPath}));
app.use(hotMidleware(engine));

app.use('/css', express.static('./node_modules/bootstrap/dist/css'));

app.get('/albums', function (req, res){
 res.json(array);
});

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000);
console.log("Server running on port 4000");

function makeObject(arr) {
 var rv = {};
 for (var i = 0; i < arr.length; ++i)
  rv[i] = arr[i];
 return rv;
}