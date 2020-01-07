<!-- 注册/登录弹框 -->
<template>
  <el-dialog
    :visible.sync="closeFlag"
    :modal-append-to-body="false"
    :destroy-on-close="true"
    @close="closeDialog"
    width="37%"
    top="118px"
    custom-class="default_dialog_style"
  >
    <div slot="title" class="default_dialog_title">
      {{ titleText }}爱彼迎
      <div v-if="titleText === '注册'" class="small_title">
        未注册的手机号或微信号验证后将自动创建新账号
      </div>
      <div v-else-if="titleText === '登录'" class="small_title">
        没有账号？
        <span class="goRegisted">立即注册</span>
      </div>
    </div>
    <div class="default_dialog_content">
      <template v-if="titleText === '注册'">
        <!-- 邮箱 -->
        <div class="marginBottom">
          <div
            :class="[
              'default_dialog_email displayFlex display_betten',
              emailFouce && !emialError ? 'fouceInp' : '',
              emialError ? 'errorInp' : ''
            ]"
          >
            <el-input
              v-model="email"
              @focus="focusEmail"
              @blur="emailFouce = false"
              placeholder="请输入邮箱"
            ></el-input>
            <el-button @click="sendEmailCode" type="text">{{
              timeText
            }}</el-button>
          </div>
          <!-- 错误信息 -->
          <div v-if="emialError" class="error_msg">{{ emialError }}</div>
        </div>

        <!-- 邮箱验证码 -->
        <div class="marginBottom">
          <div
            :class="[
              'default_dialog_code displayFlex display_betten',
              codeFocus && !codeError ? 'fouceInp' : '',
              codeError ? 'errorInp' : ''
            ]"
          >
            <el-input
              v-model="emailCode"
              @focus="focusCode"
              @blur="codeFocus = false"
              placeholder="请输入邮箱验证码"
            ></el-input>
          </div>
          <!-- 错误信息 -->
          <div v-if="codeError" class="error_msg">{{ codeError }}</div>
        </div>

        <!-- 设置密码 -->
        <div class="marginBottom">
          <div
            :class="[
              'default_dialog_code displayFlex display_betten',
              setPassFouce && !setPasswordError ? 'fouceInp' : '',
              setPasswordError ? 'errorInp' : ''
            ]"
          >
            <el-input
              v-model="setPassword"
              @focus="setfocusCode"
              @blur="setPassFouce = false"
              minlength="4"
              placeholder="请设置登录密码"
            ></el-input>
          </div>
          <!-- 错误信息 -->
          <div v-if="setPasswordError" class="error_msg">
            {{ setPasswordError }}
          </div>
        </div>

        <!-- 确认密码 -->
        <div class="marginBottom">
          <div
            :class="[
              'default_dialog_code displayFlex display_betten',
              surePassFouce && !surePasswordError ? 'fouceInp' : '',
              surePasswordError ? 'errorInp' : ''
            ]"
          >
            <el-input
              v-model="surePassword"
              @focus="surefocusCode"
              @blur="codeFocus = false"
              placeholder="请确认登录证码"
            ></el-input>
          </div>
          <!-- 错误信息 -->
          <div v-if="surePasswordError" class="error_msg">
            {{ surePasswordError }}
          </div>
        </div>

        <!-- 注册按钮 -->
        <el-button
          @click="immRegisted"
          type="primary"
          size="medium"
          class="immediatelyReg"
          >立即注册</el-button
        >

        <!-- 空白分割线 -->
        <div class="example_line displayFlex display_betten">
          <div class="borderTop"></div>
          <span class="lineText">或</span>
          <div class="borderTop"></div>
        </div>

        <!-- 微信登录 -->
        <div class="wxLogin displayFlex display_center">
          <svg-comp svg-type="wx" class="styleSvg" />
          微信账号扫码登录
        </div>

        <!-- 空白分割线 -->
        <div class="example_line displayFlex display_betten">
          <div class="borderTop"></div>
          <span class="lineText">使用其他方式</span>
          <div class="borderTop"></div>
        </div>

        <!-- 其他登录方式 -->
        <div class="otherLoginMethod displayFlex display_betten">
          <!-- 账号密码登录 -->
          <div class="userCountLogin displayFlex display_center">
            <svg-comp svg-type="news" class="styleSvg" />
            账号密码登录
          </div>

          <!-- 微博 -->
          <div class="userWBLogin displayFlex display_center">
            <svg-comp svg-type="wb" class="styleSvg" />
            微博
          </div>
        </div>
      </template>
      <template v-if="titleText === '登录'">
        <!-- 账号 -->
        <div class="marginBottom">
          <div
            :class="[
              'default_dialog_account displayFlex display_betten',
              accountFouce && !accountErroe ? 'fouceInp' : '',
              accountErroe ? 'errorInp' : ''
            ]"
          >
            <el-input
              v-model="account"
              @focus="focusAccount"
              @blur="accountFouce = false"
              placeholder="请输入邮箱"
            ></el-input>
          </div>
          <!-- 错误信息 -->
          <div v-if="accountErroe" class="error_msg">{{ accountErroe }}</div>
        </div>

        <!-- 密码 -->
        <div class="marginBottom">
          <div
            :class="[
              'default_dialog_password displayFlex display_betten',
              passwordFocus && !passwordError ? 'fouceInp' : '',
              passwordError ? 'errorInp' : ''
            ]"
          >
            <el-input
              v-model="password"
              @focus="focusPassword"
              @blur="passwordFocus = false"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </div>
          <!-- 错误信息 -->
          <div v-if="passwordError" class="error_msg">{{ passwordError }}</div>
        </div>

        <!-- 记住密码 -->
        <div class="remmberPassword displayFlex display_betten">
          <el-checkbox v-model="remmberPassword" size="medium"
            >记住密码</el-checkbox
          >

          <nuxt-link to="/" class="setPass">忘记密码？</nuxt-link>
        </div>

        <!-- 立即登录 -->
        <el-button
          @click="immediatelyLogin"
          size="medium"
          class="immediatelyLogin"
          >立即登录</el-button
        >
      </template>
    </div>
  </el-dialog>
