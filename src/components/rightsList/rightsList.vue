<template>
  <div>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="rightsImg in rightsImgs" :key="rightsImg.id">
      <img :src="rightsImg.src" alt="">
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>

  <div style="color: red;font-size: 18px;">模拟使用home组件的数据
    <ul>
      <li>姓名{{userInfo.age}}</li>
      <li>姓名{{userInfo.name}}</li>
    </ul>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: true,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  watch: {
  },
  computed: mapState({
    rightsImgs: state => state.rights.rightsImgs,
    userInfo: state => state.home.userInfo
  }),
  methods: {
  },
  created () {
    this.$store.dispatch('getRightsImgs')
  }
}
</script>

<style lang="css">
  @import "../../lib/swiper/dist/css/swiper.min.css";
</style>
