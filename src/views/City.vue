<template>
  <div class="city">

    <van-index-bar :index-list="computedList" @select="handleChange">
      <div v-for="data in cityList" :key="data.type">
        <van-index-anchor :index="data.type" />

        <van-cell :title="item.name" v-for="item in data.list" :key="item.cityId" @click="handleClick(item)"/>
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import http from '@/util/http'
import { Toast } from 'vant'
export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    computedList () {
      return this.cityList.map(item => item.type)
    }
  },
  mounted () {
    this.$store.commit('hide')

    http({
      url: '/gateway?k=5066709',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then((res) => {
      //   console.log(res.data.data.cities)
      this.cityList = this.renderCity(res.data.data.cities)
      // 1， 316条 ==> A ,B进行分组
      // 2.  利用转换后的数组，结合组件库进行渲染页面。
    })
  },
  methods: {
    handleChange (data) {
    //   console.log('change', data)
      Toast(data)
    },
    renderCity (list) {
      // console.log(list)
      var cityList = []
      var letterList = []
      for (var i = 65; i < 91; i++) {
        // console.log(String.fromCharCode(i))
        letterList.push(String.fromCharCode(i))
      }

      //   console.log(letterList)
      letterList.forEach((letter) => {
        var newList = list.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === letter
        )
        // console.log(newList)

        newList.length > 0 &&
          cityList.push({
            type: letter,
            list: newList
          })
      })

      //   console.log(cityList)
      return cityList
    },
    handleClick (item) {
    //   console.log(item.name, item.cityId)

      // 传统的多页面方案
      //  1. location.href = '#/cinemas?cityname=' + item.name
      //  2. cookie , localStorage

      // 单页面方案,
      //  1. 中间人模式
      //  2. bus事件总线 $on ,$emit

      // vuex- 状态管理模式

      //   console.log()
      //   this.$store.state.cityName = item.name //

      this.$store.commit('changeCityName', item.name)

      this.$store.commit('changeCityId', item.cityId)
      this.$router.back()
    }
  },
  destroyed () {
    this.$store.commit('show')
  }
}
</script>
<style lang="scss" >
.van-toast--html, .van-toast--text{
    min-width: 30px;
}
</style>
