import nvzhuang from "../components/classification/classitem/nvzhuang.vue"
import nanzhuang from "../components/classification/classitem/nanzhuang.vue"
import neiyi from "../components/classification/classitem/neiyi.vue"
import meizhuang from "../components/classification/classitem/meizhuang.vue"
import shiping from "../components/classification/classitem/shiping.vue"
import shouji from "../components/classification/classitem/shouji.vue"
import jujia from "../components/classification/classitem/jujia.vue"
import xiangbao from "../components/classification/classitem/xiangbao.vue"

const map = [
    {
        path:"/classindex/nvz",
        name:"女装",
        component: nvzhuang,
      },
      {
       path:"/classindex/nanz",
       name:"男装",
       component: nanzhuang
     },
     {
       path:"/classindex/ny",
       name:"内衣",
       component: neiyi
     },
     {
       path:"/classindex/mz",
       name:"美妆",
       component: meizhuang
     },
     {
       path:"/classindex/sp",
       name:"食品",
       component: shiping
     },
     {
       path:"/classindex/sj",
       name:"手机数码",
       component: shouji
     },
     {
       path:"/classindex/jj",
       name:"居家百货",
       component: jujia
     },
     {
       path:"/classindex/xb",
       name:"箱包",
       component: xiangbao
     },
]

export default map;