<template>
<div class="www">
   <h1>{{a}}</h1>
</div>
</template>

<script>
export default {
  name: 'refresh',
  data () {
    return {
      a:"请使用移动设备查看"
    }
  },
created(){
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
 //这里是移动端
  this.$router.push("/index")
}else{
  return
}
},
}
</script>
<style lang="stylus" scoped>

.www{
  width 100%
  height 200px
} 

h1{
 margin 0 auto

 
}


</style>