import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api/index.js'
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  //获取三级联动数据
  async getCategoryList({ commit }) {
    const result = await reqCategoryList()
    if (result.code == 200) {
      commit('GETCATEGORYLIST', result.data)
    }
  },
  //获取mock的listcontainer的banner数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList()
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  //获取mock的floor的轮播图数据
  async getFloorList({ commit }) {
    let result = await reqGetFloorList()
    if (result.code == 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
