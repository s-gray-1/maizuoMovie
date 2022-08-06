<template>
    <div>
        <film-swiper :key="datalist.length">
            <film-swiper-item v-for="data in datalist" :key="data.filmId" class="filmswiperitem">
                <img :src="data.poster"  @click="handleDetail(data.filmId)"/>
            </film-swiper-item>
        </film-swiper>
        <film-header class="sticky"></film-header>
        <router-view></router-view>
    </div>
</template>
<script>
// webpack
import filmSwiper from '@/mycomponents/films/FilmSwiper'
import filmHeader from '@/mycomponents/films/FilmHeader'
import filmSwiperItem from '@/mycomponents/films/FilmSwiperItem'
import http from '../util/http'

export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // http({
    //   url: `/gateway?type=2&cityId=${this.$store.state.cityId}&k=3436376`,
    //   headers: {
    //     'X-Host': 'mall.cfg.common-banner'
    //   }
    // }).then((res) => {
    //   this.datalist = res.data.data
    // })
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=5196770`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      // console.log(res.data.data.films)
      console.log(res.data.data)
      this.datalist = res.data.data.films.slice(0, 5)
    })
  },
  methods: {
    handleDetail (id) {
      // console.log(JSON.parse(data).businessId)
      // const id = JSON.parse(data).businessId
      this.$router.push({
        name: 'Detail',
        params: {
          id
        }
      })
    }
  },
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
  }
}
</script>

<style lang="scss" scoped>
.filmswiperitem{
    img{
        width: 100%;
        height: 10rem;
        object-fit: cover;
    }
}
.sticky{
    position: sticky;
    top:0px;
    background:white;
    z-index: 100;
}
</style>
