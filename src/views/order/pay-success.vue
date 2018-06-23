/** 
 *  支付成功
 */
<template>
  <div class="paySuccess">
    <div class="container">
      <div class="title">支付成功</div>
      <div class="pay-info">
        <p>恭喜你支付成功，总共花费 <span>¥222</span> 元</p>
        <div class="btn-pay">
          <a href="javascript:;">查看订单</a>
          <a href="javascript:;">继续选购</a>
        </div>
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

  .paySuccess {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 40px 0;
    margin: 0 auto;

    .container {
      overflow: hidden;
      background: #fff;
      border-radius: 8px;
      border: 1px solid #dcdcdc;
      box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
    }

    .title {
      position: relative;
      z-index: 10;
      height: 60px;
      padding: 0 10px 0 24px;
      border-bottom: 1px solid #d4d4d4;
      border-radius: 8px 8px 0 0;
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
      background: linear-gradient(#fbfbfb, #ececec);
      line-height: 60px;
      font-size: 18px;
      color: #626262;
    }

    .pay-info {
      padding: 150px 0;
      color: #333;
      text-align: center;

      p {
        font-size: 25px;
        span {
          color: #d44d44;
          font-weight: 700;
          line-height: 20px;
          text-align: right;
        }
      }

      .btn-pay {
        overflow: hidden;
        margin-top: 20px;

        a {
          display: inline-block;
          line-height: 40px;
          font-size: 16px;
          width: 150px;
          height: 40px;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          outline: none;
          border-radius: .3rem;
          background: linear-gradient(#6f94e8, #5178df);
          text-shadow: 0 -0.05rem 0 rgba(0, 0, 0, 0.15);
          box-sizing: border-box;
          box-shadow: inset 0 0 0 0.05rem rgba(0, 0, 0, 0.1), inset 0 0.05rem 0.05rem rgba(255, 255, 255, 0.2), 0 2px 0.05rem -0.05rem rgba(0, 0, 0, 0.4);

          &:hover {
            background-color: #6c8cd4;
            background-image: linear-gradient(180deg, #6c8cd4, #4769c2);
          }
        }

        a:first-child {
          margin-right: 20px;
        }
      }
    }
  }
</style>