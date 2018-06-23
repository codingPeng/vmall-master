/** 
  * 首页
 */
<template>
  <div>
    <div class="home-main">
      <div class="banner">
        <ul class="banner-slides">
          <li v-for="item in bannerList">
            <router-link to="">
              <div class="slides-img">
                <img v-lazy="item.imgUrl" alt="">
              </div>
            </router-link>
          </li>
        </ul>
        <ul class="banner-indicator">
          <li v-for="(i,index) in bannerList" @click="calWidth(index)">
            <span></span>
            <div class="progress" ref="progress" :style="{width: `${progress}%`}"></div>
          </li>
        </ul>
      </div>

      <!-- 活动商品 -->
      <section class="activity-wrap">
        <ul>
          <li v-for="item in themeList">
            <img v-lazy="item.imgUrl" alt="">
            <router-link to=""></router-link>
          </li>
        </ul>
      </section>
      <!-- 热门商品 -->
      <section class="floor-wrap">
        <div class="box">
          <header>
            <h5 class="title">热门商品</h5>
            <div class="hot-nav">
              <span class="hot-arrow pre" :class="{disable: hasHotNav}" @click="_hotDisable('pre')"></span>
              <span class="hot-arrow next" :class="{disable: !hasHotNav}" @click="_hotDisable('next')"></span>
            </div>
          </header>
          <div class="hot-wrap">
            <ul class="cell-list hot-cell-list active">
              <li v-for="(item,index) in hotList" v-if="hasHotNav ? index > 0 : index > 3">
                <div class="item-cell">
                  <img v-lazy="item.imgUrl" alt="">
                  <div class="info">
                    <h6>{{item.title}}</h6>
                    <p class="promotion">{{item.desc}}</p>
                  </div>
                  <p class="price">
                    <i>¥</i>
                    <span>{{item.price || 0}}</span>
                    <span class="original-price" v-show="item.orginalPrice"><i>¥</i>{{item.orginalPrice}}</span>
                  </p>
                  <div class="operator">
                    <span class="btn-detail" @click="_detail(item.id)">查看详情</span>
                    <span class="btn-cart">加入购物车</span>
                  </div>
                  <router-link to="" class="cover-link"></router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 官方精选 -->
      <section class="floor-wrap">
        <div class="box">
          <header>
            <h5 class="title">官方精选</h5>
          </header>
          <div class="cell-list">
            <ul class="active">
              <li class="recommended no-border-left">
                <div>
                  <img v-lazy="defaultImg" alt="">
                  <router-link class="cover-link" to=""></router-link>
                </div>
              </li>
              <li v-for="(item,index) in featured" :class="{'border-top': index > 1, 'no-border-left': index === 2}">
                <div class="item-cell">
                  <img v-lazy="item.imgUrl" alt="">
                  <div class="info">
                    <h6>{{item.title}}</h6>
                    <p class="promotion">{{item.desc}}</p>
                  </div>
                  <p class="price">
                    <i>¥</i>
                    <span>{{item.price}}</span>
                    <span class="original-price" v-show="item.orginalPrice"><i>¥</i>{{item.orginalPrice}}</span>
                  </p>
                  <div class="operator">
                    <span class="btn-detail" @click="_detail(item.id)">查看详情</span>
                    <span class="btn-cart">加入购物车</span>
                  </div>
                  <router-link to="" class="cover-link"></router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 品牌周边 -->
      <section class="floor-wrap">
        <div class="box">
          <header>
            <h5 class="title">品牌周边</h5>
          </header>
          <div class="cell-list">
            <ul class="active">
              <li class="recommended no-border-left">
                <div>
                  <img v-lazy="defaultImg" alt="">
                  <router-link class="cover-link" to=""></router-link>
                </div>
              </li>
              <li v-for="(item,index) in brandAround" :class="{'border-top': index > 1, 'no-border-left': index === 2}">
                <div class="item-cell">
                  <img v-lazy="item.imgUrl" alt="">
                  <div class="info">
                    <h6>{{item.title}}</h6>
                    <p class="promotion">{{item.desc}}</p>
                  </div>
                  <p class="price">
                    <i>¥</i>
                    <span>{{item.price}}</span>
                    <span class="original-price" v-show="item.orginalPrice"><i>¥</i>{{item.orginalPrice}}</span>
                  </p>
                  <div class="operator">
                    <span class="btn-detail" @click="_detail(item.id)">查看详情</span>
                    <span class="btn-cart">加入购物车</span>
                  </div>
                  <router-link to="" class="cover-link"></router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 品牌精选 -->
      <section class="floor-wrap">
        <div class="box">
          <header>
            <h5 class="title">品牌精选</h5>
          </header>
          <div class="cell-list">
            <ul class="active">
              <li class="recommended no-border-left">
                <div>
                  <img v-lazy="brandSelection[0].imgUrl" alt="">
                  <router-link class="cover-link" to=""></router-link>
                </div>
              </li>
              <li v-if="index > 0" v-for="(item,index) in brandSelection" :class="{'border-top': index > 1, 'no-border-left': index === 2}">
                <div class="item-cell">
                  <img v-lazy="item.imgUrl" alt="">
                  <div class="info">
                    <h6>{{item.title}}</h6>
                    <p class="promotion">{{item.desc}}</p>
                  </div>
                  <p class="price">
                    <i>¥</i>
                    <span>{{item.price}}</span>
                    <span class="original-price" v-show="item.orginalPrice"><i>¥</i>{{item.orginalPrice}}</span>
                  </p>
                  <div class="operator">
                    <span class="btn-detail" @click="_detail(item.id)">查看详情</span>
                    <span class="btn-cart">加入购物车</span>
                  </div>
                  <router-link to="" class="cover-link"></router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  let imgUrl1 = 'https://shopstatic.vivo.com.cn/vivoshop/commodity/20180224/20180224174752609311_original.jpg'
  let imgUrl2 = 'https://shopstatic.vivo.com.cn/vivoshop/commodity/20180224/20180224174809102139_original.jpg'
  let imgUrl3 = 'https://shopstatic.vivo.com.cn/vivoshop/commodity/20180224/20180224174822184540_original.jpg'
  let activity1 = 'https://resource.smartisan.com/resource/s/sixiaobanner3.jpg?x-oss-process=image/resize,w_305/quality,Q_100'
  let activity2 = 'https://resource.smartisan.com/resource/9ae4d799a478d1a629966f84b56a1277.jpg?x-oss-process=image/resize,w_305/quality,Q_100'
  let activity3 = 'https://resource.smartisan.com/resource/9ae4d799a478d1a629966f84b56a1277.jpg?x-oss-process=image/resize,w_305/quality,Q_100'
  let activity4 = 'https://resource.smartisan.com/resource/9ae4d799a478d1a629966f84b56a1277.jpg?x-oss-process=image/resize,w_305/quality,Q_100'

  let img1 = 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png?x-oss-process=image/resize,w_206/format,webp/quality,Q_90'
  let img2 = 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png?x-oss-process=image/resize,w_206/format,webp/quality,Q_90'
  let img3 = 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png?x-oss-process=image/resize,w_206/format,webp/quality,Q_90'
  let img4 = 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png?x-oss-process=image/resize,w_206/format,webp/quality,Q_90'
  let img5 = 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png?x-oss-process=image/resize,w_206/format,webp/quality,Q_90'
  let img6 = 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png?x-oss-process=image/resize,w_206/format,webp/quality,Q_90'

  import { getMainList } from 'api/api'

  export default {
    data () {
      return {
        bannerList: [],
        activityImgList: [activity1, activity2, activity3, activity4],
        imgList: [img1, img2, img3, img4, img5, img6],
        themeList: [],
        hotList: [],
        brandAround: [],
        brandSelection: [],
        featured: [],
        defaultImg: 'https://resource.smartisan.com/resource/p/pcyuanxiaojielouceng.jpg?x-oss-process=image/resize,w_610/format,webp/quality,Q_100',
        progress: 0,
        hasHotNav: true
      }
    },

    computed: {},

    mounted () {
      this._getMainList()
    },

    watch: {

    },

    methods: {
      // 获取首页数据
      _getMainList() {
        let _this = this
        getMainList().then(res => {
          let data = res.data.data
          _this.bannerList = data.banner
          _this.themeList = data.theme
          _this.hotList = data.hot
          _this.brandAround = data.brandAround
          _this.brandSelection = data.brandSelection
          _this.featured = data.featured
        }).catch(err => console.log(err))
      },

      // banner高度
      calWidth (i) {
        let maxOffset = 100
        let timer = null
        if (this.progress >= maxOffset) {
          clearTimeout(timer)
          timer = null
        } else {
          // this.$refs.progress[0].style.width = parseFloat(this.$refs.progress[0].style.width) + 0.3 + '%'
          this.progress = this.progress + 1
          timer = window.setTimeout(this.calWidth(), 10)
          console.log('宽度----', this.progress)
        }
        console.log('正在----', this.progress)
      },

      _hotDisable (flag) {
        switch (flag) {
          // 上一页
          case 'pre':
            this.hasHotNav = true
            break
          // 下一页
          case 'next':
            this.hasHotNav = false
            break
        }
      },

      // 详情
      _detail(id) {
        this.$router.push({path: '/goodsDetails', query: {id}})
      }
    },

    components: {
    }
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>

  .home-main {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding: 0 0 60px;
  }

  .banner {
    margin-bottom: 10px;
    font-size: 0;
  }

  .banner-slides {
    overflow: hidden;

    li {
      float: left;
      margin-left: -100%;
      width: 100%;
      background: #fff center center no-repeat;
    }

    li:first-child {
      margin-left: 0;
    }

    .slides-img {
      position: relative;
      width: 100%;
      overflow: hidden;
      display: block;
      margin: 0 auto;

      img {
        vertical-align: top;
        width: 100%;
        height: 450px;
        // visibility: hidden;
        visibility: visible;
      }
    }
  }

  .banner-indicator {
    margin-top: -20px;
    height: 20px;
    line-height: 5px;
    text-align: center;

    li {
      position: relative;
      z-index: 3;
      cursor: pointer;
      display: inline-block;
      vertical-align: bottom;
      margin: 0 5px;
      width: 42px;
      // background-color: #ebebeb;
      background-color: rgba(255,255,255,.7);

      span {
        position: absolute;
        left: 0;
        right: 0;
        top: -7px;
        bottom: -7px;
        background-image: none;
      }

      &:hover {
        height: 5px;
      }
    }

    .current {
      height: 5px;
    }

    .progress {
      width: 0;
      height: 2px;
      background-color: #f7f7f7;
      transition: height .3s;
      // background-color: rgba(255,255,255,1);
    }
  }

  .activity-wrap {
    ul {
      overflow: hidden;
      position: relative;
      z-index: 0;
      margin-top: 25px;
      box-sizing: border-box;
      border: 1px solid rgba(0,0,0,.14);
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);

      li {
        float: left;
        position: relative;
        box-sizing: border-box;
        width: 25%;
        height: 200px;
        text-align: center;

        img {
          width: 305px;
          height: 200px;
        }

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          box-sizing: border-box;
          border-left: 1px solid #f2f2f2;
          border-left: 1px solid rgba(0,0,0,.1);
          width: 100%;
          height: 100%;
          content: "";
          pointer-events: none;
        }

        a {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 4;

          &:hover {
            box-shadow: inset 0 0 38px rgba(0,0,0,.08);
            transition: all .15s ease;
          }
        }
      }
    }
  }

  .floor-wrap {
    overflow: hidden;
    .box {
      overflow: hidden;
      width: 100%;
      header {
        display: block;
        position: relative;
        font-size: 18px;
        line-height: 60px;
        color: #666;
        background: #fafafa;

        &::after {
          position: absolute;
          bottom: -1px;
          left: 0;
          z-index: 10;
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,.1);
          content: " ";
        }

        .title {
          margin-left: 30px;
        }
        .hot-nav {
          position: absolute;
          top: 18px;
          right: 8px;
          font-size: 16px;
          line-height: 16px;
          .hot-arrow {
            display: inline-block;
            margin-top: -2px;
            margin-left: 17px;
            border: none;
            width: 36px;
            height: 36px;
            text-align: left;
            color: #474747;
            background-color: inherit;
            background-image: url(/static/images/hot-arrow.png);
            background-repeat: no-repeat;
            cursor: pointer;
            user-select: none;
          }

          .pre {
            background-position: 0 0;
          }

          .next {
            background-position: -138px 0;
            &.disable {
              margin-top: -3px;
              background-position: -92px 0;
            }
          }

          .disable {
            margin-top: -3px;
            background-position: -46px 0;
            cursor: not-allowed;
          }
        }
      }

      .cell-list {
        display: block;

        li.border-top::before {
          border-top: 1px solid rgba(0,0,0,.1);
        }

        li.no-border-left::before {
          border-left: none;
        }

        .recommended {
          float: left;
          box-sizing: border-box;
          width: 50%;
          height: 429px;

          div, img {
            width: 100%;
            height: 100%;
          }
        }
          
        li {
          float: left;
          position: relative;
          box-sizing: border-box;
          width: 25%;
          height: 429px;
          text-align: center;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            box-sizing: border-box;
            border-left: 1px solid #f2f2f2;
            border-left: 1px solid rgba(0,0,0,.1);
            width: 100%;
            height: 100%;
            content: "";
            pointer-events: none;
          }

          &:hover {
            .item-cell {
              .operator {
                visibility: visible;
                opacity: 1;
                transition: all .15s ease;
                transform: translateZ(0);
              }

              .price {
                opacity: 0;
                transition: all .1s ease-out;
              }
            }
          }

          .item-cell {
            img {
              display: block;
              margin: 50px auto;
              width: 206px;
              height: 206px;
            }

            .info {
              position: absolute;
              top: 274px;
              left: 0;
              box-sizing: border-box;
              padding: 0 10px;
              width: 100%;
              
              h6 {
                overflow: hidden;
                font-size: 16px;
                line-height: 1.2;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #424242;
              }

              p {
                overflow: hidden;
                padding-top: 15px;
                font-size: 12px;
                line-height: 1.2;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #b2b2b2;
              }
            }

            .price {
              display: inline-block;
              position: absolute;
              top: 369px;
              left: 0;
              width: 100%;
              font-family: Arial;
              font-size: 18px;
              line-height: 1.2;
              text-align: center;
              color: #de4037;

              span {
                position: relative;
                font-weight: 700;
              }

              .original-price {
                color: #d2d2d2;
                font-size: 13px;
                margin-left: 3px;
                font-weight: 400;
                position: relative;
                display: inline-block;

                &::before {
                  content: "";
                  display: block;
                  position: absolute;
                  width: 100%;
                  border-top: 1px solid #d2d2d2;
                  margin-top: 8px;
                }

                i {
                  color: #d2d2d2;
                  margin-right: 2px;
                  font-weight: 400;
                }
              }
            }

            .operator {
              visibility: hidden;
              position: absolute;
              bottom: 29px;
              z-index: 20;
              width: 100%;
              font-size: 0;
              line-height: 30px;
              opacity: 0;

              .btn-detail {
                display: inline-block;
                border: 1px solid #e1e1e1;
                border-radius: 4px;
                font-size: 12px;
                color: #646464;
                background-color: #f9f9f9;
                background-image: linear-gradient(180deg,#fff,#f9f9f9);
                cursor: pointer;

                a {
                  display: block;
                  color: #646464;
                }

                &:hover {
                  background-color: #eee;
                  background-image: linear-gradient(180deg,#f5f5f5,#eee);
                }
              }

              .btn-cart {
                display: inline-block;
                border: 1px solid #5c81e3;
                border-radius: 4px;
                font-size: 12px;
                color: #fff;
                background: #678ee7;
                background-image: linear-gradient(180deg,#678ee7,#5078df);
                cursor: pointer;

                &:hover {
                  background-color: #6c8cd4;
                  background-image: linear-gradient(180deg,#6c8cd4,#4769c2);
                }
              }

              span {
                margin: 0 5px;
                box-sizing: border-box;
                width: 100px;
                height: 30px;
                line-height: 28px;
                vertical-align: middle;
              }
            }
          }
        }
      }

      .hot-wrap {
        overflow: hidden;
        position: relative;
        height: 429px;
        transition: all .3s ease-in-out;

        .hot-cell-list {
          visibility: hidden;
          float: left;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity .3s;

          &.active {
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
  }
</style>
