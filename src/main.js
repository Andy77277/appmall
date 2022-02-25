import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router/index.js'
//全局注册TypeNav
import TypeNav from '@/components/TypeNav/TypeNav'
Vue.component(TypeNav.name, TypeNav)
//引入vuex
import store from '@/store/store.js'
//引入mock
import '@/mock/mockServe.js'
//引入轮播图样式
import 'swiper/css/swiper.css'
//carousel注册全局组件
import Carousel from '@/components/Carousel/Carousel.vue'
Vue.component(Carousel.name, Carousel)
//全局注册pagination
import Pagination from '@/components/Pagination/Pagination.vue'
Vue.component(Pagination.name, Pagination)

//统一接口api文件夹里面全部请求函数
import * as API from '@/api/index.js'

// element-ui
import { Button, MessageBox } from 'element-ui'
Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

// 引入默认的图片
import atm from '@/assets/1.gif'
// 引入lazyload
import VueLazyload from 'vue-lazyload'
// 懒加载默认图片
Vue.use(VueLazyload, { loading: atm })

//引入自定义插件
import myPlugins from '@/plugins/myPlugins'
Vue.use(myPlugins, {
  name: 'upper'
})

//引入表单校验插件
import '@/plugins/validate'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
