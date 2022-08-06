<template>
    <div>
      <van-button type="primary" size="large" @click="logOut">退出登录</van-button>
    </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    const { role: { roleName }, username } = JSON.parse(localStorage.getItem('token'))
    this.user = username
    Toast.success(`欢迎${this.user}回来`)
  },
  methods: {
    logOut () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }

  // 路由生命周期
//   beforeRouteEnter (to, from, next) {
//     // 在渲染该组件的对应路由被 confirm 前调用
//     // 不！能！获取组件实例 `this`
//     // 因为当守卫执行前，组件实例还没被创建
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   }
}
</script>
<style lang="scss" scoped>
  van-image {
    margin: 0 auto
  }
</style>
