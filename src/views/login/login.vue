/** 
 * 登录
 */
<template>
  <div class="login">
    <!-- 顶部 -->
    <header>
      <div class="header">
        <div class="header-img">
          <img src="static/images/global-logo.png" alt="">
        </div>
        <div class="name">
          <b>|</b>
          <span>vmall商城</span>
        </div>
      </div>
    </header>
    <!-- 登录 -->
    <main class="login-box">
      <div class="container">
        <div class="login-wrap">
          <div class="title">
            <span>账号登录</span>
          </div>
          <div class="account-wrap">
            <ul class="login-form">
              <li class="account">
                <input type="text" placeholder="手机号/邮箱地址">
              </li>
              <li class="account">
                <input type="text" placeholder="密码">
              </li>
              <li class="account-checkbox">
                <el-checkbox v-model="checked">记住账号</el-checkbox>
              </li>
              <li class="account-login">
                <a href="javascript:;">登录</a>
              </li>
              <li class="login-forget">
                <span class="register">
                  <a href="javascript:;" title="注册账号">注册账号</a>
                </span>
                <span class="forget-password">
                  <a href="javascript:;" title="忘记密码">忘记密码?</a>
                </span>
              </li>
            </ul>

            <div class="other-login">
              <div class="other-title">
                <i class="line-left"></i>
                <span class="other-tips">其他方式登录</span>
                <i class="line-right"></i>
              </div>
              <div class="other-container">
                <span title="QQ" class="login-qq">
                  <a href="javascript:;"></a>
                </span>
                <span title="支付宝" class="login-alipay">
                  <a href="javascript:;"></a>
                </span>
                <span title="微信" class="login-weixin">
                  <a href="javascript:;"></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
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

  .login {

    .header {
      width: auto;
      max-width: 998px;
      height: 67px;
      margin: 0px auto;
      border: 0px;
      position: relative;

      .header-img {
        left: 2px;
        float: left;
        margin-right: 20px;
        padding-left: 0px;
        margin-top: 10px;
        width: 91px;
        line-height: 1;
      }

      .name {
        color: #999;
        font-size: 20px;
        line-height: 50px;
        font-family: "arial";
        padding-top: 14px;

        b, span {
          font-size: 18px;
          margin-top: -2px;
          float: left;
          color: #cccccc;
        }

        span {
          font-size: 18px;
          margin-top: -1px;
          float: left;
          margin-left:18px;
          color:#333333;
        }
      }
    }

    .login-box {
      background-color: #081638;
    }

    .container {
      width: 1130px;
      position: relative;
      margin: 0 auto;
      zoom: 1;
      background-image: url(/static/images/login_bg.png);
      background-size: cover;
      background-repeat: no-repeat;

      &::after {
        content: "\0020";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
        overflow: hidden;
      }

      .login-wrap {
        position: relative;
        width: 380px;
        float: right;
        background-color: #FFFFFF;
        margin-top: 30px;
        margin-bottom: 30px;
        height: 530px;

        .title {
          width: 100%;
          margin: 24px auto;
          text-align: center;

          span {
            font-size: 20px;
            color: #B40707;
            font-weight: 500;
            cursor: pointer;
            width: 169px;
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            padding: 0 10px;
          }
        }

        .account-wrap {
          display: block;
          width: 328px;
          margin: 0 auto;

          .login-form {
            width: 328px;

            .account {
              height: 47px;
              word-wrap: break-word;
              word-break: normal;
              border-bottom: 1px solid #cccccc;

              input {
                width: 100%;
                border: none;
                color: #333333;
                font-size: 14px;
                height: 46px;
                line-height: 46px;
                border-radius: 0px;
                z-index: 1;
                vertical-align: middle;

                &::placeholder {
                  color: rgb(204, 204, 204);
                }
              }
            }

            .account-checkbox {
              padding: 16px 0;
              position: relative;
            }

            .account-login {
              width: 100%;
              line-height: 44px;
              height: 44px;
              font-weight: bold;
              font-size: 14px;
              background-image: none;
              cursor: pointer;
              border-radius: 26px;
              text-align: center;
              margin-top: 0px;
              background-color: #B40707;
              border-color: #B40707;
              border-width: 0 0 2px 0;
              border-style: solid;

              &:hover {
                background-color: #C70000;
                text-decoration: none;
                color: #fff;
                border-color: #C70000;
              }

              a {
                color: #fff;
              }
            }

            .login-forget {
              padding: 16px 0;
              text-align: center;
              line-height: 1.3;

              .register {
                padding-right: 10px;
                border-right: 1px solid #cccccc;
                text-align: right;
                color: #999;

                a {
                  color: #007dff;
                }
              }

              .forget-password {
                padding-left: 10px;
                text-align: left;
                color: #999;

                a {
                  color: #007dff;
                }
              }
            }
          }

          .other-login {
            text-align: center;
            position: absolute;
            bottom: 0px;
            color: #999;
            line-height: 16px;

            .other-title {
              position: relative;
              width: 328px;
              margin-bottom: 10px;
              text-align: center;
              color: #999;

              .line-left {
                width: 94px;
                background-image: url(/static/images/line-left.png);
                background-repeat: no-repeat;
                height: 1px;
                position: absolute;
                background-size: cover;
                top: 50%;
                left: 0;
              }

              .other-tips {
                color: #cccccc;
                vertical-align: middle;
                text-align: center;
                max-width: 190px;
                display: inline-block;
                position: relative;
                z-index: 1;
                background: #ffffff;
                padding: 0 10px;
                line-height: 1.5;
              }

              .line-right {
                width: 94px;
                background-image: url(/static/images/line-right.png);
                background-repeat: no-repeat;
                height: 1px;
                position: absolute;
                bottom: 50%;
                right: 0;
                background-size: cover;
              }
            }

            .other-container {
              width: 328px;
              text-align: center;
              margin-bottom: 10px;

              span {
                padding: 0px 10px;
                text-align: center;
                display: inline-block;
              }

              .login-qq {
                a {
                  background-image: url(/static/images/third_login.png);
                  background-repeat: no-repeat;
                  width: 42px;
                  height: 42px;
                  padding: 0px;
                  display: inline-block;
                  margin: 0;
                  float: none;
                  background-position: -72px -9px;
                  transition: none;

                  &:hover {
                    background-position: -72px -55px;
                  }
                }
              }

              .login-alipay {
                a {
                  background-image: url(/static/images/third_login.png);
                  background-repeat: no-repeat;
                  width: 42px;
                  height: 42px;
                  padding: 0px;
                  display: inline-block;
                  margin: 0;
                  float: none;
                  background-position: -132px -9px;
                  transition: none;

                  &:hover {
                    background-position: -132px -55px;
                  }
                }
              }

              .login-weixin {
                a {
                  background-image: url(/static/images/third_login.png);
                  background-repeat: no-repeat;
                  background: url(/static/images/third_login.png) no-repeat;
                  width: 42px;
                  height: 42px;
                  padding: 0px;
                  display: inline-block;
                  margin: 0;
                  float: none;
                  background-position: -12px -9px;
                  transition: none;

                  &:hover {
                    outline: 0;
                    background-position: -12px -55px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>