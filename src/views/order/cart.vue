/** 
 * 购物车
 */
<template>
  <div class="cart">
    <div class="cart-box">
      <div class="title">
        <h2>购物清单</h2>
      </div>
      <div class="cart-inner">
        <!-- 无商品 -->
        <div class="empty-wrap" v-show="hasEmpty">
          <h3>您的购物车中还没有商品</h3>
          <a href="javascript:;" class="cart-login">登录</a>
          <a href="javascript:;" class="cart-buy">现在选购</a>
        </div>
        <!-- 有商品 -->
        <div v-show="!hasEmpty">
          <div class="cart-title">
            <span class="name">商品信息</span>
            <span class="operator">操作</span>
            <span class="subtotal">小计</span>
            <span class="num">数量</span>
            <span class="price">单价</span>
          </div>
          <div class="cart-item">
            <ul>
              <li>
                <div class="item">
                  <div class="checkbox-wrap">
                    <span class="item-checkbox"></span>
                  </div>
                  <div class="item-thumb">
                    <img v-lazy="imgurl" alt="">
                    <a href="javascript:;"></a>
                  </div>
                  <div class="name">
                    <a href="javascript:;">除霾除甲醛高效复合滤芯</a>
                    <div>
                      <span>白色</span>
                      <span>除霾除甲醛高效复合滤芯</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="price">
                    <i>¥</i>
                    <span>799.00</span>
                  </div>
                  <div class="item-num">
                    <div class="num-wrap">
                      <span class="btn-oper down">-</span>
                      <span class="num">22</span>
                      <span class="btn-oper up">+</span>
                    </div>
                  </div>
                  <div class="subtotal">
                    <i>¥</i>
                    <span>799.00</span>
                  </div>
                  <div class="operator">
                    <a href="javascript:;" class="item-delete"></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cart-bottom" v-show="!hasEmpty">
        <div class="operator">
          <div class="select-wrap">
            <span class="select"></span>
            <span class="select-txt">全选</span>
          </div>
          <div class="delete-select">删除选中的商品</div>
        </div>
        <div class="shipping">
          <div class="shipping-box">
            <div class="shipping-total shipping-num">
              <h4>已选择<i>2</i>件商品</h4>
              <h5>共计<i>2</i>件商品</h5>
            </div>
            <div class="shipping-total shipping-price">
              <h4>应付总额:
                <span>￥</span>
                <i><span>488.00</span></i>
              </h4>
              <h5>应付总额不含运费</h5>
            </div>
          </div>
          <span class="checkout">
            <a href="javascript:;">现在结算</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let img = 'https://resource.smartisan.com/resource/bd68ff814182aac9434fc4978d1865fe.jpg?x-oss-process=image/resize,w_80/format,webp'

  export default {
    data () {
      return {
        imgurl: img,
        hasEmpty: true
      }
    },

    computed: {},

    mounted () {},

    methods: {},

    components: {}
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>

  .cart {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
    padding-top: 30px;
  }

  .cart-box {
    position: relative;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);

    .title {
      padding-left: 30px;
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
      color: #333;
    }

    .cart-inner {
      padding-bottom: 91px;
    }

    .empty-wrap {
      height: 49px;
      padding: 385px 0 91px;
      background: url(/static/images/cart-empty.png) no-repeat center 50px;
      text-align: center;

      a {
        display: inline-block;
        border-radius: 6px;
        width: 140px;
        line-height: 46px;
        height: 46px;
        margin: 0 5px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
        border: none;
        outline: none;
      }

      h3 {
        font-size: 14px;
        line-height: 1.5;
        color: #8d8d8d;
        margin-bottom: 17px;
      }

      .cart-login {
        border: 1px solid #5c81e3;
        color: #fff;
        background: #678ee7;
        background-image: linear-gradient(180deg,#678ee7,#5078df);
      }

      .cart-buy {
        border: 1px solid #e1e1e1;
        color: #646464;
        background-color: #f9f9f9;
        background-image: linear-gradient(180deg,#fff,#f9f9f9);
      }
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

      .operator {
        width: 137px;
      }

      .subtotal {
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

    .cart-item {
      position: relative;
      height: 140px;
      border-top: none;

      li {
        display: flex;
        width: 100%;
        position: relative;
        justify-content: space-between;
        align-items: center;

        .item {
          display: inline-flex;
          justify-content: center;
          position: relative;
          align-items: center;
        }

        .checkbox-wrap {
          width: 80px;
          height: 140px;
          text-align: center;
          line-height: 140px;
        }

        .item-checkbox {
          position: relative;
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(/static/images/checkbox.png) no-repeat;
          background-position: 0 -20px;
          cursor: pointer;
          vertical-align: middle;
        }

        .item-checkbox-on {
          background-position: 0 0;
        }

        .item-thumb {
          position: relative;
          float: left;
          overflow: hidden;
          width: 80px;
          height: 80px;

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

        .name {
          display: inline-flex;
          width: 380px;
          height: 140px;
          flex-direction: column;
          justify-content: center;
          margin-left: 20px;
          color: #323232;

          a {
            color: #333;
            font-size: 16px;
          }

          span {
            color: #999;
            font-size: 12px;
            padding-top: 4px;
            line-height: 17px;
          }
        }

        .price {
          overflow: hidden;
          float: right;
          width: 137px;
          text-align: center;
          color: #666;
          line-height: 140px;
          font-size: 14px;
        }

        .item-num {
          line-height: 40px;
          overflow: visible;
          float: right;
          width: 137px;
          text-align: center;
          color: #666;
          font-size: 14px;

          .num-wrap {
            width: 112px;
            height: 40px;
            padding-top: 4px;
            margin: 0 auto;
            line-height: 40px;
            position: relative;

            .btn-oper {
              overflow: hidden;
              float: left;
              display: inline-block;
              width: 34px;
              height: 34px;
              border-radius: 50%;
              margin-right: 5px;
              background: url(/static/images/cart-up-down.jpg) no-repeat;
              background-image: url(/static/images/cart-up-down.jpg);
              background-size: 108% auto;
              line-height: 40px;
              text-indent: -9999em;
              cursor: pointer;
              user-select: none;
            }

            .down {
              background-position: -1px -65px;

              &.disabled {
                background-position: -1px -324px;
                cursor: not-allowed;
              }
            }

            .num {
              position: relative;
              width: 36px;
              height: 18px;
              border: none;
              border-radius: 3px;
              line-height: 18px;
              text-align: center;
              font-size: 14px;
              overflow: hidden;
              float: left;
              display: inline-block;
              margin: 7px 0 0;
            }

            .up {
              float: right;
              margin: 0;
              background-position: -1px -1px;

              &.disabled {
                background-position: -1px -259px;
                cursor: not-allowed;
              }
            }
          }
        }

        .subtotal {
          overflow: hidden;
          float: right;
          width: 137px;
          text-align: center;
          color: #666;
          line-height: 140px;
          font-size: 14px;
          font-weight: 700;
        }

        .operator {
          overflow: hidden;
          float: right;
          width: 137px;
          text-align: center;
          color: #666;
          font-size: 12px;
          line-height: 24px;
          
          a {
            display: block;
            width: 24px;
            height: 24px;
            margin: 0 auto;
            color: #c2c2c2;
            background: url(/static/images/btn-delete.jpg);
            background-size: 100% auto;
            transition: none;
            border-radius: 50%;
          }
        }
      }
    }

    .cart-bottom {
      height: 90px;
      border-top: 1px solid #d9d9d9;
      border-radius: 0 0 8px 8px;
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 1;
      box-shadow: 0 -3px 8px rgba(0,0,0,.04);

      .operator {
        float: left;
        padding: 35px 26px;
        font-size: 12px;

        .select-wrap {
          float: left;
          height: 20px;
          line-height: 20px;
          cursor: pointer;
          position: relative;

          .select {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url(/static/images/checkbox.png) no-repeat;
            background-position: 0 -20px;
            cursor: pointer;
            vertical-align: middle;

            &.on {
              background-position: 0 0;
            }
          }

          .select-txt {
            float: right;
            margin-left: 9px;
          }

        }
        
        .delete-select {
          position: relative;
          margin-left: 21px;
          color: #bbb;
          float: left;
          height: 20px;
          line-height: 20px;
          cursor: pointer;

          &::before {
            content: "";
            position: absolute;
            left: -11px;
            top: 4px;
            height: 12px;
            width: 1px;
            background: #e1e1e1;
            cursor: default;
          }
        }
      }

      .shipping {
        display: inline-block;
        float: right;
        padding: 20px 30px;

        .shipping-box {
          display: inline-block;
          padding-top: 1px;
          margin-right: 10px;

          .shipping-total {
            display: inline-block;
            border-left: 1px solid #e1e1e1;
            padding: 0 20px;

            h4 {
              color: #323232;

              i {
                color: #d44d44;
                font-size: 18px;
                font-weight: 700;
              }
            }

            h5 {
              color: #959595;

              i {
                font-size: 16px;
                font-weight: 700;
              }
            }
          }

          .shipping-num {
            border: none;
            text-align: right;

            i {
              width: 28px;
              display: inline-block;
              text-align: center;
            }
          }

          .shipping-price {
            padding-right: 0;
          }
        }

        .checkout {
          display: block;
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
          height: 48px;

          &:hover {
            background: linear-gradient(#7592d4,#5272c6);
          }

          a {
            display: block;
            border-radius: 9px;
            cursor: pointer;
            text-shadow: none;
            transition: all .3s ease;
            padding: 2px 32px;
            font-size: 16px;
            height: 44px;
            line-height: 45px;
            box-shadow: none;
            color: #fff;
          }
        }
      }
    }
  }
</style>