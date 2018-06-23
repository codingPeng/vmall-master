/** 
 * 订单列表
 */
<template>
  <div class="orderList">
    <header>
      <h2>我的订单</h2>
    </header>
    <section class="container">
      <ul>
        <li class="clearfix">
          <div class="item-title">
            <span class="date">2017-12-04</span>
            <span class="order-id">
              订单号:
              <a>15623544662</a>
            </span>
            <span class="view-detail">
              <a href="javascript:;">
                查看详情
                <strong>></strong>
              </a>
            </span>
            <span class="total">应付总额</span>
            <span class="operator">商品操作</span>
            <span class="num">数量</span>
            <span class="price">单价</span>
          </div>
          <div class="order-info">
            <div class="goods">
              <div class="goods-item">
                <div class="item-thumb">
                  <a href="javascript:;">
                    <img src="https://resource.smartisan.com/resource/554da94d8e4f84f03e0015fd1c997f46.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp" alt="">
                  </a>
                </div>
                <div class="name-wrap">
                  <div class="name">
                    <a href="JavaScript:;">坚果 Pro 软胶保护套（黑色）</a>
                  </div>
                </div>
                <div class="item-operator">
                  <el-button type="danger" class="item-delete" size="small">删除此订单</el-button>
                </div>
                <div class="item-num">12</div>
                <div class="item-price">¥ 49.00</div>
              </div>
            </div>
            <div class="goods-operator">
              <div class="item-total">¥ 64.00</div>
              <div class="item-detail">
                <a href="javascript:;">现在付款</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
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

  .orderList {
    overflow: hidden;
    background: #fff;
    border: 1px solid rgba(0,0,0,.14);
    border-radius: 10px;

    header {
      position: relative;
      height: 60px;
      padding: 0 10px 0 28px;
      background: #f5f5f5;
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

    .container {
      position: relative;
      min-height: 540px;

      li {
        clear: both;
        font-family: Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft Yahei,STHeiti,sans-serif;
        

        .item-title {
          height: 38px;
          padding: 0 24px;
          background: #eee;
          border-top: 0;
          border-bottom: 1px solid #dbdbdb;
          line-height: 38px;
          font-size: 12px;
          color: #666;

          .date {
            float: left;
            width: 108px;
            text-align: left;
            margin-left: 6px;
          }

          .order-id {
            text-align: left;
            float: left;

            a {
              color: #5079d9;
              cursor: pointer;
              transition: all .15s ease-out;
              text-decoration: none;

              &:hover {
                color: #395699;
              }
            }
          }

          .view-detail {
            float: right;
            width: 82px;
            text-align: center;
            margin-left: 24px;

            a {
              strong {
                float: right;
                display: inline-block;
                vertical-align: initial;
              }

              &:hover {
                color: #395699;
                transition: all .3s ease-out;
              }
            }
          }

          .total {
            float: right;
            width: 102px;
            text-align: right;
            margin-right: 18px;
            border-left: 1px solid #dbdbdb;
          }

          .operator {
            float: right;
            width: 95px;
            height: 38px;
            margin-right: 23px;
            text-align: center;
          }

          .num {
            float: right;
            width: 70px;
            text-align: center;
          }

          .price {
            float: right;
            width: 85px;
            padding-right: 27px;
            text-align: right;
          }
        }

        .order-info {
          position: relative;

          &:hover {
            .goods-item {
              .item-operator {
                .item-delete {
                  display: inline-block;
                }
              }
            }
          }

          .goods {
            float: left;
            width: 737px;
            padding: 0;
            border-top: 0;
            border-right: 1px solid #ebebeb;
          }

          .goods-item {
            position: relative;
            height: 110px;
            padding: 15px 0 15px 111px;

            .item-thumb {
              position: absolute;
              left: 30px;
              top: 15px;
              width: 81px;
              height: 81px;
              border: 1px solid #ebebeb;
              border-radius: 3px;

              a {
                color: #5079d9;
                cursor: pointer;
                transition: all .15s ease-out;
                text-decoration: none;

                img {
                  width: 78px;
                  height: 78px;
                  bottom: 0;
                }
              }
            }

            .name-wrap {
              float: left;
              height: 50px;
              padding: 15px 0;
              margin-left: 29px;
              border-bottom: none;
              line-height: 25px;
              .name {
                float: none;
                color: #666;
                width: 220px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                height: auto;
                line-height: 50px;

                a {
                  color: #666;
                }
              }
            }

            .item-operator {
              display: table;
              width: 95px;
              height: 80px;
              float: right;
              margin-right: 23px;
              line-height: 80px;
              text-align: center;
              .item-delete {
                display: none;
              }
            }

            .item-num {
              width: 70px;
              float: right;
              line-height: 80px;
              text-align: center;
              color: #626262;
            }

            .item-price {
              width: 85px;
              float: right;
              line-height: 80px;
              padding-right: 27px;
              text-align: right;
              font-weight: 700;
            }
          }

          .goods-operator {
            position: absolute;
            right: 0;
            display: table;
            height: 110px;
            .item-total {
              display: table-cell;
              padding-right: 18px;
              line-height: 14px;
              text-align: right;
              vertical-align: middle;
              font-weight: 700;
            }

            .item-detail {
              display: table-cell;
              width: 80px;
              padding: 0 24px;
              text-align: center;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }

</style>