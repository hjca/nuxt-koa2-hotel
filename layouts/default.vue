<template>
  <div>
    <!-- 头部 -->
    <header class="default_header">
      <header-comp />
    </header>
    <nuxt />
  </div>
</template>

<script>
import HeaderComp from '@/components/publicComp/header.vue'
export default {
  components: {
    HeaderComp
  }
}
</script>

<style scoped lang="scss">
.default_header {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
