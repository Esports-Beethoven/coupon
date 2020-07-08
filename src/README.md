文件夹目录：

vuex 做了拆分。
stroe // vuex 中的stroe

type // 存放 mutations、actions使用的事件类名

mutations // 里面是 vuex 中的 mutations 请求

actions  // 里面是 vuex 中的 actions 请求

getters  // 里面是 vuex 中的 getter 请求


css // 组件 swiper.vue 轮播图的css
js  // 组件 swiper.vue 轮播图的css

picture //  存放网站中 使用的轮播图 和 分类图标

plugins // 存放 分类路由页面 中的所有子路由 

-----------------------------------------------------------------------------------------------------------
components  文件夹 // 存储所有组件 


components 里文件目录 

index.vue // 首页组件

popup.vue // 点击商品弹出的领券 组件

refresh.vue // 用于显示  提示 用户 当前是PC端还是移动端 浏览 的组件

searchitem.vue // 站内首页搜索组件

swiper.vue //轮播图组件


components/classification  文件夹   // 分类页面所有的组件

-- classindex.vue // 分类的父组件   也是分类页面的父 路由  

components/classification/classitem  文件夹  //分类页面所有的子组件  也是子路由  

--- nvzhuang.vue    // 女装
    nanzhuang .vue  // 男装
    neiyi.vue       // 内衣
    meizhuang.vue   // 美妆
    shiping.vue     // 食品
    shouji.vue      // 手机
    xiangbao.vue    // 箱包
    jujia.vue       // 居家
