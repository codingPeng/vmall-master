/** 
 * 优惠
 */
<template>
  <div class="discount">
    <div class="container">
      <header>
        <h2>我的优惠</h2>
      </header>
      <div class="main">
        <span>暂无优惠</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  computed: {},

  mounted () {},

  methods: {},

  components: {}
}
</script>
<style lang='scss' scoped rel='stylesheet/scss'>

  .discount {
    overflow: hidden;
    background: #fff;
    border: 1px solid rgba(0,0,0,.14);
    border-radius: 10px;
    .container {
      header {
        position: relative;
        height: 60px;
        padding: 0 10px 0 28px;
        background: linear-gradient(#fff,#f5f5f5);
        border-bottom: 1px solid #dcdcdc;
        border-radius: 10px 10px 0 0;
        box-shadow: 0 1px 7px rgba(0,0,0,.1);
        line-height: 60px;
        color: #646464;
        z-index: 5;

        h2 {
          font-size: 18px;
          font-weight: 400;
          color: #626262;
        }
      }

      .main {
        padding: 100px 0px;
        text-align: center;
      }
    }
  }

</style>