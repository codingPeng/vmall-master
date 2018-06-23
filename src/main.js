import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import VueInfiniteScroll from 'vue-infinite-scroll'
import store from './vuex/'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  loading: '/static/images/load.gif'
})
Vue.use(VueCookie)
Vue.use(VueInfiniteScroll)

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register') {
    store.state.hasShow = false
  } else {
    store.state.hasShow = true
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
