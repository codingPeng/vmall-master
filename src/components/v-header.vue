/** 
  * header
 */
<template>
  <header>
    <div class="nav-main">
      <div class="nav-global" @mouseover="showSubPanel(false)" @mouseout="showSubPanel(false)">
        <div class="container" @mouseover="showSubPanel(false)" @mouseout="showSubPanel(false)">
          <h1>
            <router-link to="/" title="vmall商城" class="nav-logo">vmall商城</router-link>
          </h1>
          <ul class="nav-list">
            <li>
              <i class="el-icon-search"></i>
            </li>
            <li>
              <router-link to="/goods">全部商品</router-link>
            </li>
            <li>
              <router-link to="/specialGoods">特色商品</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav-sub" :class="{active: subCartPanel}">
      <div class="nav-sub-bg"></div>
      <div class="container">
        <ul class="nav-list">
          <li @mouseover="showSubPanel(false)" @mouseout="showSubPanel(false)">
            <router-link to="/">首页</router-link>
          </li>
          <li @mouseover="showSubPanel(false)" @mouseout="showSubPanel(false)">
            <router-link to="/goods">全部商品</router-link>
          </li>
          <li @mouseover="showSubPanel(true)">
            <router-link to="/specialGoods">特色商品</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-sub-panel" v-show="subCartPanel" @mouseover="showSubPanel(true)" @mouseout="showSubPanel(false)">
        <ul>
          <li>
            <router-link to="/">
              <div class="item-thumb">
                <img width=160 height=160 src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_160/format,webp" alt="">
              </div>
              <p class="item-name">坚果Pro2</p>
              <p class="item-price">¥ 1,799.00 起</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="item-thumb">
                <img width=160 height=160 src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_160/format,webp" alt="">
              </div>
              <p class="item-name">坚果Pro2</p>
              <p class="item-price">¥ 1,799.00 起</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    data () {
      return {
        hasFixed: false
      }
    },

    computed: {
      ...mapState(
        ['subCartPanel']
      )
    },

    mounted () {
      this.navFixed()
      window.addEventListener('scroll', this.navFixed)
      window.addEventListener('resize', this.navFixed)
    },

    methods: {
      ...mapMutations(['SUB_CART_PANEL']),
      navFixed () {
        let srcollHeight = document.documentElement.scrollTop || document.body.scrollTop
        srcollHeight >= 100 ? this.hasFixed = true : this.hasFixed = false
      },

      showSubPanel (flag) {
        this.SUB_CART_PANEL({subCartPanel: flag})
      }
    },

    components: {}
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>
  @import '~assets/styles/theme.scss';

  header {
    background: #ededed;
    width: 100%;
    min-width: 1220px;
    position: relative;

    .nav-main {
      background: #1a1a1a;
      background-image: linear-gradient(#000,#121212);
    }

    .nav-global {
      position: relative;
      height: 100px;
      z-index: 30;
      background: none;

      .container {
        position: relative;
        width: 1220px;
        margin: 0 auto;

        h1 {
          float: left;
          margin-left: -5px;
          padding: 25px 0 0;
          
          .nav-logo {
            display: block;
            width: 94px;
            height: 50px;
            text-indent: -9999px;
            transition: none;
            text-decoration: none;
            background: url(/static/images/global-logo.png) no-repeat 50%;
            background-size: cover;
          }
        }

        .nav-list {
          float: right;
          line-height: 28px;
          margin: 36px 181px 0 0;

          li {
            float: left;

            a {
              color: #c8c8c8;
              display: block;
              font-size: 14px;
              padding: 0 25px;
            }

            i {
              color: #c8c8c8;
              font-size: 16px;
              cursor: pointer;
            }
          }

          .active {
            color: #fff;
          }
        }
      }
    }

    .nav-sub {
      position: relative;
      z-index: 20;
      height: 90px;

      .container {
        position: relative;
        width: 1220px;
        height: 28px;
        margin: 0 auto;
        padding: 31px 0;

        .nav-list {
          float: left;
          height: 28px;
          line-height: 28px;

          li {
            position: relative;
            float: left;
            padding-left: 2px;

            a {
              display: block;
              padding: 0 20px;
              color: #666;

              &:hover {
                color: #5079d9;
                opacity: 1;
              }
            }
          }
        }

        &::after {
          content: " ";
          position: absolute;
          top: 89px;
          left: 50%;
          margin-left: -610px;
          width: 1220px;
          background: #e7e7e7;
          height: 1px;
          display: none;
          opacity: 0;
          transition: opacity .3s ease-in;
        }

        @media (min-width: 1px) {
          .container::after {
            display: block;
          }
        }
      }

      .nav-sub,
      .nav-sub-bg {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 430px;
        transform: translate3d(0,-430px,0);
        transition: all .3s ease-out;
      }

      .fixed {
        z-index: 21;
        top: -60px;
        transform: translate3d(0,60px,0);
        transition: background .6s cubic-bezier(.165,.84,.44,1) .6s, padding .3s cubic-bezier(.165,.84,.44,1), transform .3s cubic-bezier(.165,.84,.44,1);
      }

      .nav-sub-panel {
        height: 350px;
        position: relative;
        overflow: hidden;
        visibility: hidden;

        ul {
          visibility: hidden;
          width: 100%;
          height: 270px;
          padding-top: 52px;
          text-align: center;
          opacity: 0;

          li {
            position: relative;
            display: inline-block;
            width: 234px;
            height: 260px;
            vertical-align: top;
            font-size: 14px;
          }
        }

        .item-thumb {
          width: 160px;
          height: 160px;
          margin: 0 auto;
        }

        .item-name {
          padding-top: 16px;
          line-height: 12px;
          font-size: 12px;
          color: #616161;
        }

        .item-price {
          padding-top: 10px;
          line-height: 14px;
          font-size: 14px;
          color: #d44d44;
          font-weight: 700;
        }
      }

      &.active {
        z-index: 21;
        padding-bottom: 0;
        
        .nav-sub-bg {
          background: #f5f5f5;
          display: block;
          box-shadow: inset 0 1px 0 rgba(0,0,0,.1), 0 2px 8px rgba(0,0,0,.16);
          transform: translateZ(0);
        }

        .container::after {
          content: " ";
          display: block;
          opacity: 1;
          transition: opacity .3s ease-in-out;
        }

        .nav-sub-panel {
          visibility: visible;
        }

        .nav-sub-panel ul {
          visibility: visible;
          opacity: 1;
          transition: all .5s ease-out .1s;
        }
      }
    }
  }
</style>
