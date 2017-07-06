/**
 * Created by PC on 2017/7/6.
 */

var path=require('path');
var Htmlwebpackplugin =require('html-webpack-plugin');
module.exports={
    devtool: 'eval-source-map',
    entry:path.resolve(__dirname,'./app/index.js'),
    output:{
        path:path.resolve(__dirname,'./public'),
        filename:'bundle.js'
    },

    module:{
        loaders:[{
            test:/\.json$/,
            loader:'json-loader'
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

        },{
            test:/\.css?$/,
            exclude: /node_modules/,
            loader:'style-loader!css-loader'
        }]
    },

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    plugins:[
        new Htmlwebpackplugin({
            template:path.resolve(__dirname,'./app/index.template.html')
        })
    ]

}