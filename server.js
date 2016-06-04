var  express = require('express');
var path= require('path');
var config =  require('./webpack.config.js');
var webpack = require('webpack');
var devMidleware = require('webpack-dev-middleware');
var hotMidleware = require('webpack-hot-middleware');

var app = express();
var engine = webpack(config);

app.use(devMidleware(engine, {noInfo: true, publicPath: config.output.publicPath}));
app.use(hotMidleware(engine));

app.use('/css', express.static('./node_modules/bootstrap/dist/css'));

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000);
console.log("Server running on port 4000");