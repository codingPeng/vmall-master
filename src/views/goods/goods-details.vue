/** 
 * 商品详情
 */
<template>
  <div class="goods-details">
    <main class="container">
      <section class="goods-box clearfix">
        <div class="gallery-wrap">
          <div class="gallery">
            <figure class="thumbnail">
              <ul>
                <li v-for="item in thumbList">
                  <img v-lazy="item" alt="">
                </li>
              </ul>
            </figure>
            <figure class="thumb">
              <ul>
                <li class="on">
                  <img v-lazy="imgOn" alt="">
                </li>
              </ul>
            </figure>
          </div>
        </div>
        <div class="goods-info">
          <article class="good-title">
            <h1>Smartisan 卫衣</h1>
            <h2>风格简洁、舒适服帖</h2>
            <div class="item-price">
              <span>
                <em>¥</em>
                <span>299.00</span>
              </span>
            </div>
          </article>

          <section class="good-count-wrap clearfix">
            <div class="good-count">
              <span class="good-count-title">数量选择</span>
              <aside class="select-count">
                <div class="select">
                  <span class="down" @click="_down">-</span>
                  <span class="num">{{goodsNum}}</span>
                  <span class="up" @click="_up">+</span>
                </div>
              </aside>
            </div>
          </section>

          <section class="good-intro-wrap clearfix">
            <div class="good-intro">
              <p>服务说明</p>
              <aside class="good-intro-txt"><p>此款卫衣为修身款</p></aside>
            </div>
          </section>
        </div>
      </section>
      <section class="goods-box clearfix">
        <article class="headline">
          <h2>产品信息</h2>
        </article>
        <div class="img-info">
          <img v-lazy="item" alt="" v-for="item in imgInfo">
        </div>
      </section>
      <section class="buy-wrap">
        <div class="buy">
          <h1 class="buy-text">你已选择了</h1>
          <div class="buy-info">
            <h1 class="clearfix">
              <span class="good-name">Smartisan 卫衣 开衫 热血 × 1 </span>
            </h1>
            <h2>黑色 | M | 男款</h2>
          </div>
          
          <div class="btn-buy"><a href="javascript:;"> 现在购买 </a></div>
          <div class="btn-buy btn-add-cart"> 加入购物车 </div>

          <div class="price-wrap">
            <div class="price">
              <i>¥</i>
              <span>299.00</span>
            </div>
          </div>
        </div>
      </section>
      <div class="toast-tips">
        <label></label>
      </div>
    </main>
  </div>
</template>

