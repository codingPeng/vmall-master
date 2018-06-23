/** 
  * footer
 */
<template>
  <div class="footer">
    <div class="container">
      <div class="menu">
        <ul class="nav-footer">
          <li>
            <h3>订单服务</h3>
            <ul>
              <li><a href="javascript:;">购买指南</a></li>
              <li><a href="javascript:;">支付方式</a></li>
              <li><a href="javascript:;">送货政策</a></li>
            </ul>
          </li>
          <li>
            <h3>服务支持</h3>
            <ul>
              <li><a href="javascript:;">售后服务</a></li>
              <li><a href="javascript:;">维修门店</a></li>
              <li><a href="javascript:;">零售门店</a></li>
            </ul>
          </li>
          <li>
            <h3>自动服务</h3>
            <ul>
              <li><a href="javascript:;">热点咨询</a></li>
              <li><a href="javascript:;">预约购买</a></li>
              <li><a href="javascript:;">订单物流</a></li>
            </ul>
          </li>
          <li>
            <h3>媒体中心</h3>
            <ul>
              <li><a href="javascript:;">新闻动态</a></li>
              <li><a href="javascript:;">官方视频</a></li>
              <li><a href="javascript:;">图片资源</a></li>
            </ul>
          </li>
          <li>
            <h3>关于公司</h3>
            <ul>
              <li><a href="javascript:;">公司简介</a></li>
              <li><a href="javascript:;">加入我们</a></li>
              <li><a href="javascript:;">联系我们</a></li>
            </ul>
          </li>
          <li>
            <h3>关注我们</h3>
            <ul>
              <li><a href="javascript:;">新浪微博</a></li>
              <li><a href="javascript:;">官方微信</a></li>
              <li><a href="javascript:;">官方贴吧</a></li>
            </ul>
          </li>
        </ul>
        <ul class="service">
          <li class="tel">400-626-5666</li>
          <li class="time">周一至周日 9:00-18:00（仅收市话费）</li>
          <li class="online">
            <a href="javascript:;">在线帮助</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <h4>Copyright © <span>, xxx., Ltd. All Rights Reserved.</span></h4>
        <h5 class="company">xx数码科技有限公司</h5>
        <ul class="privacy">
          <li>
            <a href="javascript:;">法律声明</a>
          </li>
          <li>
            <a href="javascript:;">法律声明</a>
          </li>
          <li>
            <a href="javascript:;">开发者中心</a>
          </li>
        </ul>
        <h6>
          <a href="http://www.miibeian.gov.cn/">
            <span>ICP备5566687123号-1</span>
            <span>ICP证123131号</span>
          </a>
        </h6>
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

  .footer {
    background: #fafafa;
    border-top: 1px solid #e6e6e6;
    display: block;

    .container {
      width: 1220px;
      margin: 0 auto;

      &::after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }
    }

    .menu {
      height: 100px;
      margin: 100px 0 32px;
      border-bottom: 1px solid #e6e6e6;
      position: relative;

      .nav-footer {
        li {
          width: 149px;
          line-height: 1;
          float: left;

          h3 {
            color: #646464;
            font-size: 12px;
            padding: 0 0 14px;
          }

          li {
            color: #c3c3c3;
            font-size: 12px;
            padding: 6px 0;

            a {
              color: #969696;

              &:hover {
                color: #5079d9;
              }
            }
          }
        }
      }

      .service {
        position: absolute;
        right: 0;
        overflow: hidden;
        line-height: 34px;

        li {
          clear: both;
          width: 241px;
          font-size: 12px;
          line-height: 18px;
          color: #c3c3c3;
          text-align: right;
        }

        .tel {
          font-size: 30px;
          line-height: 1;
          cursor: default;
          color: #646464;
          top: -2px;
          position: relative;
        }

        .online {
          a {
            float: right;
            width: 102px;
            height: 32px;
            line-height: 32px;
            background: linear-gradient(#fcfcfc,#f5f5f5);
            cursor: pointer;
            font-size: 14px;
            padding: 0 0 0 26px;
            margin-top: 8px;
            text-align: left;
            color: #5079d9;
            border: 1px solid #dcdcdc;
            border-radius: 5px;

            &:hover {
              background: #f5f5f5;
            }
          }
        }
      }
    }

    .copyright {
      color: #434d55;
      font-size: 12px;
      padding: 40px 0;

      h4, h5 {
        float: left;
        height: 15px;
        line-height: 15px;
        color: #757575;
      }

      h5 {
        margin-left: 3px;
      }

      .privacy {
        float: left;
        margin: 0 0 0 12px;

        li {
          float: left;
          line-height: 12px;
          padding: 1px 10px 0;
          border-left: 1px solid #ccc;
        }
      }

      h6 {
        clear: both;
        padding: 10px 0 0;
        height: 15px;

        a {
          color: #bdbdbd;
          font-size: 12px;
          height: 12px;
          line-height: 1;

          span {
            margin-right: 20px;
          }
        }
      }
    }
  }
</style>