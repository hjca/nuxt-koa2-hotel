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
  }
})
