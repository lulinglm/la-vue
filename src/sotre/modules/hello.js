import {request} from '@/utils/request'

const state = {
  hello: ''
}

const actions = {
  async getHello ({ commit }, { payload }) {
    await request({
      url: '/hello',
      method: 'GET',
      data: null
    })
    commit('setHello', { payload })
  }
}

const mutations = {
  setHello (state, { payload }) {
    state.hello = 'hello'
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
