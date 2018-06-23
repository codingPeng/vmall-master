/** 
 * 地址列表
 */
<template>
  <div class="address">
    <header>
      <h2>收货信息</h2>
      <div class="add-address">
        <a href="javascript:;">添加新地址</a>
      </div>
    </header>
    <section class="container clearfix">
      <div class="address-title">
        <span class="name">姓名</span>
        <span class="detail">详细地址</span>
        <span class="phone">电话</span>
        <span class="address-default"></span>
        <span class="address-operator"></span>
      </div>
      <ul>
        <li>
          <div class="item-name">我是姓名</div>
          <div class="item-address">山西省 长治市 长治县 11 </div>
          <div class="item-phone">18562365462</div>
          <div class="item-default">
            <a href="javascript:;" v-show="!isDefault">设为默认</a>
            <span v-show="isDefault">（默认地址）</span>
          </div>
          <div class="item-operator">
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
          </div>
        </li>
      </ul>
    </section>

    <!-- modal -->
    <div class="modal" v-show="showModal">
      <div class="mask">
        <div class="modal-container">
          <div class="modal-header clearfix">
            <div class="modal-title">
              <h4>新增收货地址</h4>
            </div>
            <span class="modal-close">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M941.576 184.248l-101.824-101.824L512 410.176 184.248 82.424 82.424 184.248 410.168 512l-327.744 327.752 101.824 101.824L512 613.824l327.752 327.752 101.824-101.824L613.832 512z" fill="#cdcdcd"></path></svg>
            </span>
          </div>

          <div class="modal-content">
            <article class="modal-main">
              <div class="modal-form clearfix">
                <input type="text" placeholder="收货人姓名">
              </div>
              <div class="modal-form clearfix">
                <input type="text" placeholder="手机号码">
              </div>
              <div class="modal-form clearfix">
                <input type="text" placeholder="收货地址">
              </div>
              <div class="modal-form modal-default clearfix">
                <el-checkbox v-model="checked">设为默认</el-checkbox>
              </div>
              <div class="btn-save">
                <a href="javascript:;">保存</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDefault: false,
      showModal: false,
      checked: false
    }
  },

  computed: {},

  mounted () {},

  methods: {},

  components: {}
}
</script>
<style lang='scss' scoped rel='stylesheet/scss'>

  .address {
    overflow: hidden;
    background: #fff;
    border: 1px solid rgba(0,0,0,.14);
    border-radius: 10px;

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

      .add-address {
        position: absolute;
        top: 12px;
        right: 28px;
        height: 38px;
        border-radius: 8px;
        line-height: 38px;
        font-size: 14px;
        background: #a2a2a2;
        color: #fff;
        cursor: pointer;

        &:hover {
          background: #5079d9;
        }

        a {
          width: 100%;
          height: 100%;
          padding: 0 13px 0;
          color: #fff;
          line-height: 38px;
        }
      }
    }

    .container {
      position: relative;
      min-height: 540px;

      .address-title {
        display: flex;
        height: 38px;
        padding: 0 24px;
        background: #eee;
        border-bottom: 1px solid #dbdbdb;
        line-height: 38px;
        font-size: 12px;
        color: #666;

        span {
          display: inline-block;
          float: left;
          height: 38px;
        }

        .name {
          width: 126px;
          text-align: left;
        }

        .detail {
          flex: 1;
        }

        .phone {
          width: 160px;
        }

        .address-operator {
          width: 135px;
        }

        .address-default {
          width: 80px;
        }
      }

      li {
        display: flex;
        align-items: center;
        padding: 20px 24px;
        border-bottom: 1px solid #cfcfcf;

        .item-name {
          width: 126px;
          text-align: left;
        }

        .item-address {
          flex: 1;
        }

        .item-phone {
          width: 160px;
        }

        .item-default {
          width: 80px;
          line-height: 75px;
          text-align: center;
          font-size: 12px;
          cursor: pointer;
        }

        .item-operator {
          width: 135px;
          text-align: center;
        }
      }
    }

    .modal {
      position: fixed;
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 251;
      opacity: 1;
      background-color: rgba(0,0,0,.65);

      .mask {
        position: fixed;
        opacity: 1;
        z-index: 251;
        width: auto;
        top: 50%;
        left: 50%;
        display: block;
        text-align: center;
        transform: translate(-50%,-50%);
      }

      .modal-container {
        background: #fff;
        overflow-y: hidden;
        overflow-x: hidden;
        min-width: 200px;
        border-radius: 12px;
        border: 1px solid #dcdcdc;
        border-color: rgba(0,0,0,.14);
        box-shadow: 0 2px 30px #000;
        text-align: left;

        .modal-header {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 71px;
          padding: 0 15px;
          border-radius: 12px 12px 0 0;
          border-bottom: 1px solid #e6e6e6;
          box-shadow: 0 1px 7px rgba(0,0,0,.06);
          background: linear-gradient(#fbfbfb,#ececec);
          line-height: 71px;
          text-align: center;

          .modal-title {
            h4 {
              padding-left: 15px;
              font-size: 28px;
              font-weight: 400;
              color: #646464;

              &::after {
                visibility: hidden;
                display: block;
                font-size: 0;
                content: " ";
                clear: both;
                height: 0;
              }
            }
          }
  
          .modal-close {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 60px;

            &:hover {
              svg {
                transition: all 1s;
                transform: rotate(360deg);
                transform-origin: 50% 50%;
              }   
              path {
                fill: #8a8a8a;
              }
            }
          }
        }
  
        .modal-content {
          padding: 30px;
          box-sizing: border-box;
          font-size: 18px;
          line-height: 30px;
          color: #8d8d8d;
          overflow: auto;
          min-width: 220px;
        }

        .modal-main {
          width: 390px;

          .modal-form {
            position: relative;
            padding-bottom: 15px;
            margin: 0 auto;

            input {
              width: 100%;
              box-sizing: border-box;
              padding: 5px 15px;
              background-color: transparent;
              border: none;
              z-index: 10;
              position: relative;
              height: 46px;
              background: #fff;
              border: 1px solid #ccc;
              border-radius: 6px;
              box-shadow: inset 0 3px 5px -4px rgba(0,0,0,.4), inset -1px 0 3px -2px rgba(0,0,0,.1);
              line-height: 46px;
              font-size: 18px;
            }
          }

          .modal-default {
            font-size: 14px;
            line-height: 14px;
            cursor: pointer;
          }

          .btn-save {
            display: block;
            width: 100%;
            height: 48px;
            border-radius: 6px;
            text-align: center;
            overflow: hidden;
            outline: none;
            cursor: pointer;
            background: linear-gradient(#7ea3f5,#5a82f0);
            box-shadow: inset 0 1px 2px hsla(0,0%,100%,.1), inset 0 0 0 1px rgba(0,0,0,.2), 0 1px 3px rgba(0,0,0,.1);
            text-shadow: 0 -0.05rem 0 rgba(0,0,0,.15);
            box-sizing: border-box;

            a {
              display: block;
              width: 100%;
              height: 48px;
              line-height: 46px;
              padding: 0 13px;
              color: #fff;
              box-sizing: border-box;
              text-decoration: none;
              font-size: 18px;
              border-radius: 4px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>