/** 
 * 用户相关
 */
<template>
  <div class="user">
    <div class="left-menu">
      <img v-lazy="avatarUrl" alt="">
      <ul>
        <li v-for="(item, index) in titleList" :class="{active: index === 0}">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
let avatar = 'https://account.smartisan.com/files/00/40/c1/dd/avatar.png'
let title = ['我的订单', '售后服务', '我的优惠', '账户资料', '收货地址', '以旧换新']

export default {
  data () {
    return {
      avatarUrl: avatar,
      titleList: title
    }
  },

  computed: {},

  mounted() {},

  methods: {},

  components: {}
}
</script>

<style lang='scss' scoped rel='stylesheet/scss'>
  .user {
    position: relative;
    width: 1220px;
    min-height: 600px;
    margin: 0 auto 40px;
    box-sizing: border-box;
    clear: both;
  }

  .left-menu {
    position: absolute;
    left: 0;
    top: 0;
    width: 210px;
    padding-top: 20px;
    margin: 0;
    border-radius: 10px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    background: #fff;
    overflow: hidden;

    img {
      width: 168px;
      height: 168px;
    }

    li {
      position: relative;
      height: 48px;
      border-top: 1px solid #ebebeb;
      line-height: 48px;

      &.active {
        border: none;

        a {
          position: relative;
          top: -1px;
          z-index: 1;
          height: 50px;
          background-color: #98afee;
          line-height: 50px;
          color: #fff;
        }
      }

      a {
        display: block;
        height: 48px;
        padding: 0 30px;
        color: #666;
        transition: none;
      }
    }
  }

  .content {
    position: relative;
    min-height: 600px;
    margin-left: 230px;
  }
</style>
