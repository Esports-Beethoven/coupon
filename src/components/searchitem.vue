<template>
    <div >
        <div class="searchitem">
         <router-link to="/index" class="retrun" >
          <span class="returnpng"></span>
          <span class="return1">返回</span>
         </router-link>
           <span class="searchpass">搜券券</span>
        <span class="searchitem1">
            <input tepy="text" class="searchitem2" v-model="inputdata">
            <p class="searchitem3" @click="dispose(inputdata)">搜索</p>
        </span>
    </div>
   <div id="allsp">
       <div v-show="isitemshow"  class="all"  v-for="(item,index) in searchdata" :key="index" @click="sonsj(item)" >
            <img :src="item.sppicture" alt="">
            <span class="title"  >{{item.spname}}</span>
            <p class="money" >
             <span class="money1">￥</span>
             <span class="money2">{{item.spjg-item.couponrmb}}</span>
             <span class="money3">￥{{item.spjg}}</span>
             <span class="money4">{{item.couponrmb}}元券</span>
            </p>
       </div>
    <popup v-show ="isshow" @clickpopup="clickpopup" :childsj="childsj" ></popup>
   </div>

        <h2 v-show="prompt" class="prompt">
         抱歉！没有搜到相关内容
        </h2>
          
    </div>
</template>

<script>
import popup from "./popup.vue"
export default {
  data(){
    return{
    isitemshow:false,
    alldata:"",
    inputdata:"",
    prompt:false,
    isshow : false,
    searchdata:"",
    childsj:""
    }
  },
  
  components: {
    popup
  },
  created () {
  //向数据库发起请求
  this.$store.dispatch("downLoad") 

  },

  mounted () {

  //组件加载完毕时，添加一个srcoll滚轮事件监听
   window.addEventListener('scroll', this.handleScroll, true) 
  },
  

  methods: {
   fan(){
     alert("我是你爸爸")
   },


   //领取优惠券弹窗点击事件
    sonsj(item){
     this.isshow = !this.isshow
     //向子组件传入当前数据
     this.childsj = item
     //设置遮罩层后停止滚动
     document.body.style.overflow='hidden';
   },

   //设置遮罩层出现后停止滚动
   clickpopup(){
     this.isshow = false;
   //设置遮罩层关闭后开始滚动
     document.body.style.overflow='';
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

    //搜索的点击事件
    dispose(inputdata){
     //声明一个用来装搜索出来的数据  的数组
     var kong2 = [];
      // 我这里直接return（也可赋给变量return变量出去）
       if (this.inputdata == "") {
             this.isitemshow = false   // 这里变为true了
             this.prompt = true   //这里变为true了
          }else {
              this.searchdata =  this.$store.state.maplist.mapList.filter(item => {
                 //判断是否与输入的内如相关
                 if(item.spname.includes(inputdata)){
                   kong2.push(item)
                   return kong2
                     }
                   })
                  this.isitemshow = true
                  this.prompt = false
      //因为filter匹配条件成功 会反回一个空数组，因此可以用来判断是否查到相关数据
      if(this.searchdata.length==0){
              this.isitemshow = false
              this.prompt = true
             }
        }

      }
  }

}
</script>

<style lang="stylus" scoped>

#cear{
  height 100%
  width 100%
}



.searchitem{
    width: 100%;
    height: 150px;
    background-color: #f00;
    position: fixed;
    top: 0;
    z-index: 3333;
}

.retrun{
    top: 30px;
    left: 40px;
    position: fixed;
    width 60px
}

.return1{
    color: white;
    position absolute
    margin-left: 20px;
}


.searchpass{
  position : absolute;
  left: 45%;
  color white;
  top: 30px;

}

.searchitem1{
    width: 100%;
    position: absolute;
    margin-top: 90px;
}

.searchitem2{
    position: fixed;
    width: 65%;
    height: 40px;
    text-align: center;
    color: #000;
    font-size: 14px;
    margin-left: 10%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border: none;
}
.searchitem3{
    height: 40px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    width: 55px;
    background-color: #f592b4;
    position: fixed;
    text-align: center;
    font-size: 18px;
    margin-left: 75%;
    line-height: 41px;
}


#allsp{
    width 100%;
    height 100%;
    overflow auto;
    position: fixed;
    margin-top :150px
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

img {
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



.prompt{
    align-content: center;
    width: 47%;
    float: left;
    font-size: 11px;
    color: black;
    position: fixed;
    top: 180px;

}
</style>