import drf from '@/api/drf'
import router from '@/router'
import axios from 'axios'

export default {
  state: {
    token: localStorage.getItem('token') || '' ,
    currentUser: {},
    profile: {},
    authError: null,
  },
  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: `Token ${state.token}`})
  },
  mutations: {
    LOGIN(state) {
      state.isLogin = true
    },
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error
  },
  actions: {
    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token')
    },

    login({ commit, dispatch }, userData) {
      // axios.post('http://127.0.0.1:8000/api/v1/accounts/login/', userData)
      axios.post('3.34.252.133/api/v1/accounts/login/', userData)
        .then(response => {
          commit('SET_TOKEN', response.data.key)
          localStorage.setItem('token', response.data.key)
          commit('LOGIN')
          dispatch('fetchCurrentUser')
          router.push({ name: 'HomeView' })
        })
        .catch(error => {
          console.error(error)
        })
    },
    signup({ commit, dispatch }, userData) {
      // axios.post('http://127.0.0.1:8000/api/v1/accounts/signup/', userData)
      axios.post('3.34.252.133/api/v1/accounts/signup/', userData)
      .then(response => {
        commit('SET_TOKEN', response.data.key)
        localStorage.setItem('token', response.data.key)
        dispatch('fetchCurrentUser')
        router.push({ name: 'HomeView' })
      })
      .catch(error => {
        console.error(error)
      })
    },
  //   signup({ commit, dispatch }, credentials) {
  //   axios({
  //     url: drf.accounts.signup(),
  //     method: 'post',
  //     data: credentials
  //   })
  //     .then(res => {
  //       const token = res.data.key
  //       dispatch('saveToken', token)
  //       dispatch('fetchCurrentUser')
  //       router.push({ name: 'HomeView' })
  //     })
  //     .catch(err => {
  //       console.error(err.response.data)
  //       commit('SET_AUTH_ERROR', err.response.data)
  //     })
  // },

  logout({commit, dispatch}) {
    // axios.post('http://127.0.0.1:8000/api/v1/accounts/logout/')
    axios.post('3.34.252.133/api/v1/accounts/logout/')
    .then(() => {
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
      dispatch('fetchCurrentUser')
      router.push({ name: 'StartNow' })
    })
  },


  fetchCurrentUser({ commit, getters, dispatch }) {
    if (getters.isLoggedIn) {
      axios({
        url: drf.accounts.currentUserInfo(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_CURRENT_USER', res.data))
        .catch(err => {
          if (err.response.status === 401) {
            dispatch('removeToken')
            router.push({ name: 'LoginView' })
          }
        })
      }
    },

    fetchProfile({ commit, getters }, { username }) {
      axios({
        url: drf.accounts.profile(username),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(response => {
        commit('SET_PROFILE', response.data)
      })
    }
  }
}