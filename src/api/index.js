import requests from './ajax.js'
import mockRequests from './mockAjax.js'

//三级联动  /api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

//首页轮播图接口
export const reqGetBannerList = () => mockRequests.get('/banner')

//floor轮播图接口
export const reqGetFloorList = () => mockRequests.get('/floor')

//获取搜索模块的数据
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

//详情页   /api/item/{ skuId }    get    有参数（skuId）
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

//添加到购物车成功页  /api/cart/addToCart/{ skuId }/{ skuNum }  post  有参数（skuId, skuNum）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//购物车数据  /api/cart/cartList   get  无参数
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

//删除购物车中商品 /api/cart/deleteCart/{skuId} delete 有参数（skuId）
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

//切换商品选中状态 /api/cart/checkCart/{skuID}/{isChecked}  get  有参数（skuId,isChecked）
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

//获取验证码  /api/user/passport/sendCode/phone  get  有参数（phone）
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

//注册  /api/user/passport/register  post 有参数（phone,password,code,nickName）
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

//登陆  /api/user/passport/login  post 有参数(phone,password)
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

//获取用户信息  /api/user/passport/auth/getUserInfo  get
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

//退出登录  /api/user/passport/logout  get
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

//trade页面（获取用户地址信息） api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

//获取商品清单  api/order/auth/trade
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

//提交订单的接口  /api/order/auth/submitOrder?tradeNo={tradeNo}  post 有参数（7个）
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

//获取支付信息  /api/payment/weixin/createNative/{orderId}  get 有参数（orderId）
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

//获取支付订单状态 /api/payment/weixin/queryPayStatus/{orderId} get 有参数（orderId）
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

//获取个人中心的数据  api/order/auth/{page}/{limit}  get 有参数（page,limit）
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })
