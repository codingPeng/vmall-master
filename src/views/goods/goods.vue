/** 
 * 全部商品
 */
<template>
  <div class="goods">
    <div class="container">
      <div class="sort-option">
        <ul class="clearfix">
          <li>
            <a href="javascript:;">综合排序</a>
          </li>
          <li>
            <a href="javascript:;">销量排序</a>
          </li>
          <li>
            <a href="javascript:;">价格低到高</a>
          </li>
          <li>
            <a href="javascript:;">价格高到低</a>
          </li>
          <li>
            <el-input placeholder="价格" size="small" class="price-input"></el-input>
            <span class="line">-</span>
            <el-input placeholder="价格" size="small" class="price-input"></el-input>
            <el-button type="primary" size="small" class="price-btn">确定</el-button>
          </li>
        </ul>
      </div>
      <div v-loading="loading" element-loading-text="拼命加载中..." class="goods-box clearfix" >
        <ul class="item-wrap">
          <li class="item" v-for="(item, index) in goodsList" :key="index">
            <div class="item-img">
              <img v-lazy="item.imgUrl" alt="">
            </div>
            <h6 class="no-wrap">{{item.title}}</h6>
            <h3 class="no-wrap">{{item.desc}}</h3>
            <div class="operator clearfix">
              <span class="btn-detail" @click="_getDetail(item.id)">
                <a href="javascript:;">查看详情</a>
              </span>
              <span class="btn-cart">加入购物车</span>
            </div>
            <div class="item-price clearfix">
              <div class="price">
                <i>¥</i>
                <span>{{item.price}}</span>
              </div>
            </div>
            <div class="item-cover">
              <a href="javascript:;"></a>
            </div>
          </li>
        </ul>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[12, 20, 40, 60]"
          :page-size="pageSize"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  let img1 = 'https://resource.smartisan.com/resource/99c548bfc9848a8c95f4e4f7f2bc1095.png?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'
  import { getGoodsList } from 'api/api'

  export default {
    data () {
      return {
        currentPage: 1,
        pageSize: 20,
        loading: true,
        total: 0,
        goodsList: [],
        imgList: [img1, img1, img1, img1, img1, img1, img1, img1]
      }
    },

    computed: {},

    mounted () {
      this.loading = false
      this._getGoodsList(1, this.pageSize)
    },

    methods: {
      // 商品列表
      _getGoodsList(page, pageSize) {
        getGoodsList(page, pageSize).then(res => {
          let data = res.data.data
          this.total = data.count
          this.goodsList = data.goodsList
          this.loading = false
        }).catch(err => console.log(err))
      },

      // 每页条数
      handleSizeChange (val) {
        this.pageSize = val
        this.loading = true
        this._getGoodsList(1, this.pageSize)
      },

      // 第几页
      handleCurrentChange (val) {
        this.currentPage = val
        this.loading = true
        this._getGoodsList(this.currentPage, this.pageSize)
      },

      _getDetail(id) {
        this.$router.push({path: '/goodsDetails', query: {id}})
      }
    },

    components: {}
  }
</script>
<style lang='scss' scoped rel='stylesheet/scss'>

  .goods {
    min-height: 100%;
    background: #ededed;
    overflow: hidden;
    width: 100%;

    .container {
      position: relative;
      clear: both;
      width: 1220px;
      min-height: 600px;
      padding: 0 0 25px;
      margin: 0 auto;

      .sort-option {
        border-top: 1px solid #D8D8D8;
        color: #999;

        ul {
          height: 60px;
          line-height: 60px;

          li:first-child {
            padding-left: 9px;
          }

          li:last-child {
            display: flex;
            justify-content: center;
            align-items: center;

            .price-input {
              width: 80px;
            }

            .price-btn {
              margin-left: 10px; 
            }

            .line {
              margin: 0px 5px;
            }
          }

          li {
            position: relative;
            float: left;
            padding-left: 42px;

            &::before {
              content: ' ';
              display: block;
              position: absolute;
              left: 20px;
              top: 50%;
              width: 2px;
              height: 2px;
              margin-top: -1px;
              background: #C7C7C7;
            }

            a {
              display: block;
              font-size: 12px;
              color: #999;

              &:hover {
                color: #5683EA;
              }
            }
          }
        }
      }

      .goods-box {
        overflow: hidden;
        margin-bottom: 0;
        background: #fff;
        border-radius: 8px;
        border: 1px solid #dcdcdc;
        box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);

        .item-wrap {
          clear: both;
          overflow: hidden;
          margin: 0 -1px -1px -1px;

          .item {
            position: relative;
            float: left;
            border-right: 1px solid #efefef;
            border-bottom: 1px solid #efefef;
            width: 25%;
            height: 389px;
            background: #fff;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;

            &:hover {
              box-shadow: 0 0 38px rgba(0,0,0,.08) inset;
              transition: all .15s ease;

              .operator {
                opacity: 1;
                transition: all .2s ease-in;
              }

              .item-price {
                opacity: 0;
                display: none;
                transition: all .1s ease-out;
              }
            }

            .item-img img {
              display: block;
              width: 206px;
              height: 206px;
              margin: 50px auto 10px;
              opacity: 1;
            }

            h6 {
              line-height: 1.2;
              font-size: 16px;
              color: #424242;
              margin: 0 auto;
              padding: 0 14px;
            }

            h3 {
              line-height: 1.2;
              font-size: 12px;
              color: #d0d0d0;
              margin: 8px auto 14px;
            }

            .operator {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 29px;
              text-align: center;
              opacity: 0;
              z-index: 10;

              span {
                display: inline-block;
                box-sizing: border-box;
                width: 100px;
                height: 30px;
                font-size: 12px;
                line-height: 28px;
                border-radius: 4px;
                cursor: pointer;
                font-weight: 200;
                transition: all .1s ease;
              }

              .btn-detail {
                border: 1px solid #d5d5d5;
                color: #646464;

                a {
                  display: block;
                  color: #a1a1a1;
                }

                &:active {
                  opacity: .7;
                }

                &:hover {
                  background-image: linear-gradient(#f6f6f6,#ededed);
                }
              }

              .btn-cart {
                background-color: #5c85e5;
                background-image: linear-gradient(#779ae9,#5078df);
                border: 1px solid #5c81e3;
                color: #fff;
                margin-left: 10px;

                &:active, &:hover {
                  border: 1px solid #3e61d7;
                  background-color: #5c85e5;
                  background-image: linear-gradient(#4d72de,#6189e6);
                }
              }
            }

            .item-price {
              display: block;
              font-family: Arial;
              font-weight: 700;
              color: #d44d44;
              margin-top: 24px;
              text-align: center;
              opacity: 1;

              .price {
                display: inline-block;
                font-size: 0;
                margin-right: 6px;

                i {
                  font-size: 16px;
                  font-style: normal;
                }

                span {
                  font-size: 18px;
                  padding-left: 4px;
                }
              }
            }

            .item-cover {
              a {
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 20;
                width: 100%;
                height: 310px;
              }
            }
          }
        }

        .el-pagination {
          float: right;
          margin: 30px 20px 20px;
        }
      }
    }
  }
</style>