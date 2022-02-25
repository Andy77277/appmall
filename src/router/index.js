import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

import store from '@/store/store.js'

const router = new VueRouter({
  routes,
  store,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  // 用户登陆了，才会有token
  let token = store.state.user.token
  // 用户信息里面是否有内容
  let name = store.state.user.userInfo.name
  if (token) {
    // 用户已经登陆了,去login不行
    if (to.path == '/login' || to.path == '/register') {
      next('/home')
    } else {
      // 登陆了但是去的不是login
      if (name) {
        next()
      } else {
        try {
          // 没有用户信息，派发action，让仓库存储用户信息再跳转
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          //token失效重新登录
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  } else {
    //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
    //未登录去上面这些路由-----登录
    let toPath = to.path
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
      next('/login?redirect=' + toPath)
    } else {
      //去的不是上面这些路由（home|search|shopCart）---放行
      next()
    }
  }
})

export default router
