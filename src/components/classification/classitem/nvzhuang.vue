<template>
    <div class="allsp"  >
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
    
</template>

<script>
import popup from "../../popup.vue"
export default {
  props: ["datalist"],
  name:"nvzhuang",
     data(){
    return {

     isshow:false,
     childsj:""
    }
  },
  components: {
    popup  
  },

methods:  {



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
   
clickpopup(){
     this.isshow = false;
   //设置遮罩层关闭后开始滚动
    let top = -parseInt(document.body.style.top);
    document.body.style.position = 'static';
    document.body.style.top = 0;
    window.scrollTo(0, top);


   },
   


    
},
}


</script>

<style lang="stylus" scoped>
.allsp{
    width: 100%;
    height: 100%;
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