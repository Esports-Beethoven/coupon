<template>
<div class="content1">

<div  class="search">
   <span class="search1">
       <p class="search2"></p>
       <router-link to="/searchitem" tag="p"  class="search3">点击搜索商品名或粘贴宝贝标题</router-link>
   </span>
</div>

  <div class="classbackground">

     <span  class="classification">

       <span class="indexswiper">
        <swiper></swiper>
       </span>
  
         <span class="classicon" >
           <span class="classicon1">

             <router-link to="/classindex/nvz" tag="div"  class="icon" @click.native="tiaozhuan">
               <img  class="iconimg" src="../picture/images/icon_1.png" >
               <p    class="classname">女装</p>
             </router-link>
             <router-link to="/classindex/nanz" tag="div" class="icon" @click.native="tiaozhuan">
               <img  class="iconimg" src="../picture/images/icon_2.png" >
               <p    class="classname">男装</p>
             </router-link>
             <router-link to="/classindex/ny" tag="div" class="icon" @click.native="tiaozhuan">
               <img  class="iconimg" src="../picture/images/icon_3.png" >
               <p    class="classname">内衣</p>
             </router-link>
             <router-link to="/classindex/mz" tag="div" class="icon" @click.native="tiaozhuan">
               <img id="4"  class="iconimg" src="../picture/images/icon_4.png" >
               <p   id="4"  class="classname">美妆</p>
             </router-link>
             <router-link to="/classindex/sp" tag="div" class="icon" @click.native="tiaozhuan">
               <img id="5" class="iconimg" src="../picture/images/icon_5.png" >
               <p   id="5" class="classname">食品</p>
             </router-link>
             <router-link to="/classindex/sj" tag="div" class="icon" @click.native="tiaozhuan">
               <img id="6" class="iconimg" src="../picture/images/icon_6.png" >
               <p   id="6" class="classname">手机数码</p>
             </router-link>
             <router-link to="/classindex/jj" tag="div" class="icon" @click.native="tiaozhuan">
               <img id="7" class="iconimg" src="../picture/images/icon_7.png" >
               <p   id="7" class="classname">居家百货</p>
             </router-link>
             <router-link to="/classindex/xb" tag="div" class="icon" @click.native="tiaozhuan">
               <img id="8" class="iconimg" src="../picture/images/icon_8.png" >
               <p   id="8" class="classname">箱包</p>
             </router-link>

            </span>
         </span>
    </span>
</div>

<div class="allsp">
    <div class="all"  v-for="(item,index) in datalist" :key="index" @click="sonsj(item)" >
            <img class="itempicture" :src="item.sppicture" alt="">
            <span class="title"  >{{item.spname}}</span>
          <p class="money">
             <span class="money1">￥</span>
             <span class="money2">{{item.spjg-item.couponrmb}}</span>
             <span class="money3">￥{{item.spjg}}</span>
             <span class="money4">{{item.couponrmb}}元券</span>
          </p>
    </div>
        <popup v-show ="isshow" @clickpopup="clickpopup" :childsj="childsj" ></popup>
    </div>
</div>
</template>

<script>
import popup from "./popup.vue"
import swiper from "./swiper"
export default {
  name: "allsp",

  data(){
    return {
     datalist : "",
     isshow:false,
     childsj:""
    }
  },
components: {
  popup,
  swiper
},

created(){
   //向数据库发起请求
  this.$store.dispatch("downLoad") 
   //发起页面第一次显示的数据请求
  this.$store.getters.dataloading

  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
   return
}else{
  this.$router.push("/refresh")
 
}

},

mounted () {
  //在组件加载完毕时，让页面显示第一次设置固定的数据 等于 处理过的kong数组。
   this.datalist = this.$store.state.kong
  //组件加载完毕时，添加一个srcoll滚轮事件监听
   window.addEventListener('scroll', this.handleScroll, true) 
  },


    
