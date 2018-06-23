/** 
 * 确认订单
 */
<template>
  <div class="checkout">
    <main class="container">
      <div class="checkout-box address-wrap">
        <div class="title">
          <h2>收货信息</h2>
        </div>

        <div class="box-inner">
          <section class="address-panel clearfix">
            <ul class="clearfix">
              <li class="selected">
                <article class="name">wang</article>
                <article class="phone">123456789</article>
                <article class="address">四川省成都市</article>
                <article class="address-detail">天府广场</article>
                <div class="operator">
                  <span class="btn-update">修改</span>
                  <span class="btn-delete">删除</span>
                </div>
              </li>
              <li class="add-address">
                <p>使用新地址</p>
              </li>
            </ul>
          </section>
          <!-- 管理收货地址 -->
          <div class="modal-address">
          </div>
          <!-- 确认删除 -->
          <div class="modal-delete"></div>
        </div>
      </div>

      <div class="checkout-box cart-box">
        <div class="title">
          <h2>购物清单</h2>
        </div>
        <div class="box-inner">
          <div>
            <div class="cart-title">
              <span class="name">商品信息</span>
              <span class="sub-total">小计</span>
              <span class="num">数量</span>
              <span class="price">单价</span>
            </div>

            <div class="cart-list">
              <ul>
                <li v-for="(item, index) in imgList" :key="index">
                  <div class="cart-item">
                    <div class="item-thumb">
                      <img v-lazy="item" alt="">
                      <router-link to=""></router-link>
                    </div>
                    <div class="name-wrap">
                      <div class="name">
                        <router-link to="">坚果 Pro 软胶保护套（黑色）</router-link>
                      </div>
                    </div>
                    <div>
                      <div class="sub-total">
                        <i>¥</i>
                        <span>49.00</span>
                      </div>
                      <div class="item-num">1</div>
                      <div class="price">
                        <i>¥</i>
                        <span>49.00</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="box-inner">
          <div class="order-discount">
            <p class="clearfix">商品总计: <span class="discount"><strong><i>¥</i><span>4300.00</span></strong></span></p>
            <p class="clearfix">运费: <span class="discount">+<strong><i>¥</i><span>0.00</span></strong></span></p>
          </div>
        </div>

        <div class="box-inner">
          <div class="order-submit clearfix">
            <span class="btn-submit">
              <a href="javascript:;">提交订单</a>
            </span>
            <span class="total">应付金额<em><i>¥</i><span>4300.00</span></em></span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  let thumb1 = 'https://resource.smartisan.com/resource/554da94d8e4f84f03e0015fd1c997f46.jpg?x-oss-process=image/resize,w_80/format,webp'

  export default {
    data () {
      return {
        imgList: [thumb1]
      }
    },

    computed: {},

    mounted () {},

    methods: {},

    components: {}
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>

  .container {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
    padding-top: 30px;

    .checkout-box {
      position: relative;
      margin-bottom: 30px;
      overflow: hidden;
      background: #fff;
      border-radius: 8px;
      border: 1px solid #dcdcdc;
      border-color: rgba(0,0,0,.14);
      box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    }

    .address-wrap {
      overflow: visible;

      .title {
        padding-left: 30px;
        position: relative;
        z-index: 10;
        height: 60px;
        padding: 0 10px 0 24px;
        border-bottom: 1px solid #d4d4d4;
        border-radius: 8px 8px 0 0;
        box-shadow: 0 1px 7px rgba(0,0,0,.06);
        background: #f3f3f3;
        background: linear-gradient(#fbfbfb,#ececec);
        line-height: 60px;
        font-size: 18px;
        color: #333;
      }

      .box-inner {
        position: relative;
        padding: 30px 30px 0;

        .address-panel {
          border-radius: 0 0 8px 8px;
          font-size: 14px;
          color: #626262;

          li {
            position: relative;
            overflow: hidden;
            float: left;
            width: 276px;
            height: 158px;
            margin-bottom: 30px;
            margin-right: 18px;
            padding: 19px 14px 0 19px;
            border: 1px solid #e5e5e5;
            border-radius: 3px;
            box-sizing: border-box;
            background: #fafafa;
            line-height: 14px;
            text-align: left;
            word-wrap: break-word;
            word-break: normal;
            color: #626262;
            cursor: pointer;
            -webkit-user-select: none;
            user-select: none;

            &::after {
              content: "H";
              display: block;
              position: absolute;
              right: 17px;
              top: 19px;
              font-family: SmartisanIconFont;
              font-size: 24px;
              color: #5079d9;
            }

            &:hover {
              .operator {
                visibility: visible;
                transform: translate(0);
              }
            }

            &.selected {
              background: #fff;
              border-color: #6a8fe5;

              &::before {
                content: "H";
                display: block;
                position: absolute;
                right: 17px;
                top: 19px;
                font-family: SmartisanIconFont;
                font-size: 24px;
                color: #5079d9;
              }
            }

            .name {
              width: 100%;
              height: 16px;
              padding-right: 20px;
              line-height: 16px;
              font-size: 16px;
              color: #666;
              overflow: hidden;
              word-break: keep-all;
              white-space: nowrap;
              text-overflow: ellipsis;  
            }

            .phone {
              height: 14px;
              margin-top: 17px;
              line-height: 14px;
              color: #999;
            }

            .address {
              padding-top: 6px;
              line-height: 24px;
              color: #999;
            }

            .address-detail {
              line-height: 24px;
              color: #999;
            }

            .operator {
              visibility: hidden;
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 28px;
              background: #e1e1e1;
              border-top: 1px solid #e1e1e1;
              transition: all .2s ease;
              transform: translateY(29px);

              span {
                display: block;
                height: 28px;
                background: #fff;
                text-align: center;
                line-height: 28px;
                font-size: 12px;
                transition: background .15s ease;
              }

              .btn-update {
                float: left;
                width: 137px;
              }

              .btn-delete {
                float: right;
                width: 136px;
              }
            }
          }
        }

        .add-address {
          transition: all .15s ease;
          margin-right: 0;

          p {
            height: 14px;
            padding-top: 85px;
            line-height: 14px;
            text-align: center;
            color: #999;
          }

          &::before {
            content: "F";
            display: block;
            position: absolute;
            left: 50%;
            top: 54px;
            height: 24px;
            margin-left: -10px;
            line-height: 24px;
            text-align: center;
            font-size: 24px;
            font-family: SmartisanIconFont;
            color: #626262;
          }
        }
      }
    }

    .cart-box {
      .title {
        padding-left: 30px;
        position: relative;
        z-index: 10;
        height: 60px;
        padding: 0 10px 0 24px;
        border-bottom: 1px solid #d4d4d4;
        border-radius: 8px 8px 0 0;
        box-shadow: 0 1px 7px rgba(0,0,0,.06);
        background: #f3f3f3;
        background: linear-gradient(#fbfbfb,#ececec);
        line-height: 60px;
        font-size: 18px;
        color: #333;
      }

      .cart-title {
        position: relative;
        z-index: 1;
        line-height: 38px;
        height: 38px;
        padding: 0 0 0 30px;
        font-size: 12px;
        background: #eee;
        border-bottom: 1px solid #dbdbdb;
        border-top: none;
        border-bottom-color: rgba(0,0,0,.08);

        span {
          float: right;
          text-align: center;
          color: #838383;
        }

        .name {
          float: left;
          text-align: left;
        }

        .sub-total {
          text-align: center;
          width: 137px;
        }

        .num {
          width: 137px;
        }

        .price {
          width: 137px;
        }
      }

      .cart-list {
        li {
          position: relative;
        }
      }

      .cart-item {
        border-top: 1px solid #eee;
        position: relative;
        height: 110px;
        margin-left: 30px;

        .item-thumb {
          position: relative;
          margin-top: 15px;
          overflow: hidden;
          width: 80px;
          height: 80px;
          float: left;

          img {
            width: 80px;
            height: 80px;
          }

          a {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border: 1px solid #fff;
            border-radius: 3px;
            border: 0 solid hsla(0,0%,100%,.1);
            box-shadow: inset 0 0 0 1px rgba(0,0,0,.06);
          }
        }

        .name-wrap {
          width: 380px;
          margin-left: 30px;
          color: #323232;
          display: table;
          float: left;
          overflow: hidden;
          word-break: keep-all;
          white-space: nowrap;
          text-overflow: ellipsis;

          .name {
            display: table-cell;
            vertical-align: middle;
            height: 110px;

            a {
              color: #333;
              font-size: 14px;
            }
          }
        }

        .item-num,
        .price,
        .sub-total {
          overflow: hidden;
          float: right;
          width: 137px;
          text-align: center;
          color: #666;
          line-height: 110px;
          font-size: 14px;
          font-weight: 700;
        }

        .sub-total {
          text-align: center;
          font-size: 14px;
          font-weight: 700;

          i {
            font-style: normal;
          }
        }

        .item-num {
          padding-top: 35px;
          line-height: 40px;
          overflow: visible;
        }

        .price {
          i {
            font-style: normal;
          }
        }
      }

      .order-discount {
        padding: 21px 30px;
        border-top: 1px solid #ebebeb;
        line-height: 30px;
        text-align: right;

        .discount {
          float: right;
          width: 157px;
          font-weight: 700;
        }
      }

      .order-submit {
        padding: 22px 29px 19px 30px;
        background: linear-gradient(#fcfcfc,#f5f5f5);
        border-top: 1px solid #dadada;
        box-shadow: -3px 0 8px rgba(0,0,0,.04);

        .btn-submit {
          display: block;
          height: 48px;
          float: right;
          padding: 1px;
          margin: 0 auto;
          border-radius: 9px;
          text-align: center;
          text-shadow: hsla(0,0%,100%,.496094) 0 1px 0;
          cursor: pointer;
          user-select: none;
          background: linear-gradient(#799cea,#567ce6);
          box-shadow: 0 1px 3px rgba(0,0,0,.1), inset 0 -1px 2px rgba(0,0,0,.2);

          &:hover {
            background: linear-gradient(#7592d4,#5272c6);
          }

          a {
            box-shadow: none;
            color: #fff;
            display: block;
            border-radius: 9px;
            cursor: pointer;
            text-shadow: none;
            transition: all .3s ease;
            padding: 2px 32px;
            font-size: 16px;
            height: 44px;
            line-height: 45px;
          }
        }

        .total {
          padding: 0 40px;
          line-height: 50px;
          font-size: 14px;
          float: right;

          em {
            display: inline-block;
            position: relative;
            top: 3px;
            margin-top: -4px;
            margin-left: 10px;
            font-size: 24px;
            color: #d44d44;
            font-weight: 700;
            font-style: normal;

            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
</style>
