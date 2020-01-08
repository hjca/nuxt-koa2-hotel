import axios from 'axios'

const instance = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT ||
    3000}`,
  timeout: 7000,
  headers: {}
})

// response拦截
instance.interceptors.response.use((res) => {
  console.log(res)
})

export default instance
