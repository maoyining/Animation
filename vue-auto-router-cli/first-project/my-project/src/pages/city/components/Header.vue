<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position:relative
    height: $headerHeight
    line-height: $headerHeight
    text-align :center
    color:#fff
    background :$bgColor
    font-size:.32rem
    .header-left
      font-size:.4rem
      position:absolute
      left:0
      top:0
      width:.64rem
      text-align:center
      color:#fff
</style>
