/** 
 * 账户资料
 */
<template>
  <div class="user-info">
    <header>
      <h2>账户资料</h2>
    </header>
    <section class="container">
      <div class="account-avatar clearfix">
        <div class="avatar-wrap">
          <img src="https://account.smartisan.com/files/00/40/c1/dd/avatar.png" alt="">
        </div>
        <div class="account-title">
          <h3>修改头像</h3>
        </div>
        <div class="btn-avatar">
          <a href="javascript:;">上传图片</a>
        </div>
      </div>
    </section>

    <!-- modal -->
    <div class="modal">

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

  .user-info {
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

      .account-avatar {
        height: 124px;
        padding: 0 0 0 120px;
        position: relative;
        margin: 0 30px 30px;
        border-bottom: 1px solid #dadada;
        line-height: 30px;

        .avatar-wrap {
          position: absolute;
          left: 20px;
          top: 50%;
          margin-top: -40px;

          img {
            width: 80px;
            height: 80px;
            border-radius: 2px;
          }
        }

        .account-title {
          padding: 29px 0 4px;

          h3 {
            font-size: 18px;
            font-weight: 400;
            color: #333;
          }
        }

        .btn-avatar {
          display: inline-block;
          text-align: center;
          overflow: hidden;
          outline: none;
          line-height: 25px;
          font-size: 12px;
          border-radius: 4px;
          cursor: pointer;
          background: linear-gradient(#7ea3f5,#5a82f0);
          box-shadow: inset 0 1px 2px hsla(0,0%,100%,.1), inset 0 0 0 1px rgba(0,0,0,.2), 0 1px 3px rgba(0,0,0,.1);
          text-shadow: 0 -0.05rem 0 rgba(0,0,0,.15);
          box-sizing: border-box;

          a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0 13px;
            line-height: 25px;
            font-size: 12px;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
            box-sizing: border-box;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
