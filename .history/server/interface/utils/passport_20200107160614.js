import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/user'
import { async } from 'q'

passport.use(
  new LocalStrategy(async function(username, password, done) {
    let where = {
      username
    }

    let result = await UserModel.findOne(where)
  })
)
