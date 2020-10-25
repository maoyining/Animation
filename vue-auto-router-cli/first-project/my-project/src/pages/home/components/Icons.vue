<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.iconList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.icons
  overflow: hidden
  height: 0
  padding-bottom :50%
  .icon
    float:left
    width: 25%
    padding-bottom: 25%
    position:relative
    hieght: 0
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom:.44rem
      box-sizing:border-box
      padding:.1rem
      .icon-img-content
        display:block
        height:100%
        margin:0 auto
    .icon-desc
      position:absolute
      bottom:.1rem
      left:0
      right:0
      text-align:center
      line-height:0.44rem
      height:.44rem
      color:$darkTextColor
</style>