methods: {
//跳转刷新页面， 报错：如果首页已经加载完全部数据，再按跳转会导致 跳转的第一个页面不会自动请求数据 所以需要跳转后第一时间刷新
tiaozhuan(){
    this.$router.go(0)
},

//点击把当前数据props给子组件（淘口令界面）
   sonsj(item){
     this.isshow = !this.isshow
     //向子组件传入当前数据
     this.childsj = item
     //设置遮罩层后停止滚动
     //获取滚动条到top上面的距离
     var d = document.body.scrollTop || document.documentElement.scrollTop  
       document.body.style.position="fixed";
       document.body.style.top=-d+'px'
   },
   
   //点击关闭（淘口令界面）
   clickpopup(){
     this.isshow = false;
   //设置遮罩层关闭后开始滚动
    let top = -parseInt(document.body.style.top);
    document.body.style.position = 'static';
    document.body.style.top = 0;
    window.scrollTo(0, top);


   },
   
     //滚轮监听事件方法
   handleScroll: function(){
     //判断滚动条是否接近底部  公式  （元素轮动距离top的值+当前可见区域的高）/ 整个元素的高  是否大于 0.7左右 
           var a = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
           var b = document.documentElement.clientHeight;
           var c = document.documentElement.offsetHeight;
     //如果瀑布流接近底部进行数据请求
           if(((a+b)/c)> 0.9){ 
             console.log(a)
             console.log(b)
             console.log(c)
            //设置每次每次增加的数值（每次增加5条）
            let count = this.$store.state.count+=5
            //判断是否还有数据可加载
               if (count >= this.$store.state.maplist.mapList.length){
            //如果没有数据可加载就让初始显示的值 变为 总数据的总量  ，这样能让他不在继续调用数据请求
               count = this.$store.state.maplist.mapList.length
               console.log("没有数据了弟弟")
            //顺便把滚动条监听事件给清楚掉
            window.removeEventListener('scroll',this.handleScroll,true);
            }
            //发起mutation请求，修改state里面的 每次增加条数
            this.$store.commit('changecount',count)
              //当滚轮接近底部时候 调用getters 请求新的数据
            this.datalist = this.$store.getters.dataloading2
           }
    },

},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

.content1{
    overflow auto;
    width 100%;
    height 100%;
}

.search{
    width 100%;
    height 60px
    background-color red;
    position fixed ;
    top:0
    z-index 3333
}
.search1{
    width: 90%;
    height: 35px;
    background-color: #fff;
    position: absolute;
    top: 15px;
    left: 20px;
    border-radius: 40px;
}
.search2{
    width: 30px;
    height: 30px;
    border-radius: 40px;
    background url(../picture/search_icon.png) no-repeat;
    background-position: 50% 50%;
    background-size: 80% 80%;
    margin-top: 4px;
    margin-left: 9px;
    float left 
}
.search3{
    width: 73%;
    height: 24px;
    float: left;
    margin-top: 7px;
    text-align: left;
    margin-left: 6px;
    color #8d8d8d;
    font-size: 15px;
}

.classbackground{
    width: 100%;
    float: left;
        margin-top: 40px;
}

.classification{
    width: 100%;
    background-color: #f00;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    float: left;
}

.indexswiper{
    width: 100%;
    height: 200px;
    float: left;
    margin-top: 33px;
}
.classicon{
    width: 94%;
    float: left;
    position: relative;
    top: 25px;
    left: 3%;
    background-color: white;
    border-radius: 15px;
}

.classicon1{
    width: 100%;
}

.icon{
    width: 25%;
    height: 50%;
    float: left;
    text-align: center;
    background-color: #fff;
    border-radius: 15px;
}

.iconimg{
    width: 50%;
    height: 50%;
    padding: 25px 25px 7px 25px;
}

.classname{
  margin-bottom: 5px;
  font-size 12px;
}

.allsp{
width: 100%;
    height: 100%;
    float: left;
    margin-top: 35px;
}

 .all{
  background-color :#ffff;
  box-shadow:0px 0px  1px 0px #f5f5f5;
  background-color :#fff;
  border-radius :5px;
  border:solid 1px #fff
  margin :1%;
  align-content :center;
  width : 47%;
  float :left;
  font-size :12px;
 }

.itempicture {
  padding :5px 5px ;
  width :95%;
  float:left;
}


.title{
  line-height :20px;
  height :30px;
  float left;
  padding :11px;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; //规定几行显示省略号
  -webkit-box-orient: vertical;
}

.money{
   background-color :#ffff;
   float :left;
   width: 100% ;
   height 15px;
   padding :8px 0 20px 0;
}

.money1{
  padding :0 0 0 15px;
  color :red;
  font-size :10px;
}

.money2{
 color :red;
 font-size :18px;
}

.money3{
  text-decoration-line: line-through;
  font-size :10px;
  padding :0 0 0 4px;
}

.money4{
fons-scale :10px;
color:red;
border: 1px solid #ffc1c4;
border-radius: 4px;
margin: 0 20px 0 0;
padding: 0 5px;
float :right;
}

</style>
