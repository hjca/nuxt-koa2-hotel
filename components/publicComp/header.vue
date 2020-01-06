<!-- 头部搜索区域 -->
<template>
  <div class="hotel_search_area displayFlex display_betten">
    <!-- 左侧区域 -->
    <div class="displayFlex display_betten">
      <!-- 回到首页图片标记 -->
      <div @click="goHome" class="go_home displayFlex display_center">
        <svg-comp />
      </div>
      <!-- 搜索框 -->
      <search-comp />
    </div>

    <!-- 右侧区域 -->
    <div class="displayFlex display_betten menulist">
      <!-- 简体中文 -->
      <el-button type="text" class="displayFlex display_center">
        <svg-comp svg-type="language" class="svgStyle" />
        简体中文(CN)
      </el-button>

      <!-- 货币 -->
      <el-button type="text" class="displayFlex display_center">
        ￥ CNY
      </el-button>

      <!-- 手机端 -->
      <el-button type="text" class="displayFlex display_center"
        >手机端</el-button
      >

      <!-- 出租房源 -->
      <el-button
        @click="rentHouse"
        type="text"
        class="displayFlex display_center"
        >出租房源</el-button
      >

      <!-- 开展体验 -->
      <el-button
        @click="experience"
        type="text"
        class="displayFlex display_center"
        >开展体验</el-button
      >

      <!-- 故事 -->
      <el-button
        @click="startStore"
        type="text"
        class="displayFlex display_center"
        >故事</el-button
      >

      <!-- 帮助 -->
      <el-button
        @click="openHelp"
        type="text"
        class="displayFlex display_center"
        >帮助</el-button
      >

      <!-- 注册 -->
      <el-button
        @click="userRegistered"
        type="text"
        class="displayFlex display_center"
        >注册</el-button
      >

      <!-- 登录 -->
      <el-button
        @click="userLogin"
        type="text"
        class="displayFlex display_center"
        >登录</el-button
      >
    </div>

    <!-- 注册/登录弹框 -->
    <regis-login
      :register-dialog="regLog"
      :title-text="dialgoText"
      @closeDialog="closeDialog"
    />

    <!-- 帮助文档 -->
    <help-word />
  </div>
</template>

<script>
import SvgComp from '@/components/publicComp/svg.vue'
import SearchComp from '@/components/publicComp/searchInp.vue'
import RegisLogin from '@/components/publicComp/registeredLogin.vue'
import HelpWord from '@/components/publicComp/helpWord.vue'
export default {
  name: '',
  components: {
    SvgComp,
    SearchComp,
    RegisLogin,
    HelpWord
  },
  data() {
    return {
      regLog: false, // 注册登录弹框的显示与隐藏，true：显示，false：隐藏
      dialgoText: '' // 注册登录的title
    }
  },

  computed: {},

  mounted() {},

  methods: {
    // 跳转到首页
    goHome() {
      this.$router.push('/')
    },
    // 出租房源
    rentHouse() {
      window.location.href = 'https://www.airbnb.cn/host/homes'
    },
    // 开展体验
    experience() {
      window.location.href = 'https://www.airbnb.cn/host/experiences?from_nav=1'
    },
    // 故事
    startStore() {
      window.location.href = 'https://www.airbnb.cn/content'
    },
    // 注册
    userRegistered() {
      this.regLog = true
      this.dialgoText = '注册'
    },
    // 关闭弹窗
    closeDialog() {
      this.regLog = false
    },
    // 登录
    userLogin() {
      this.regLog = true
      this.dialgoText = '登录'
    },
    // 打开帮助
    openHelp() {
      this.$store.dispatch('globalData/useHelpWord', true)
    }
  }
}
</script>
<style scoped lang="scss">
.hotel_search_area {
  height: 80px;
  .go_home {
    width: auto;
    height: 100%;
    padding: 0 24px;
    cursor: pointer;
  }
  .menulist {
    height: 100%;
    .el-button {
      color: #ffffff;
      font-size: 14px;
      font-weight: inherit;
      height: 100%;
      padding-left: 8px;
      padding-right: 8px;
      border-bottom: 2px solid transparent;
      .svgStyle {
        margin-right: 6px;
      }
    }
    .el-button:hover {
      border-bottom: 2px solid #ffffff;
    }
  }
}
</style>
