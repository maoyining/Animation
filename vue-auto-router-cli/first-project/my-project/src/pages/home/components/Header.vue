<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe637;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex
    line-height:.86rem
    background: $bgColor
    color:#fff
    .header-left
      width: 0.64rem
      float:left
      text-align :center
    .header-input
      flex:1
      background:#fff
      border-radius:.1rem
      line-height:.64rem
      height:.64rem
      margin-top:.12rem
      margin-left:.2rem
      color:#ccc
      text-align :center
    .header-right
      min-width:1.04rem
      float:right
      text-align :center
      color: white
      padding: 0 .1rem
</style>
