import *as type from "../type/type.js"
export default {
 //把数据库获取的数据放到maplist里
 [type.DLoad](state,payload){
    state.maplist = payload
},
//修改每次增加数据所需得值
[type.changecount](state,payload){
    state.count = payload
},
}
