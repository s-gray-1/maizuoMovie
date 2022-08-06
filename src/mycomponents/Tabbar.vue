<template>
  <footer>
    <ul>
      <!-- vue-router(3之前，包括3) -1- 声明式导航 -->

      <!-- <router-link to="/films" active-class="kerwinactive" tag="li">电影</router-link>

                <router-link to="/cinemas" active-class="kerwinactive" tag="li">影院</router-link> -->

      <!-- vue-router（4） -2- 声明式导航 -->

      <router-link to="/films" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'kerwinactive' : ''">
          <i class="iconfont icon-all"></i>
          <span>电影</span>
        </li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'kerwinactive' : ''">
          <i class="iconfont icon-comments"></i>
          <span>影院</span>
        </li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'kerwinactive' : ''">
          <i class="iconfont icon-account"></i>
          <span>我的</span>
        </li>
      </router-link>

    </ul>
 <div class="gotICP" @click="goICP">京ICP备2022009873号 © 2022 SGray</div>
  </footer>
</template>
<script>
import '../assets/iconfont/iconfont.css'
export default {
  methods: {
    goICP () {
      console.log('111')
      window.open('https://beian.miit.gov.cn/')
    }
  }
}
</script>
<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height:4rem;
  background: white;
  z-index: 100;
  ul {
    display: flex;

    li {
      flex: 1;
      line-height: 1.388889rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      i {
        font-size: 20px;
      }
      span {
        font-size: 16px;
      }
    }

  }
   .gotICP{
     color: #625858;
      font-size: 12px;
      margin: 0 auto;
      text-align: center;
    }
}

.kerwinactive {
  color: red;
}
</style>
