
//webpack 
//webpack5 使用内置模块

const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    //开发模式
    mode: 'development',
    entry: '/src/main.js',
    output: {
        path: path.join(__dirname, 'bundle'),   //path.join拼接路径,__dirname当前文件夹目录
        filename: 'bundle.js',
        clean: true
    },
    //插件 ---自动生成Html文件
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    //服务器
    devServer: {
        open: true,
        port: 666
    },
    //配置模块解析
    module: {
        rules: [
            //css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: { url: false }
                }]
            },
            //less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },

            {
                test: /\.(png|jpg|gif|jpeg)$/,
                type: 'asset',
                //指定文件夹
                generator: {
                    filename: 'images/[name]-[hash:6][ext]'
                },
                //指定以多少kb为界限
                parser: {
                    dataUrlCondition: {
                        maxSize: 25 * 1024
                    }
                }
            },
            //字体图标
            // {
            //     //解析css文件中引入的文件
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //     //asset主要是打包文件（图片、字体图标、.txt、.mps、.mps4、.avi）
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'fonts/[name]-[hash:6][ext]'
            //     }

            // }


            // babel
            // babel: js的语法降级的

            // 1. 下载babel: yarn add @babel/core @babel/preset-env babel-loader
            // 2. module.rules.{ test:/\.js$/,use:['babel-loader] }
            // 3. 在项目根目录下, 新建 babel.config.js


            //假如我写了一个包: wzk 上传到npm以后
            // yarn add wzk

            //假如我写了一个包: wzk ,上传到npm的时候, 在npm注册了一个自己作用域 sucan, 我把wzk包上传到sucan
            // yarn add @sucan/wzk

            // @babel/core
            // 包名: core  只不过是 babel账户的core
            // @vue/cli
            // 包名: cli --> command-line-interface

            // @babel/core 核心包

            // @babel/preset-env
            // 比如 箭头函数 --> function  class --> function



            {
                test: /\.js$/,
                // exclude: /(node_modules)/,
                use: ['babel-loader']
            }


        ]
    }
}