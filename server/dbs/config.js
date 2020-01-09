export default {
  dbs: 'mongodb://127.0.0.1:27017/hotel',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  // 邮箱配置，发送短信验证码
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1305273923@qq.com'
    },
    get pass() {
      return 'dtnkybleafhdggfc'
    },
    // 生成邮箱验证码
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase()
      }
    },
    // 邮箱验证码邮箱时间
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
