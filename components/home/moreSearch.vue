<!-- 首页轮播上的联合搜索 -->
<template>
  <div class="swiper_more_search">
    <el-row>
      <!-- 房源 -->
      <el-col :span="2" class="houseAva">
        <el-dropdown
          @command="selectMenu"
          class="displayFlex display_center"
          trigger="click"
        >
          <span class="el-dropdown-link">
            {{ textMenu }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="房源">房源</el-dropdown-item>
            <el-dropdown-item command="体验">体验</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <!-- 输入框内荣 -->
      <el-col :span="20" class="displayFlex display_betten">
        <el-input
          v-model="address"
          placeholder="输入目的地、城市或景点"
          class="address"
        >
          <div slot="prefix" class="el-icon-location"></div>
        </el-input>

        <!-- 入住日期 -->
        <div class="house_date">
          <el-date-picker
            :editable="false"
            :default-value="nowDate"
            :picker-options="pickerOptions"
            v-model="inOutDate"
            type="daterange"
            format="MM-dd"
            start-placeholder="入住日期"
            end-placeholder="退房日期"
          ></el-date-picker>
        </div>
      </el-col>
      <!-- 搜索按钮 -->
      <el-col :span="2" class="displayFlex display_center">
        <el-button
          type="danger"
          class="moreSearchButton displayFlex display_center"
          >搜索</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      textMenu: '房源',
      address: '',
      inOutDate: '', // 入住日期-退房日期
      nowDate: new Date(),
      pickerOptions: {
        onPick: (dateData) => {
          const maxDate = dateData.maxDate // 最大日期
          const minDate = dateData.minDate // 最小日期
          const nowDate = new Date() // 现在日期

          if (maxDate - minDate < 0) {
            this.$message.error('最大日期不能小于最小日期')
          } else if (minDate - nowDate < 0) {
            this.$message.error('最小日期不能小于当前日期')
          }
        }
      }
    }
  },

  computed: {},

  mounted() {},

  methods: {
    // 选择菜单
    selectMenu(item) {
      this.textMenu = item
    },
    // 选中日期
    clickDate() {}
  }
}
</script>
<style scoped lang="scss">
.swiper_more_search {
  width: 100%;
  height: 72px;
  background: #ffffff;
  margin-top: 20px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .houseAva {
    border-right: 1px solid #e4e4e4;
  }
  .el-row,
  .el-col {
    height: 100%;
    .el-dropdown {
      width: 100%;
      height: 100%;
      .el-dropdown-link,
      .el-icon-arrow-down:before {
        font-size: #484848;
        font-weight: 800;
        font-size: 18px;
        cursor: pointer;
      }
    }
    .el-input {
      height: auto;
      flex: 1;
      border: none;
      .el-icon-location:before {
        color: #484848;
        font-size: 25px;
      }
    }
    .house_date {
      height: 100%;
      width: 380px;
      border-left: 1px solid #e4e4e4;
      border-right: 1px solid #e4e4e4;
      .el-date-editor {
        height: 100%;
      }
    }
    .moreSearchButton {
      width: 68px;
      height: 48px;
      background: #ff5a5f;
      font-size: 16px;
      padding: 0;
    }
  }
}
</style>
