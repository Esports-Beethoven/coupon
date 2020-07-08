import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueRouter from 'vue-router';
import classmap from "./plugins/classmap.js"

Vue.use(VueRouter)  //注册路由

import 'swiper/css/swiper.css'// 轮播图的css路径
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false;

import index from "./components/index.vue"
import searchitem from "./components/searchitem.vue"
import classindex from "./components/classification/classindex.vue"
import refresh from "./components/refresh.vue"
const routes = [
    //首页
    { path:'/index',
     component: index
    },
    //搜索
    {
      path:'/searchitem',
      component: searchitem,
    },
    //空路由
    {
      path:'/refresh',
      component: refresh,
    },
    //分类组件
    {
      path:'/classindex',
      name:"分类",
      component: classindex,
      
      children: classmap
    },

   { path: '*', redirect : '/index' }
  ]
 
  
const router = new VueRouter( {routes} ) 


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
