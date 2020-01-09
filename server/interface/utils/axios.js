import axios from 'axios'
import { errorToast } from './errorToast'

const instance = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT ||
    3000}`,
  timeout: 2000,
  headers: {}
})

// response拦截
instance.interceptors.response.use(
  (res) => {
    // console.log(res)
    if (res.status === 200 && res.statusText === 'OK') {
      const data = res.data
      if (data.code === 0) {
        return res
      } else {
        errorToast(data)
      }
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
