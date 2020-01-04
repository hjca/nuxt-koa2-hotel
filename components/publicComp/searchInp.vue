<!-- 搜索框 -->
<template>
  <div
    :class="[
      'default_search',
      animationClass ? 'animationClassTyle' : '',
      animationClass2 ? 'animationClassTyle2' : ''
    ]"
  >
    <el-autocomplete
      v-model="searchText"
      @focus="searchFocus"
      @blur="searchBlur"
      placeholder="搜‘佛罗伦萨’试试"
      clearable
      class="default_input"
    >
      <i slot="prefix" class="el-icon-search" />
    </el-autocomplete>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      searchText: '', // 搜索值
      animationClass: false, // 聚焦动画效果
      animationClass2: false // 离焦动画效果
    }
  },

  computed: {},

  mounted() {},

  methods: {
    // 聚焦
    searchFocus() {
      this.animationClass = true
      this.animationClass2 = false
    },
    // 离焦
    searchBlur() {
      this.animationClass = false
      this.animationClass2 = true
    }
  }
}
</script>
<style scoped lang="scss">
.default_search {
  width: 460px;
  .default_input {
    width: 100%;
    .el-icon-search:before {
      font-size: 20px;
      color: #484848;
      font-weight: 800;
      padding-left: 17px;
    }
  }
}
.animationClassTyle {
  animation: myfirst 0.8s;
  animation-fill-mode: forwards;
}
.animationClassTyle2 {
  animation: myfirst2 0.8s;
  animation-fill-mode: forwards;
}
@keyframes myfirst {
  from {
    width: 460px;
  }
  to {
    width: 598px;
  }
}
@keyframes myfirst2 {
  from {
    width: 598px;
  }
  to {
    width: 460px;
  }
}
</style>
