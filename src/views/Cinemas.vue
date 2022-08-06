<template>
  <div>
    <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
     <template #left>
        {{cityName}}<van-icon name="arrow-down" />
      </template>
      <template #right>
        <van-icon name="search" size="28" color="black"/>
      </template>
    </van-nav-bar>

    <div
      class="box"
      :style="{
        height: height,
      }"
    >
      <ul>
        <li v-for="data in this.cinemaList" :key="data.cinemaId">
          <div class="left">
            <div class="cinema_name">{{ data.name }}</div>
            <div class="cinema_text">{{ data.address }}</div>
          </div>

          <div class="right cinema_name">
            <div style="color: red">￥{{ data.lowPrice / 100 }}起</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import BetterScroll from 'better-scroll'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {

      height: '0px'
    }
  },
  mounted () {
    // console.log(this.$refs.navbar.$el.offsetHeight)
    // 动态结算高度
    this.height =
      document.documentElement.clientHeight -
      this.$refs.navbar.$el.offsetHeight -
      document.querySelector('footer').offsetHeight +
      'px'
    if (this.cinemaList.length === 0) {
      this.getCinemaData(this.cityId).then(res => {
        this.$nextTick(() => {
          new BetterScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      this.$nextTick(() => {
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  },
  computed: {
    ...mapState(['cinemaList', 'cityName', 'cityId'])
  },
  methods: {
    ...mapActions(['getCinemaData']),
    ...mapMutations(['clearCity']),
    handleLeft () {
      // console.log('left')
      this.$router.push('/city')
      // 清空cinemalist
      this.clearCity()
    },
    handleRight () {
      this.$router.push('/cinemas/search')
    }

  }
}
</script>
<style lang="scss" scoped>
li {
  padding: 0.833333rem;

  display: flex;
  justify-content: space-between;
  .left {
    width: 11.777778rem;
  }
  .cinema_name {
    font-size: 15px;
  }
  .cinema_text {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.box {
  // height: 34.333333rem;
  overflow: hidden;
  position: relative;
  // 修正滚动条的位置
}
</style>
