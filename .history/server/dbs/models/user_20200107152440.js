import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
})
