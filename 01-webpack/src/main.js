//按需引入:不可以修改名字
import {marquee} from './marquee.js'
//默认导出：可修改名
import tabs from './tabs.js'

marquee()
tabs()

//引入css
import './styles/index.css'

//引入less
import './styles/index.less'

//引入图片
//图片1
import gifSrc from './assets/1.gif'                 //引入图片路径
const img1 =document.createElement('img')           //创建Img1
img1.src = gifSrc                                   //img.src = 引入的路径
document.body.appendChild(img1)                     //文档末尾插入图片

//图片2
import pngSrc from './assets/logo_small.png'
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)


import './assets/fonts/iconfont.css'

class Person {
    name = '张三'
    age = 18
}
console.log(Person);