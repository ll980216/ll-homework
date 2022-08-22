
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
    devServer:{
        //serve后直接打开默认浏览器
        open:true,
        port:666     //[0,65535]端口号
    },
    //配置模块解析
    module:{
        rules:[
        //css
            {
                //test:正则,匹配文件
                //use:[]指定匹配上的文件使用什么loader
                //use解析是从后往前解析
                test:/\.css$/,
                //先使用style后用css
                use:['style-loader','css-loader']

        },
        //less
        {
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader']
        },
        //url
        //在正则当中() 
        {
            //通过type指定资源模块怎么处理图片
            //type:'asset/resource' 打包成单独的文件
            test:/\.(png|jpg|gif|jpeg)$/,
            type:'asset/resource'
        }
       
    ]
    }
}