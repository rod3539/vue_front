import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

import createPersistedState from 'vuex-persistedstate'
import accounts from './modules/accounts'
import community from './modules/community'
import drf from '@/api/drf'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataFromApi:[],
    itemClicked: 0,
    movies:[],
    randomMovies:[],
  },
  getters: {
    movies(state) {
      return state.movies
    },
    randomMovies(state) {
      return state.randomMovies
    }
  },
  mutations:{
    GET_MOVIES(state, movies) {
      state.movies = movies
    },    
    SET_RANDOM_MOVIES(state, randomMovies){
      state.randomMovies = randomMovies
    },
    REMOVE_LOSER_MOVIE(state, loserIndex){
      state.randomMovies.splice(loserIndex, 1)
    }
  },
  actions: {
    getMovies({ commit, dispatch, getters }) {
      axios({
        method: 'GET',
        url: drf.movies.movies(),
        headers: getters.authHeader
      })
      .then(response => {
        commit('GET_MOVIES', response.data)
        dispatch('startGame')
      })
      .catch(err => console.log(err))
    },
    startGame({ commit, state }){
      const pickedMovies = _.sampleSize(state.movies, 32)
      commit('SET_RANDOM_MOVIES', pickedMovies)
    },
    removeLoserMovie({ commit }, loserIndex){
      commit('REMOVE_LOSER_MOVIE', loserIndex)
    },
  },
  modules: { accounts, community },
  plugins: [
    createPersistedState()
  ]
})
