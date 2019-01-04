import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let api = Axios.create({
  baseURL: '//localhost:3000',
  timeout: 3000
})


export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    addImage(state, image){
      state.images.push(image)
    }
  },
  actions: {
    uploadImage({commit}, payload) {
      api.post('/images', payload)
        .then(res => {
          commit('addImage', res.data)
        })
    }
  }
})
