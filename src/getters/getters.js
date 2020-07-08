export default {
      //处理第一次显示的数据，里面需要一个定时器，延迟处理，不然会跟actions同时处理，导致里面的i报错未定义
      dataloading : function(state){
        state.maplist=""
        state.kong = []
        let sl = state.count;
        //创建一个空数组接收处理第一次显示的数据
        let show = [];
         var itemout = setTimeout(function(){
          for(var i = 0; i <= sl - 1 ; i++){
            //处理过后插入空数组
            show.push(state.maplist.mapList[i]);
            clearTimeout(itemout);
        }; 
        }, 500);
       
         return state.kong = show 
           },
  
      dataloading2 : function(state){
           //第二次调用时清空第一次显示的数据
            
            state.kong = []
            let sl = state.count;
            //创建一个空数组接收处理第一次显示的数据
            var show2 = state.kong;
            for(var i = 0; i <= sl - 1 ; i++){
                //处理过后插入空数组
                show2.push(state.maplist.mapList[i]);
            };  
            //修改stroe里面的处理过后数组
            return state.kong = show2
               },
             
            //分类页面第一次显示调用
            classitem : function(state){
             //这里清空的原因是，首页跳转过来时已经存储了数据所以要清空一下
            state.maplist=""
             state.kong = []
             let sl = state.count;
             //创建一个空数组接收处理第一次显示的数据
             let show = [];
              var itemout = setTimeout(function(){
               for(var i = 0; i <= sl - 1 ; i++){
                 //处理过后插入空数组
                 show.push(state.maplist.mapList[i]);
                 clearTimeout(itemout);
             }; 
             }, 500);
            
              return state.kong = show 
                },
}
