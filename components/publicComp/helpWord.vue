<!-- 帮助文档 -->
<template>
  <el-container v-if="$store.state.globalData.help" class="global_help_word">
    <!-- 头部标题 -->
    <el-header class="borderBottom">
      <el-row class="help_title_area">
        <el-col :span="22" class="help_title_text textCenter">
          推荐帮助
        </el-col>
        <el-col :span="2" class="textCenter" style="cursor: pointer;">
          <i @click="colseHelp" class="el-icon-close"></i>
        </el-col>
      </el-row>
    </el-header>

    <!-- 主体区域 -->
    <el-main class="help_content_area">
      <!-- 搜索区域 -->
      <div class="help_search_area">
        <div class="help_search_title">按关键字搜索</div>
        <el-input
          v-model="searchText"
          placeholder="例如：预定状态"
          prefix-icon="el-icon-search"
        ></el-input>
      </div>

      <!-- 推荐文章 -->
      <div class="recommend">推荐文章</div>

      <!-- 文章列表 -->
      <div
        v-for="(item, index) in articleList"
        :key="index"
        class="article_list_item"
      >
        <div class="article_title_text">{{ item.title }}</div>
        <div :title="item.content" class="article_content_item">
          {{ item.content }}
        </div>
        <div class="knowMore">了解更多 ></div>
      </div>

      <!-- 推荐文章 -->
      <div class="recommend">按主题浏览更多文章</div>

      <el-collapse>
        <el-collapse-item
          v-for="(item, index) in articleList2"
          :key="index"
          :title="item.title"
          :name="index + 1"
        >
          <div v-for="(val, idx) in item.list" :key="idx">{{ val }}</div>
        </el-collapse-item>
      </el-collapse>
    </el-main>

    <!-- 底部区域 -->
    <el-footer class="borderTop displayFlex display_center">
      <el-button type="primary">
        访问帮助中心
      </el-button>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      searchText: '',
      articleList: [
        {
          title: '如何创建爱彼迎账号?',
          content:
            '如果您还没有爱彼迎账号，请前往airbnb.com，，然后点击注册。您可以使用电子邮件地址、Facebook账号、谷歌账号或Apple ID注册。注册和创建爱彼迎账号完全免费。注册后，请务必在预订住宿之前填写完整账号资料。'
        },
        {
          title: '如何重置或更改我的密码？',
          content:
            '如果您忘记了密码，或者无法登录爱彼迎账号，请前往重置密码页面。 输入与您的爱彼迎账号关联的电子邮件地址，然后点击发送重置链接，您将收到一封电子邮件，其中提供了用于重置密码的链接。 如果您知道当前密码但希望修改密码，请按照以下步骤操作： 登录您的账号，进入安全页面 在修改密码下方输…'
        },
        {
          title: '如果有人要求我在爱彼迎站外付款，我该怎么做？',
          content:
            '不要给他们汇钱，并告知我们。爱彼迎绝不会要求您在站外或通过电子邮件或第三方预订中介付款。 有时候，您可能需要向房东支付地方税费，但这些费用应当只通过爱彼迎网站进行汇转，而且大多数情况下，地方税费已经包含在预订费用当中。了解更多 如果您不是通过爱彼迎付款给房东（而是通过电汇或是银行…'
        },
        {
          title: '为什么应该直接通过爱彼迎付款和交流？',
          content:
            '通过爱彼迎进行交流和交易能够确保您受到我们的服务条款、支付服务条款、取消政策、退款政策、房东保障金计划、房东保障险计划及其他保障措施的保护，此外还能让您更方便地查找和参考重要的预订信息，比如房源地址、您的行程单、入住说明以及其它有用的信息。如果您不是直接通过爱彼迎预订住宿并付款，…'
        },
        {
          title: '什么是爱彼迎住宿取消政策？',
          content:
            '在爱彼迎，房东可设置适用于房客的预订取消政策。 具体条款取决于入住地点和取消时距离入住时间的长短。 您可在想要预订的房源页面底部找到该房源的取消政策详情。 您还可以在预订前再次查看取消政策。 预订后，您可在预订确认邮件和行程页面中看到相关详细信息。 房东可以从几种标准的取消政策中…'
        }
      ],
      articleList2: [
        {
          title: '预订申请',
          list: [
            '我可以替好友或家人预订房源吗？',
            '预订住宿前可以去住宿地点吗？',
            '房东可以有多少时间回复我的预订申请？',
            '如何提交预订申请？',
            '如果我的预订申请被拒绝或过期，会发生什么情况？',
            '我什么时候会被收取预订的费用？',
            '在未得到房东回复之前可以订房吗？',
            '房客该如何查看预订状态？'
          ]
        },
        {
          title: '联系房东/体验达人',
          list: [
            '预订住宿前可以去住宿地点吗？',
            '如何查看和发送消息？',
            '房东可以要求房客签署合同吗？',
            '如何在爱彼迎上预订房源？',
            '在未得到房东回复之前可以订房吗？',
            '“超赞房东”是什么？',
            '预订之前如何联系房东？',
            '各种预订状态的含义分别是什么？'
          ]
        },
        {
          title: '价格和费用',
          list: [
            '预订的价格是如何计算的？',
            '我可以用任何货币付款吗？',
            '哪里可以找到旅程入住信息？',
            '如何为长期住宿预订支付房费？',
            '我什么时候会被收取预订的费用？',
            '如果我的预订申请没有被房东接受，我需要支付费用吗？',
            '爱彼迎服务费是什么？'
          ]
        }
      ]
    }
  },

  computed: {},

  mounted() {},

  methods: {
    // 关闭
    colseHelp() {
      this.$store.dispatch('globalData/useHelpWord', false)
    }
  }
}
</script>
<style scoped lang="scss">
.global_help_word {
  width: 420px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: #ffffff;
  z-index: 10000;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .help_title_area {
    padding: 20px 0;
    .help_title_text {
      font-size: 16px;
      font-weight: 600;
      line-height: 19.25px;
      color: rgb(72, 72, 72);
    }
  }
  .help_content_area {
    padding: 0 32px;
    cursor: pointer;
    .help_search_area {
      padding: 24px 0 16px 0;
      .help_search_title {
        font-size: 16px;
        font-weight: 800;
        line-height: 19px;
        color: rgb(72, 72, 72);
        margin-bottom: 8px;
      }
    }
    .recommend {
      font-size: 12px;
      font-weight: 800;
      line-height: 1.33333em;
      color: rgb(72, 72, 72);
      margin: 16px 0;
    }
    .article_list_item {
      height: auto;
      width: 339px;
      margin-bottom: 8px;
      .article_title_text {
        font-size: 16px;
        font-weight: 800;
        line-height: 19.25px;
        color: rgb(72, 72, 72);
        margin-bottom: 5px;
      }
      .article_content_item {
        height: 36px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: rgb(72, 72, 72);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    .knowMore {
      color: rgb(0, 132, 137);
      margin-top: 4px;
      font-size: 14px;
    }
  }
  .el-button {
    width: 100%;
    background: rgb(0, 132, 137) !important;
    font-weight: 800;
    font-size: 16px;
  }
}
</style>
