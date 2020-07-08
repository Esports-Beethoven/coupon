<template>
       <div >
        <div class="title"  >
            <router-link to="/index" tag="span" class="title1" >
            <p class="title2"></p>
            <p class="title3">返回</p>
            </router-link>
             <span class="title4">{{$route.name}}</span>
        </div>   
        <div class="content"  >
        <span class="content1" >
            <span class="content2"  v-for="(item,index) in tabNav" :key="index"  @click="routerGo(item.url)" >
                <p :class="{cur: item.name == $route.name}"  >{{item.name}}</p>
            </span>
           </span>
           </div>

            <router-view class="shangping" :datalist="datalist"    ></router-view>

            
    </div>
</template>

<script>

export default {
   
    data () {
        return {
             oleft:"",
             scll :"",
            datalist : "",
            tabNav:[
                {
                url:"/classindex/nvz",
                name:'女装',
                },
                {
                url:"/classindex/nanz",
                name:'男装'
                },
                {
                url:"/classindex/ny",
                name:'内衣',
                },
                {
                url:"/classindex/mz",
                name:'美妆',
                },
                {
                url:"/classindex/sp",
                name:'食品',
                },
                {
                url:"/classindex/sj",
                name:'手机数码',
                },
                {
                url:"/classindex/jj",
                name:'居家百货',
                },
                {
                url:"/classindex/xb",
                name:'箱包',
                }
            ]
        }
    },

created () {
 
 window.addEventListener('scroll',this.handleScroll,true)
},

mounted () {
let oleft = document.querySelector(".cur").offsetLeft /2 
 let sss = document.querySelector(".content")
 sss.scrollLeft = oleft
},

watch: {

 $route:{

     handler(){

   if(this.$route.path == "/classindex/nvz"){     //1
            //向数据库发起请求
      this.$store.dispatch("nvzhuang")   
       //发起页面第一次显示的数据请求
      this.$store.getters.classitem
      this.datalist = this.$store.state.kong


    } else if(this.$route.path == "/classindex/nanz"){  //2
            //向数据库发起请求
      this.$store.dispatch("nanzhuang") 
       //发起页面第一次显示的数据请求
      this.$store.getters.classitem
      this.datalist = this.$store.state.kong
  console.log("3")




    }else if(this.$route.path == "/classindex/ny"){  //3
            //向数据库发起请求
      this.$store.dispatch("neiyi") 
       //发起页面第一次显示的数据请求
      this.$store.getters.classitem
      this.datalist = this.$store.state.kong


    } else if(this.$route.path == "/classindex/mz"){ //4
            //向数据库发起请求
      this.$store.dispatch("meizhuang") 
       //发起页面第一次显示的数据请求
      this.$store.getters.classitem
      this.datalist = this.$store.state.kong
        

    }    else if(this.$route.path == "/classindex/sp"){ //5
            //向数据库发起请求
      this.$store.dispatch("shipin") 
       //发起页面第一次显示的数据请求
      this.$store.getters.classitem
      this.datalist = this.$store.state.kong
      

    }     else if(this.$route.path == "/classindex/sj"){ //6
            //向数据库发起请求
      this.$store.dispatch("shouji") 
       //发起页面第一次显示的数据请求
      this.$store.getters.classitem
      this.datalist = this.$store.state.kong
      

    }    else if(this.$route.path == "/classindex/jj"){ //7
            //向数据库发起请求
      this.$store.dispatch("jujia") 
       //发起页面第一次显示的数据请求
      this.$store.getters.classitem
      this.datalist = this.$store.state.kong
  

    }     else if(this.$route.path == "/classindex/xb"){ //8
            //向数据库发起请求
      this.$store.dispatch("xiangbao") 
       //发起页面第一次显示的数据请求
      this.$store.getters.classitem
      this.datalist = this.$store.state.kong

    }
     },
   immediate: true
     },

},

    methods: {

routerGo(url){
        console.log("1")
         if(this.$route.path ==  url )
         { console.log("重复点击不跳转") 
         return 
         } else {
           console.log("2")
         this.$router.push({path:url})
        this.$router.go(0)
          }
      },

//滚轮监听事件方法
handleScroll: function(){
     //判断滚动条是否接近底部  公式  （元素轮动距离top的值+当前可见区域的高）/ 整个元素的高  是否大于 0.7左右 
           var a = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
           var b = document.documentElement.clientHeight;
           var c = document.documentElement.offsetHeight;
     //如果瀑布流接近底部进行数据请求
           if(((a+b)/c)>= 0.9){ 
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
    }
    
}

  }

</script>

<style lang="stylus" scoped>

.title{
position: fixed;
width: 100%;
height: 50px;
background-color: #f00;
z-index: 2222;
top:0px;
}

.title1{   
position: absolute;
margin-left: 5%;
margin-top: 15px;
}

.title2{
width 20px;
height 20px;
background: url(../../picture/fanhui.png)  no-repeat ;
background-position: 50% 55%;
background-size: 80% 70%;
float:left;
}

.title3{
color: white;
float:left;
font-size: 14px;
}

.title4{
color: #fff;
position: absolute;
margin-left: 46%;
margin-top: 12px;
}

.content{
    width: 100%;
    height: 60px;
    position: fixed;
    overflow-x: auto;
    top: 50px;
    z-index: 2222;
    background-color: white;
}

.content1{
width: 560px;
height:50px;
position: absolute;

}

.content2{
padding-left: 15px;
padding-right: 15px;
height: 50px;
background: #fff;
color: black ;
float: left;
list-style-type: none;
line-height: 50px;
text-align: center;
font-size: 15px;
}



/* 下面是隐藏横向滚动条 */
::-webkit-scrollbar {   
width: 0;
height: 0;
background-color: rgba(240,240,240,0)
}

.shangping{
width: 100%;
position: relative;
top: 100px;
}

.cur{
    border: 0;
    border-bottom: 2px solid #fd2b22;
    color: #e91e63;
}
</style>