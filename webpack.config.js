const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports ={
  entry: "./src/index.js",
   mode: "development",
   module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
     exclude: /(node_modules)/,
      loader: "babel-loader",
     options: { presets: ["@babel/env"]}
      },
     {
       test: /\.css$/,
       use:["style-loader", "css-loader"]
     }
     ]
  },
  resolve: { ectensions: ["*",".js","jsx"]
   },
   output: {
     path: path.resolve(_dirname,"dist/"),
     publicPath: "/dist/",  
     filename: "/bundle.js"
   },
   devServer: {
     contentBase: path.join(_dirname,"/"),
     port:3000,
     publicPath: "http://localhost:3000/dist/",
     watchContentBase: true,
     historyApiFallback: true
   },
   optimization: {
     minimizar:[
       new UglifyJsPlugin({
         uglifyOptions: {
           mangle: {
             keep_fnames: true
           }
         }

       })
     ]
   },
   plugins: [new webpack.HotModuleReplacementPlugin()]
}
