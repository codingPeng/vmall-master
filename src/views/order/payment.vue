/** 
 * 提交订单
 */
<template>
  <div class="payment">
    <div class="container">
      <div class="title">支付订单</div>
      <section class="clearfix">
        <div class="order-info">
          <h3>订单提交成功</h3>
          <p class="tips">请在
            <span>24 小时内</span>
            完成支付，超时订单将自动取消。
          </p>
          <p class="tips">我们将在您完成支付后的 72 小时内发货</p>
        </div>

        <div class="payment-info">
          <div class="payment-title">支付方式</div>
          <ul>
            <li class="selected">
              <img src="static/images/alipay.png" alt="">
            </li>
            <li>
              <img src="static/images/weixinpay.png" alt="">
            </li>
          </ul>
        </div>

        <div class="checkout-info">
          <div class="btn-pay">
            <a href="javascript:;">现在支付</a>
          </div>
          <aside class="total-price clearfix">
            应付金额:
            <span>
              <i>¥</i>64.00
            </span>
          </aside>
        </div>
      </section>
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

  .payment {
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
      box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);

      .title {
        position: relative;
        z-index: 10;
        height: 60px;
        padding: 0 10px 0 24px;
        border-bottom: 1px solid #d4d4d4;
        border-radius: 8px 8px 0 0;
        box-shadow: 0 1px 7px rgba(0,0,0,.06);
        background: linear-gradient(#fbfbfb,#ececec);
        line-height: 60px;
        font-size: 18px;
        color: #626262;
      }

      .order-info {
        padding: 60px 0 55px;
        color: #333;
        text-align: center;

        h3 {
          padding-bottom: 14px;
          line-height: 36px;
          font-size: 36px;
          color: #212121;
        }

        .tips {
          line-height: 24px;
          font-size: 14px;
          color: #999;

          span {
            color: #d44d44 !important;
            font-weight: 700 !important;
          }
        }
      }

      .payment-info {
        margin: 0 auto;
        width: 90%;
        padding: 0 30px 30px;
        clear: both;
        min-height: 300px;
        .payment-title {
          font-size: 18px;
          line-height: 40px;
          padding: 0 10px;
          position: relative;

          &::before {
            position: absolute;
            content: " ";
            clear: both;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom: 1px solid #ccc;
          }
        }


        ul {
          margin: 0 28px;
          padding: 8px 0 28px;

          li:not(last-child) {
            margin-right: 10px;
          }

          li {
            float: left;
            width: 175px;
            height: 50px;
            margin-top: 20px;
            background: #fafafa;
            border: 1px solid #e5e5e5;
            border-radius: 6px;
            box-sizing: border-box;
            cursor: pointer;

            &.selected {
              background: #fff;
              border-color: #6a8fe5;
            }

            img {
              display: block;
              height: 34px;
              margin: 8px auto;
            }
          }
        }
      }

      .checkout-info {
        padding: 10px;
        height: 60px;
        line-height: 60px;
        background: #f9f9f9;
        border-top: 1px solid #e5e5e5;
        box-sizing: border-box;

        .btn-pay {
          display: inline-block;
          float: right;
          width: 7.65rem;
          height: 40px;
          line-height: 1.65rem;
          text-align: center;
          border-radius: .3rem;
          overflow: hidden;
          outline: none;
          background: linear-gradient(#6f94e8,#5178df);
          text-shadow: 0 -0.05rem 0 rgba(0,0,0,.15);
          box-sizing: border-box;
          box-shadow: inset 0 0 0 0.05rem rgba(0,0,0,.1), inset 0 0.05rem 0.05rem hsla(0,0%,100%,.2), 0 2px 0.05rem -0.05rem rgba(0,0,0,.4);

          &:hover {
            background-color: #6c8cd4;
            background-image: linear-gradient(180deg,#6c8cd4,#4769c2);
          }

          a {
            display: block;
            line-height: 40px;
            font-size: 16px;
            width: 100%;
            height: 100%;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
          }
        }

        .total-price {
          float: right;
          line-height: 24px;
          padding: 8px 20px 4px 0;
          font-size: 14px;

          span {
            color: #d44d44;
            font-weight: bolder;
            font-size: 24px;
            margin-left: 5px;

            i {
              font-style: normal;
              font-size: 16px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
</style>