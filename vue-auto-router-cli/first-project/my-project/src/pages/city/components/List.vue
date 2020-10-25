<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    console.log(this.doubleCity)
  },
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  },
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      const element = this.$refs[[this.letter]][0]
      this.scroll.scrollToElement(element)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-bottom
    &:before
      border-color:#ccc
  .list
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    overflow:hidden
    .title
      line-height:.44rem
      font-size:.26rem
      background: #eee
      padding-left: .2rem
      color:#666
    .button-list
      padding: 0.1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float:left
        width:33.33%
        .button
          text-align:center
          margin:.1rem
          padding:.1rem 0
          border:.02rem solid #ccc
          border-radius:.06rem
    .item-list
      .item
        line-height :.76rem
        padding-left:.2rem
</style>
