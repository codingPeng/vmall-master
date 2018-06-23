import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('views/home/index.vue')), 'home')
const Goods = r => require.ensure([], () => r(require('views/goods/goods.vue')), 'goods')
const GoodsDetails = r => require.ensure([], () => r(require('views/goods/goods-details.vue')), 'goodsDetails')
const Checkout = r => require.ensure([], () => r(require('views/order/checkout.vue')), 'checkout')
const Cart = r => require.ensure([], () => r(require('views/order/cart.vue')), 'cart')
const Login = r => require.ensure([], () => r(require('views/login/login.vue')), 'login')
const Register = r => require.ensure([], () => r(require('views/login/register.vue')), 'register')
const User = r => require.ensure([], () => r(require('views/user/index.vue')), 'user')
const Payment = r => require.ensure([], () => r(require('views/order/payment.vue')), 'payment')
const PaySuccess = r => require.ensure([], () => r(require('views/order/pay-success.vue')), 'paySuccess')
const OrderList = r => require.ensure([], () => r(require('views/user/order-list.vue')), 'orderList')
const UserInfo = r => require.ensure([], () => r(require('views/user/user-info.vue')), 'userInfo')
const Discount = r => require.ensure([], () => r(require('views/user/discount.vue')), 'discount')
const Address = r => require.ensure([], () => r(require('views/user/address.vue')), 'address')
const Support = r => require.ensure([], () => r(require('views/user/support.vue')), 'support')
const TradeIn = r => require.ensure([], () => r(require('views/user/trade-in.vue')), 'tradeIn')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goodsDetails',
      name: 'goodsDetails',
      component: GoodsDetails
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: PaySuccess
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      redirect: '/user/orderList',
      children: [
        {
          path: 'orderList',
          name: 'orderList',
          component: OrderList
        },
        {
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo
        },
        {
          path: 'discount',
          name: 'discount',
          component: Discount
        },
        {
          path: 'address',
          name: 'address',
          component: Address
        },
        {
          path: 'support',
          name: 'support',
          component: Support
        },
        {
          path: 'tradeIn',
          name: 'tradeIn',
          component: TradeIn
        }
      ]
    }
  ]
})