<script>
  let img1 = 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png?x-oss-process=image/resize,w_80/format,webp'
  let imgInfo = 'http://image.smartisanos.cn/resource/9be6229b3498749c4afd173a3b1fe165.png'
  let info1 = 'https://resource.smartisan.com/resource/9f01244b7b6b3794fac71277797829e7.png?x-oss-process=image/resize,w_1858/indexcrop,y_1440,i_0/format,webp/quality,Q_100'
  let info2 = 'https://resource.smartisan.com/resource/9f01244b7b6b3794fac71277797829e7.png?x-oss-process=image/resize,w_1858/indexcrop,y_1440,i_1/format,webp/quality,Q_100'
  let info3 = 'https://resource.smartisan.com/resource/9f01244b7b6b3794fac71277797829e7.png?x-oss-process=image/resize,w_1858/indexcrop,y_1440,i_2/format,webp/quality,Q_100'
  let info4 = 'https://resource.smartisan.com/resource/9f01244b7b6b3794fac71277797829e7.png?x-oss-process=image/resize,w_1858/indexcrop,y_1440,i_3/format,webp/quality,Q_100'
  let info5 = 'https://resource.smartisan.com/resource/9f01244b7b6b3794fac71277797829e7.png?x-oss-process=image/resize,w_1858/indexcrop,y_1440,i_4/format,webp/quality,Q_100'
  let imgOn = 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png?x-oss-process=image/resize,w_527/format,webp'

  import { getGoodsDetail } from 'api/api'
  export default {
    data () {
      return {
        thumbList: [img1],
        detailData: {},
        goodsNum: 1,
        imgInfo: [info1, info2, info3, info4, info5],
        imgOn: imgOn
      }
    },

    computed: {},

    mounted () {
      this._getGoodsDeatil()
    },

    methods: {
      _getGoodsDeatil() {
        let id = this.$route.query.id
        getGoodsDetail(id).then(res => {
          let data = res.data.data
          this.detailData = data
        }).catch(err => console.log(err))
      },

      // down
      _down() {
        if (this.goodsNum > 1) this.goodsNum--
      },

      // up
      _up() {
        this.goodsNum++
      }
    },

    components: {}
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>

  .goods-details {

    .container {
      position: relative;
      clear: both;
      min-height: 600px;
      padding-bottom: 60px;

      .goods-box {
        overflow: hidden;
        width: 1220px;
        margin: 0 auto 20px;
        background: #fff;
        border-radius: 8px;
        border: 1px solid #dcdcdc;
        box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
        box-sizing: border-box;

        .gallery-wrap {
          flex: 1;

          .gallery {
            width: 540px;
            display: inline-flex;

            .thumbnail {
              li {
                width: 54px;
                height: 54px;
                margin-top: 10px;
                padding: 12px;
                border: 1px solid #f0f0f0;
                border: 1px solid rgba(0,0,0,.06);
                border-radius: 5px;
                cursor: pointer;

                &.on {
                  padding: 10px;
                  border: 3px solid rgba(0,0,0,.2);
                }

                img {
                  display: block;
                  max-width: 100%;
                  height: auto;
                }
              }

              li:first-child {
                margin-top: 0;
              }
            }

            .thumb {
              flex: 1;

              ul {
                margin-left: 20px;
                width: 440px;
                height: 440px;
                position: relative;

                li {
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                  display: none;
                  opacity: 0;
                  text-align: center;
                  -webkit-user-select: none;
                  user-select: none;

                  &.on {
                    animation: thumb-change .35s ease-out 1;
                    position: relative;
                    display: block;
                    z-index: 1;
                    opacity: 1;
                  }

                  img {
                    display: block;
                    max-width: 100%;
                    height: auto;
                  }
                }
              }
            }
          }
        }

        .goods-info {
          width: 610px;

          .good-title {
            width: 100%;
            position: relative;
            border-bottom: 1px solid rgba(0,0,0,.08);

            h1 {
              width: 420px;
              font-size: 24px;
              line-height: 30px;
              color: #000;
              padding: 0 0 20px;
            }

            h2 {
              width: 420px;
              color: #999;
              font-size: 14px;
              line-height: 18px;
              padding-bottom: 28px;
            }

            .item-price {
              position: absolute;
              right: 9px;
              bottom: 28px;

              span {
                display: inline-block;
                color: #d44d44;
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                text-align: right;

                em {
                  font-weight: bolder;
                }

                i {
                  font-size: 24px;
                  padding-left: 3px;
                }
              }
            }
          }

          .good-count-wrap {
            margin: 0;
            padding: 30px 0;
            border-bottom: 1px solid rgba(0,0,0,.08);

            .good-count {
              position: relative;

              .good-count-title {
                width: 85px;
                height: 28px;
                line-height: 28px;
                color: #666;
                font-size: 14px;
                float: left;
              }

              .select-count {
                position: relative;
                float: left;
                width: 473px;
                height: 100%;

                .select {
                  position: absolute;
                  left: 0;
                  top: -3px;
                  overflow: hidden;
                  width: 128px;
                  height: 40px;
                  text-align: center;

                  .down {
                    position: relative;
                    float: left;
                    display: inline-block;
                    width: 36px;
                    height: 36px;
                    line-height: 40px;
                    text-indent: -9999em;
                    cursor: pointer;
                    margin: 0;
                    user-select: none;
                  }

                  .num {
                    position: relative;
                    overflow: hidden;
                    float: left;
                    display: inline-block;
                    width: 56px;
                    height: 18px;
                    margin: 7px 0 0;
                    border: none;
                    border-radius: 3px;
                    line-height: 18px;
                    text-align: center;
                    font-size: 14px;
                    font-weight: 700;
                    color: #454549;
                  }

                  .up {
                    margin: 0;
                    position: relative;
                    float: right;
                    display: inline-block;
                    width: 36px;
                    height: 36px;
                    line-height: 40px;
                    text-indent: -9999em;
                    cursor: pointer;
                    user-select: none;
                  }

                  .down.disabled, .up.disabled {
                    cursor: not-allowed;
                  }

                  .down::before, .up::before {
                    content: "";
                    position: absolute;
                    left: -4px;
                    right: -4px;
                    top: 0;
                    height: 45px;
                    background: url(//static.smartisanos.cn/index/assets/images/updown-select-icon.ce7e0ffb6ed63599a7537ee7ca06827c.png) no-repeat;
                    background-size: 100% auto;
                  }
                }
              }
            }
          }

          .good-intro-wrap {
            margin: 0;
            padding: 25px 0;
            border-bottom: 1px solid rgba(0,0,0,.08);

            .good-intro {
              position: relative;
              display: flex;

              p {
                width: 85px;
                height: 28px;
                line-height: 28px;
                color: #666;
                font-size: 14px;
                float: left;
              }

              .good-intro-txt {
                position: relative;
                top: 5px;
                width: 473px;

                p {
                  position: relative;
                  width: 100%;
                  padding-bottom: 0;
                  line-height: 1.5;
                  padding-left: 10px;
                  color: #999;
                  font-size: 12px;

                  &::before {
                    content: "*";
                    top: 2px;
                    margin: auto;
                    position: absolute;
                    left: 0;
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }

        .headline {
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

        .img-info {
          overflow: hidden;
          margin-bottom: -6px;
          border-radius: 0 0 10px 10px;

          img {
            display: block;
            width: 1220px;
            height: auto;
            max-width: inherit;
            margin-left: -1px;
          }
        }
      }

      .goods-box:first-child {
        padding: 60px;
        display: flex;
      }

      .buy-wrap {
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fafafa;
        border-top: 1px solid #e3e3e3;
        box-shadow: 0 -1px 3px rgba(0,0,0,.04);
        z-index: 25;

        &.fixed {
          position: fixed;
        }

        .buy {
          width: 1220px;
          line-height: 20px;
          margin: 12px auto 0;

          .buy-text {
            float: left;
            width: 60px;
            color: #707070;
            font-size: 12px;
            font-weight: 500;
            margin-right: 20px;
          }

          .buy-info {
            float: left;
            position: relative;
            margin-right: 20px;
            font-size: 14px;

            .good-name {
              color: #707070;
              float: left;
              font-weight: 700;
            }

            h2 {
              font-size: 12px;
              color: #9d9d9d;
            }
          }

          .price-wrap {
            width: 110px;
            float: right;
            margin-right: 20px;
            text-align: right;

            .price {
              position: relative;
              font-size: 20px;
              font-weight: bolder;
              color: #d44d44;
              line-height: 40px;

              i {
                font-style: normal;
                font-size: 14px;
              }
            }
          }

          .btn-buy {
            width: 118px;
            height: 38px;
            float: right;
            line-height: 38px;
            text-align: center;
            color: #fff;
            cursor: pointer;
            margin-left: 10px;
            border-radius: 6px;
            background-color: #6383c6;
            background-image: linear-gradient(#6383c6,#4262af);
            margin-top: -2px;
            padding: 1px;

            a {
              display: block;
              height: 34px;
              line-height: 34px;
              padding: 2px 0;
              border-radius: 6px;
              background-color: #5f7ed7;
              background-image: linear-gradient(#6f97e5,#527ed9);
              box-shadow: inset 0 1px 2px #7ea1e8;
              text-shadow: 0 -1px 0 #4f70b3;
              color: #fff;
              transition: none;

              &:hover {
                transition: all .15s ease-out;
                box-shadow: inset 0 1px 1px #7696de, inset 0 0 2px #627dca, inset 0 -2px 3px #5a77c7, inset 0 0 100px rgba(48,77,147,.4);
              }
            }
          }

          .btn-add-cart {
            border: 1px solid #dedede;
            color: #646464;
            background-color: #f8f8f8;
            background-image: linear-gradient(#fbfbfb,#f5f5f5);
            
            &:hover {
              box-shadow: inset 0 2px 3px -2px #cacaca;
              border: 1px solid #d1d1d1;
              color: #5e5e5e;
              background-color: #ececec;
              background-image: linear-gradient(#e2e2e2,#ededed);
            }
          }
        }
      }
    }

    @keyframes thumb-change {
      0% {
        opacity: .5;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>