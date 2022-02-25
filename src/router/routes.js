export default [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/Home/Home.vue'), meta: { show: true } },
  { path: '/search/:keyword?', component: () => import('@/views/Search/Search.vue'), meta: { show: true }, name: 'search' },
  { path: '/login', component: () => import('@/views/Login/Login.vue'), meta: { show: false } },
  { path: '/register', component: () => import('@/views/Register/Register.vue'), meta: { show: false } },
  { path: '/detail/:skuid', component: () => import('@/views/Detail/Detail.vue'), meta: { show: true } },
  {
    path: '/addcartsuccess',
    component: () => import('@/views/AddCartSuccess/AddCartSuccess.vue'),
    meta: { show: false },
    name: 'addcartsuccess'
    // beforeEnter(to, from, next) {
    //   // 得到当前路由信息对象
    //   // const route = router.currentRoute  // route就是from

    //   // 得到要跳转到目路由的query参数
    //   const skuNum = to.query.skuNum
    //   // 读取保存的数据
    //   const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
    //   // 只有都存在, 才放行
    //   if (skuNum && skuInfo) {
    //     next()
    //   } else {
    //     // 在组件对象创建前强制跳转到首页
    //     next('/')
    //   }
    // }
  },
  { path: '/shopcart', component: () => import('@/views/ShopCart/ShopCart.vue'), meta: { show: false } },
  {
    path: '/trade',
    component: () => import('@/views/Trade/Trade.vue'),
    meta: { show: false },
    /* 只能从购物车界面, 才能跳转到交易界面 */
    beforeEnter(to, from, next) {
      if (from.path === '/shopcart') {
        next()
      } else {
        next('/shopcart')
      }
    }
  },
  {
    path: '/pay',
    component: () => import('@/views/Pay/Pay.vue'),
    meta: { show: false },
    /* 只能从交易界面, 才能跳转到支付界面 */
    beforeEnter(to, from, next) {
      if (from.path === '/trade') {
        next()
      } else {
        next('/trade')
      }
    }
  },
  {
    path: '/paysuccess',
    component: () => import('@/views/PaySuccess/PaySuccess.vue'),
    meta: { show: false },
    /* 只有从支付界面, 才能跳转到支付成功的界面 */
    beforeEnter(to, from, next) {
      if (from.path === '/pay') {
        next()
      } else {
        next('/pay')
      }
    }
  },
  {
    path: '/center',
    component: () => import('@/views/Center/Center.vue'),
    meta: { show: false },
    children: [
      { path: '/center', redirect: '/center/myorder' },
      { path: 'myorder', component: () => import('@/views/Center/myOrder/myOrder.vue') },
      { path: 'grouporder', component: () => import('@/views/Center/groupOrder/groupOrder.vue') }
    ]
  }
]
