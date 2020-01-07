import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/user'
import Passport from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'
import { async } from 'q'

let router = new Router({
  prefix: '/users'
})

let Store = new Redis().client

// 注册
router.post('/signup', async (ctx) => {
  const { email, password, code } = ctx.request.body

  // 验证验证码
  if (code) {
    const saveCode = await Store.hget(`nodemail:${email}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${email}`, 'expire')
    if (code == saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }

  // 验证账号
  let user = await User.find({
    email
  })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return
  }
  let nuser = await User.create({
    password,
    email
  })

  if (nuser) {
    let res = await axios.post('/user/signin', {
      useremail,
      password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

// 登录
router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function(err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登陆成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

// 发送验证码
router.post('/verify', async (ctx, next) => {
  let useremail = ctx.request.body.useremail
  const saveExpire = await Store.hget(`nodemail:${email}`, 'expire')
})
