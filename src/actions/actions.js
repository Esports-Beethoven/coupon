import *as type from "../type/type.js"
export default {

     //首页向数据库发起请求
     async [type.downLoad]({commit}){
        var data = await fetch("data/data.json").then(res => res.json())   
       commit("DLoad",data)
     },

     //女装发起请求
     async [type.nvzhuang]({commit}){
          var data = await fetch("data/nvzhuang.json").then(res => res.json())   
         commit("DLoad",data)
       },
          
       //男装发起请求
     async [type.nanzhuang]({commit}){
          var data = await fetch("data/nanzhuang.json").then(res => res.json())   
         commit("DLoad",data)
       },
       //内衣发起请求
       async [type.neiyi]({commit}){
          var data = await fetch("data/neiyi.json").then(res => res.json())   
         commit("DLoad",data)
       },
       //美妆发起请求
       async [type.meizhuang]({commit}){
          var data = await fetch("data/meizhuang.json").then(res => res.json())   
         commit("DLoad",data)
       },
       //食品发起请求
       async [type.shipin]({commit}){
          var data = await fetch("data/shipin.json").then(res => res.json())   
         commit("DLoad",data)
       },
       //手机发起请求
       async [type.shouji]({commit}){
          var data = await fetch("data/shouji.json").then(res => res.json())   
         commit("DLoad",data)
       },
       //居家发起请求
       async [type.jujia]({commit}){
          var data = await fetch("data/jujia.json").then(res => res.json())   
         commit("DLoad",data)
       },
       //箱包发起请求
       async [type.xiangbao]({commit}){
          var data = await fetch("data/xiangbao.json").then(res => res.json())   
         commit("DLoad",data)
       },
}
