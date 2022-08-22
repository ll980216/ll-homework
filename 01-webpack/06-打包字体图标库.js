
//webpack 
//webpack5 使用内置模块

const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //开发模式
    mode: 'production',
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
        })
    ],
    //服务器
    devServer: {
        //serve后直接打开默认浏览器
        open: true,
        port: 666     //[0,65535]端口号
    },
    //配置模块解析
    module: {
        rules: [
            //css
            {
                //test:正则,匹配文件
                //use:[]指定匹配上的文件使用什么loader
                //use解析是从后往前解析
                test: /\.css$/,
                //先使用style后用css
                use: ['style-loader',
                    //loader可以是对象形式，url：false不解析iconfont字体图标
                    {
                        loader: 'css-loader',
                        options: { url: false }
                    }]

            },
            //less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            //url
            //在正则当中() 
            {
                //通过type指定资源模块怎么处理图片
                //type:'asset/resource' 打包成单独的文件
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
            //1在pulic文件夹引用iconfont字体图标
            //2把iconfont引入在main.js入口文件中
            //3配置iconfont配置项
            // {
            //     //解析css文件中引入的文件
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //     //asset主要是打包文件（图片、字体图标、.txt、.mps、.mps4、.avi）
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'fonts/[name]-[hash:6][ext]'
            //     }

            // }

        ]
    }
}