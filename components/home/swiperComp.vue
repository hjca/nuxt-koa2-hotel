<!-- 轮播图组件 -->
<template>
  <div class="home_swiper_comp">
    <div
      v-for="(item, index) in swiperList"
      :key="index"
      :style="{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 300px, rgba(0, 0, 0, 0) 100%),url(' +
          item.img +
          ')'
      }"
      :class="['swiper_item', swiperIndex == index ? 'swiper_item_select' : '']"
    >
      <el-row style="margin-top: 174px;">
        <el-col :span="4">''</el-col>
        <el-col :span="16" class="home_swiper_cont">
          <div v-html="item.name" class="swiper_title"></div>

          <el-button v-if="item.type == 1" type="danger" class="getParents"
            >领千元礼包</el-button
          >

          <el-button v-else class="defaultButton">查看合集</el-button>
        </el-col>
        <el-col :span="4">''</el-col>
      </el-row>
    </div>

    <div class="home_swiper_instructions">
      <el-row>
        <el-col :span="4"><i /></el-col>
        <el-col :span="16" class="instructions_cont">
          <!-- 指示器 -->
          <div
            v-for="(item, index) in swiperList"
            :key="index"
            class="progress"
          >
            <div
              :class="[
                'progress_cont',
                swiperIndex == index ? 'progress_cont_start' : ''
              ]"
            ></div>
          </div>

          <!-- 联合搜索区域 -->
          <m-ore-search />
        </el-col>
        <el-col :span="4"><i /></el-col>
      </el-row>
    </div>

    <!-- 左箭头 -->
    <div class="home_swiper_left_arro displayFlex display_center">
      <div @click="leftSwiperChange" class="left_arrow">
        <svg-comp svg-type="leftArrow" />
      </div>
    </div>

    <!-- 右箭头 -->
    <div class="home_swiper_right_arro displayFlex display_center">
      <div @click="rightSwiperChange" class="right_arrow">
        <svg-comp svg-type="rightArrow" />
      </div>
    </div>
  </div>
</template>

<script>
import SvgComp from '@/components/publicComp/svg.vue'
import MOreSearch from '@/components/home/moreSearch.vue'
export default {
  name: '',
  components: {
    SvgComp,
    MOreSearch
  },
  props: {
    swiperList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperIndex: 0, // 下标表示
      timer: null // 定时器
    }
  },

  computed: {},

  mounted() {
    // 8秒钟切换一次轮播图
    // this.timer = setInterval(() => {
    //   this.setTimeChange()
    // }, 8000)
  },

  beforeDestroy() {
    const that = this
    clearInterval(that.timer)
  },

  methods: {
    // 左切换
    leftSwiperChange() {
      this.swiperIndex =
        this.swiperIndex === 0
          ? this.swiperList.length - 1
          : this.swiperIndex - 1
    },
    // 右切换
    rightSwiperChange() {
      this.swiperIndex =
        this.swiperIndex === this.swiperList.length - 1
          ? 0
          : this.swiperIndex + 1
    },
    // 定时器做的切换
    setTimeChange() {
      this.swiperIndex =
        this.swiperIndex === this.swiperList.length - 1
          ? 0
          : this.swiperIndex + 1
    }
  }
}
</script>
<style scoped lang="scss">
.home_swiper_comp {
  width: 100%;
  height: 100%;
  position: relative;
  .swiper_item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    opacity: 0;
  }
  .swiper_item_select {
    animation: imgIn 0.6s ease forwards;
    z-index: 3;
  }
  @keyframes imgIn {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
  .home_swiper_left_arro,
  .home_swiper_right_arro {
    width: 62px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 4;
    .left_arrow,
    .right_arrow {
      cursor: pointer;
    }
  }
  .home_swiper_left_arro {
    left: 0;
  }
  .home_swiper_right_arro {
    right: 0;
  }
  .home_swiper_cont {
    padding-left: 24px;
    .swiper_title {
      padding: 12px 0;
      margin-bottom: 15px;
      font-weight: 600;
      color: white;
      margin-right: 16px;
      font-size: 32px;
      line-height: 37px;
    }
    .getParents,
    .defaultButton {
      width: 128px;
      height: 48px;
      font-size: 16px;
      font-weight: 800;
      margin-top: 10px;
      color: #ffffff;
      border-width: 2px;
    }
    .defaultButton {
      background: transparent;
    }
  }
  .home_swiper_instructions {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 134px;
    z-index: 4;
    .el-row,
    .el-col {
      height: 100%;
    }
    .instructions_cont {
      padding-left: 24px;
      .progress {
        width: 21px;
        height: 2px;
        background: rgba(255, 255, 255, 0.3);
        margin-right: 4px;
        display: inline-block;
        .progress_cont {
          width: 0;
          height: 100%;
          background: #ffffff;
        }
        .progress_cont_start {
          animation: progress 8s linear;
        }
        @keyframes progress {
          from {
            width: 0px;
          }
          to {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
