import Vue from 'vue'
const v = new Vue()

export const errorToast = (res) => {
  const errorMsg = res.msg
  v.$message({
    message: errorMsg,
    type: 'error'
  })
}
