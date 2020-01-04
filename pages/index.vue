<!-- 首页 -->
<template>
  <div class="hotel_home">
    <!-- 轮播图 -->
    <div class="hotel_home_swiper">
      <swiper-comp :swiper-list="swiperData" />
    </div>
  </div>
</template>

<script>
import SwiperComp from '@/components/home/swiperComp.vue'
export default {
  name: '',
  components: {
    SwiperComp
  },
  data() {
    return {
      swiperData: [
        {
          id: '',
          url: '',
          name: '元旦精彩特惠季<br/>团聚尽在爱彼迎',
          type: '1',
          img:
            'https://z1.muscache.cn/pictures/hongbao/marquee/original/bf90f377-8735-4338-946d-bfc042942b17.jpg'
        },
        {
          id: '',
          url: '',
          name: '南方房源推荐<br/>温暖南国，活力过冬',
          type: '0',
          img:
            'https://z1.muscache.cn/pictures/hongbao/marquee/original/32a32250-163b-4ea6-9407-06e636e2e9f4.jpg'
        },
        {
          id: '',
          url: '',
          name: '从热水壶到中文服务<br/>在国外住进熟悉的家',
          type: '0',
          img:
            'https://z1.muscache.cn/pictures/hongbao/marquee/original/4529a8ae-db36-40c3-99be-0169d2e54fd8.jpg'
        },
        {
          id: '',
          url: '',
          name: '逃离日常，品味冬趣<br/>周末特惠房源推荐',
          type: '0',
          img:
            'https://z1.muscache.cn/pictures/hongbao/marquee/original/b7907972-c4ba-4e19-8737-92cb246973f6.jpg'
        },
        {
          id: '',
          url: '',
          name: '东南亚家庭游<br/>住进花海，温暖过年',
          type: '0',
          img:
            'https://z1.muscache.cn/pictures/hongbao/marquee/original/385c2ae0-20a1-4312-9921-e1a65a7e22ba.jpg'
        },
        {
          id: '',
          url: '',
          name: '人气冰雪圣地<br/>奔向雪国，体验冬趣',
          type: '0',
          img:
            'https://z1.muscache.cn/pictures/hongbao/marquee/original/c4befdd6-2d67-40f1-ae7a-5c37494fcb4a.jpg'
        },
        {
          id: '',
          url: '',
          name: '跳上高铁去旅行<br/>游南逛北过冬天',
          type: '0',
          img:
            'https://z1.muscache.cn/pictures/hongbao/marquee/original/3520754b-3114-463e-b43b-65828430fab6.jpg'
        }
      ] // 轮播图数据
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style scoped lang="scss">
.hotel_home_swiper {
  width: 100%;
  height: 529px;
}
</style>
