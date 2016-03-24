var path              = require('path'),
    express           = require('express'),
    webpack           = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    config            = require('./webpack.config.js');

const app             = express(),
      compiler        = webpack(config);

app.use(express.static(__dirname + '/public'));
app.use(webpackMiddleware(compiler));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