</template>

<script>
import SvgComp from '@/components/publicComp/svg.vue'
import { isEmail } from '@/assets/js/validate.js'
export default {
  name: '',

  components: {
    SvgComp
  },

  props: {
    registerDialog: {
      type: Boolean,
      default: false
    },
    titleText: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      closeFlag: false, // 关闭弹框标识
      email: '', // 邮箱
      emialError: '', // 邮箱错误提示
      emailFouce: false, // 邮箱聚焦

      emailCode: '', // 邮箱验证码
      codeError: '', // 邮箱验证码错误提示
      codeFocus: false, // 邮箱验证码聚焦

      setPassword: '', // 设置密码
      setPasswordError: '', // 设置密错误提示
      setPassFouce: false, // 设置密码聚焦

      surePassword: '', // 确认密码
      surePasswordError: '', // 确认密错误提示
      surePassFouce: false, // 确认密码聚焦

      account: '', // 用户账号
      accountFouce: false, // 账号聚焦
      accountErroe: '', // 账号错误提示

      password: '', // 用户密码
      passwordFocus: false, // 密码聚焦
      passwordError: '', // 密码错误提示

      timer: null, // 定时器
      timeText: '发送验证码',

      remmberPassword: false // 是否记住密码，false：不记住  true：记住
    }
  },

  watch: {
    registerDialog(newVal) {
      this.closeFlag = newVal
    },
    email() {
      this.emialError = ''
    },
    emailCode() {
      this.codeError = ''
    },
    setPassword() {
      this.setPasswordError = ''
    },
    surePassword() {
      this.surePasswordError = ''
    },
    account() {
      this.accountErroe = ''
    },
    password() {
      this.passwordError = ''
    }
  },

  mounted() {},

  methods: {
    // 关闭弹窗
    closeDialog() {
      this.$emit('closeDialog')
    },
    // 邮箱聚焦
    focusEmail() {
      this.emailFouce = true
    },
    // 验证码聚焦
    focusCode() {
      this.codeFocus = true
    },
    // 设置密码聚焦
    setfocusCode() {
      this.setPassFouce = true
    },
    // 确认密码聚焦
    surefocusCode() {
      this.surePassFouce = true
    },
    // 账号聚焦
    focusAccount() {
      this.accountFouce = true
    },
    // 密码聚焦
    focusPassword() {
      this.passwordFocus = true
    },
    // 立即注册
    immRegisted() {
      const emailVal = this.email
      const codeVal = this.emailCode
      const setPass = this.setPassword
      const surePass = this.surePassword

      if (!emailVal) {
        this.emialError = '请输入邮箱'
      } else if (emailVal && !isEmail(emailVal)) {
        this.emialError = '邮箱格式不正确'
      }
      if (!codeVal) {
        this.codeError = '请输入邮箱验证码'
      }
      if (!setPass) {
        this.setPasswordError = '请设置登录密码'
      } else if (setPass && setPass.length < 4) {
        this.setPasswordError = '密码最低长度为4，请重新输入'
      }
      if (!surePass) {
        this.surePasswordError = '请确认登录密码'
      }
      if (setPass && surePass && setPass !== surePass) {
        this.surePasswordError = '两次密码不一致，请重新输入'
      }
      if (
        emailVal &&
        codeVal &&
        setPass &&
        surePass &&
        isEmail(emailVal) &&
        setPass.length >= 4 &&
        setPass === surePass
      ) {
        console.log('立即注册')
      }
    },
    // 立即登录
    immediatelyLogin() {
      if (!this.account) {
        this.accountErroe = '请输入邮箱'
      }
      if (!this.password) {
        this.passwordError = '请输入密码'
      }
      if (this.account && !isEmail(this.account)) {
        this.accountErroe = '邮箱格式不正确'
      }
      if (this.account && this.password && isEmail(this.account)) {
        console.log('正确')
      }
    },
    // 发送短信验证码
    sendEmailCode() {
      const emailVal = this.email
      if (!emailVal) {
        this.emialError = '请输入邮箱'
      } else if (emailVal && !isEmail(emailVal)) {
        this.emialError = '邮箱格式不正确'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.default_dialog_style {
  .default_dialog_title {
    font-size: 23px;
    font-weight: 800;
    color: rgb(72, 72, 72);
    line-height: 50px;
    .small_title {
      font-size: 14px;
      font-weight: 400;
      color: rgb(72, 72, 72);
      line-height: 10px;
      .goRegisted {
        color: #008489;
        cursor: pointer;
      }
    }
  }
  .default_dialog_content {
    height: auto;
    .marginBottom {
      margin-bottom: 25px;
    }
    .default_dialog_email {
      height: 48px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      .el-button {
        padding: 0 15px;
        color: #767676;
        font-weight: 800;
      }
    }
    .error_msg {
      color: #d93900;
      font-size: 14px;
      font-weight: 600;
      padding-top: 10px;
    }
    .default_dialog_code,
    .default_dialog_account,
    .default_dialog_password {
      height: 48px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
    }
    .immediatelyReg {
      width: 100%;
      height: 50px;
      background: #008489;
      font-weight: 800;
      font-size: 16px;
    }
    .example_line {
      height: 60px;
      .borderTop {
        flex: 1;
      }
      .lineText {
        font-size: 14px;
        font-weight: 600;
        color: rgb(118, 118, 118);
        padding: 0 16px;
      }
    }
    .wxLogin {
      width: 100%;
      height: 50px;
      border: 2px solid rgb(72, 72, 72);
      font-weight: 800;
      font-size: 16px;
      color: inherit;
      border-radius: 4px;
      cursor: pointer;
    }
    .styleSvg {
      margin-right: 12px;
    }
    .otherLoginMethod {
      height: 50px;
      .userCountLogin,
      .userWBLogin {
        width: 50%;
        color: #484848;
        font-weight: 800;
        font-size: 18px;
      }
    }
    .fouceInp {
      border-color: #008489;
    }
    .errorInp {
      border-color: rgb(252, 100, 45);
      background: #fff8f6;
    }
    .setPass {
      color: #008489;
    }
    .immediatelyLogin {
      margin-top: 25px;
      width: 100%;
      height: 50px;
      background: #008489;
      color: #ffffff;
      font-weight: 800;
      font-size: 16px;
    }
  }
}
</style>
