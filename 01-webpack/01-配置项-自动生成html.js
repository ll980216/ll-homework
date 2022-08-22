//修改webpack默认配置

//使用commonjs规范require
//引入path
const path = require("path")
//引入自动生成html插件
const htmlWebpackPlugin = require('html-webpack-plugin')

//入口出口
module.exports = {
    // webpack自定义配置
    // mode:'production':生产(打包后上线,自动开启js压缩)，'development':开发
    mode: 'production',
    // entry：入口，相对路径
    entry: '/src/main.js',

    // output：出口，绝对路径
    //output.filename:输出文件名
    output: {
        path: path.join(__dirname, 'bundle'),   //path.join拼接路径,__dirname当前文件夹目录
        filename: 'bundle.js',
        clean: true
    },
    //plugins:[]数组形式，配置webpack插件
    //webpack插件都是构造函数/类，需要new调用
    plugins: [
        //new htmlWebpackPlugin(),template:'模板路径',不设置默认无结构
        new htmlWebpackPlugin({
            template: './public/index.html',
          
        })
    ]
}