<template>
  <div>
      <van-form @submit="onSubmit"

      >
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Field, Notify } from 'vant'

import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      // console.log('submit', values)
      axios.get(`http://82.157.40.116:3000/users?username=${values.用户名}&password=${values.密码}&roleState=true&_expand=role`).then(
        res => {
          // console.log(res.data)
          if (res.data.length === 0) {
            Notify({ type: 'danger', message: '用户户名或密码不匹配' })
          } else {
            localStorage.setItem('token', JSON.stringify(res.data[0]))
            // 2. 跳转到当时想要跳的页面去
            this.$router.push(this.$route.query.redirect)
          }
        }
      )

      // this.$router.back() // 返回

      // 1. 获取 query字段
      // console.log(this.$route.query)
      // 2. 跳转到当时想要跳的页面去
      // this.$router.push(this.$route.query.redirect)
    }

  }
}
</script>
<style lang="scss" scoped>

</style>
