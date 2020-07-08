<template>
<div>

<div class="popup">
    <span class="mask"></span>
   <span class="coupons1" v-show="cdy">
       <span class="box">
        <img :src="childsj.sppicture" alt="" class="couponpic">   
        <p class="couponrmb">
            <span class="couponrmb1">￥</span>
            <span class="couponrmb2">{{childsj.couponrmb}}</span>
             <span class="couponrmb3">元券</span>
        </p>
       </span> 
        <p class="couponname">{{childsj.spname}}</p>
        <p class="couponpass">{{childsj.couponpass}}</p>
        <div class="copy" @click="change">一键复制优惠券淘口令</div>
        <div class="prompt" >若复制失败，请长按淘口令手动复制</div>
    <span class="bottom" @click="$emit('clickpopup')" >X</span> 
   </span>
   <div class="success" v-show="showsuccess">
        <span class="success1">复制成功</span>
        <span class="success2">
        <span class="success3">淘口令{{childsj.couponpass}}已复制!打开【手机淘宝】即可优惠下单！</span>
        </span>
    </div>
</div>

</div>
</template>
<script>
import Clipboard from 'clipboard'
export default {
    props: ["childsj"],
  data () {
      return {
          showsuccess : false,
          cdy:true,
      }
  },
  mounted () {

new Clipboard('.copy', {
    text: function(trigger) {
        return trigger.previousElementSibling.innerText;
        // return trigger.nextElementSibling.innerText; 返回 当前copy的上一个兄弟元素的内容
        // return document.getElementById('id').innerText; 返回 选定元素的元素的内容
    }
});

 
  },
  methods: {

change(){
var vm = this
    vm.cdy = !vm.cdy;
    vm.showsuccess = !vm.showsuccess
     var itemout = setTimeout(function(){
    vm.cdy = !vm.cdy;
    vm.showsuccess = !vm.showsuccess
      vm.$emit('clickpopup')
       clearTimeout(itemout)
      
       },2000)
  }
   }
 
}
</script>

<style lang="stylus">

.popup{
    width :100%;
    height 100%
}


.mask{
    position: fixed;
    z-index:4444;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
     background: rgba(0,0,0,.6);
     height :100%;
     width :100%
}

.coupons1{
    background: url(../picture/coupons.png) no-repeat ;
    background-position: 50% 50%;background-size: 100% 100%;
    border-radius: 12px;
    z-index: 5000;
    width: 460px;
    height: 570px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
}

.box{
    
    width: 250px;
    height: 105px;
    background-color: rgba(198,198,198,0.21);
    position: absolute;
    left: 23%;
    top: 24%;
    border-radius: 7px;
}

.couponpic{
width: 105px;
    height: 105px;
    border-radius: 4px;
} 

.couponrmb{
    color:red;
    width 145px;
    height  105px;
    float :right
}
.couponrmb1{
    margin-left: 10%;
    margin-top: 30%;
    margin-right: 5px;
    float: left;
    font-size: 22px;
    font-family: fantasy;
}

.couponrmb2{
    margin-left: 0px;
    margin-top: 15%;
    font-size: 50px;
    font-family: fantasy;
    float: left;
    color: red;
}
.couponrmb3{
margin-top: 30%;
    float: left;
    font-size: 17px;
    font-family: fantasy;
    margin-left: 4px;
}

.couponname{
line-height: 20px;
    width: 250px;
    height: 20px;
    background-color: rgba(198,198,198,0.21);
    position: absolute;
    left: 23%;
    top: 45%;
    border-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    

}
.couponpass{
    border-radius :3px;
    width: 210px;
    height: 30px;
    background-color: rgba(198,198,198,0.21);
    position: absolute;
    left: 27%;
    top: 52%;
    font-size: 23px;
    font-family: unset;
    align-content: center;
    border:2px dashed  red;
    color: red;
    text-align :center;
    line-height: 30px;
}

.copy{
    line-height: 38px;
    width: 210px;
    height: 35px;
    background-color: #FFC107;
    position: absolute;
    left: 27%;
    top: 71%;
    font-size: 18px;
    font-family: unset;
    align-content: center;
    color: #fff;
    text-align: center;
    border-radius: 5px;
}

.prompt{
    width: 210px;
    height: 35px;
    position: absolute;
    left: 27%;
    top: 79%;
    font-size: 12px;
    font-family: initial;
    align-content: center;
    color: #fff;
    text-align: center;
}

.bottom{
    z-index :7777;
    border: solid 2px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background: rgba(255,255,255,0);
    position: fixed;
    border-radius: 30px;
    color: #ababab;
    align-content: right;
    font-size: 25px;
    text-align: center;
    left: 50%;
    top: 95%;
    margin: 0 auto;
    transform: translate(-50%, -50%)
    }

.success{
    background-color :black;
    z-index :9999;
    width: 250px;
    height: 105px;
    background-color: rgba(198,198,198,0.21);
    position: fixed;
    left: 18%;
    top: 36%;
    border-radius: 7px;
}
.success1{
    position: absolute;
    width: 100%;
    height: 35px;
    float: left;
    background-color: #eaeaea;
    text-align: center;
    font-family: fantasy;
    font-weight: bold;
    line-height: 32px;
}
.success2{
    position: absolute;
    width: 100%;
    height: 83px;
    float: left;
    top: 30%;
    background-color: #dedede;

}
.success3{
    position: absolute;
    width: 90%;
    height: 75px;
    float: left;
    top: 10%;
    left: 5%;
    background-color: #dedede;
}
</style>