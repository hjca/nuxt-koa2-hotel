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
  }
})
