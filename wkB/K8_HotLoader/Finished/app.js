var path                  = require('path'),
    express               = require('express'),
    webpack               = require('webpack'),
    webpackMiddleware     = require('webpack-dev-middleware'),
    webpackHotMiddleware  = require('webpack-hot-middleware'),     config                = require('./webpack.config.js');

const app             = express(),
      compiler        = webpack(config);

app.use(express.static(__dirname + '/public'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler)); // And this line
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
