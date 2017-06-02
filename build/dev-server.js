var config = require("../webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", 'webpack/hot/dev-server');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
   hot: true,
   historyApiFallback: false,
   contentBase: './',
   publicPath: "/dist/",
   stats: { colors: true }
});
server.listen(8080);
