<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="tupian">
    <swiper-slide ><img src="../picture/duanwu.jpg" alt="五一"></swiper-slide>
    <swiper-slide><img src="../picture/duanwu1.jpg" alt="端午"></swiper-slide>
    <swiper-slide><img src="../picture/duanwu.jpg" alt="端午"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
   data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
          },
            loop : true,
            preventClicksPropagation : false,
            autoplay: {
                disableOnInteraction: false,
          },
  on:{
    tap: function(){
      if(this.realIndex==0){
          alert("didi1")
      }else if(this.realIndex==1){
          alert("erzi2")
      }else if(this.realIndex==2){
          alert("sdf3")
      }
    },
  },
          // Some Swiper option/callback...
        }
      }
    },
     computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
      mounted() {

    },


}
</script>

<style lang="stylus" scoped>

.swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

.tupian img{
  width :100%;
  height 100%
}

</style>