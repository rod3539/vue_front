import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

import _ from 'lodash'

export default {
  state: {
    reviews: [],
    review: {},
  },

  getters: {
    reviews: state => state.reviews,
    review: state=> state.review,
    isAuthor: (state, getters) => {
      return state.review.user?.username === getters.currentUser.username
    },
    isReview: state => !_.isEmpty(state.review),
  },

  mutations: {
    SET_REVIEWS: (state, reviews) => state.reviews = reviews,
    SET_REVIEW: (state, review) => state.review = review,
    SET_REVIEW_COMMENTS: (state, comments) => (state.review.comments = comments),
  },

  actions: {
    fetchReviews({ commit, getters }) {
      axios({
        url: drf.communities.communities(),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_REVIEWS', res.data))
      .catch(err => console.error(err.response))
    },
    fetchReview({ commit, getters }, reviewPk) {
      axios({
        url: drf.communities.community(reviewPk),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => commit('SET_REVIEW', res.data))
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'NotFound404' })
        }
      })
    },
    createReview({ commit, getters }, review) {
      axios({
        url: drf.communities.communities(),
        method: 'post',
        data: review,
        headers: getters.authHeader
      })
      .then(res => {
        commit('SET_REVIEW', res.data)
        router.push({
          name: 'CommunityView',
          params: { reviewPk: getters.review.pk }
        })
      })
    },
    updateReview({ commit, getters }, {pk, movie_title, title, content, rank}) {
      axios({
        url: drf.communities.community(pk),
        method: 'put',
        data: { movie_title, title, content, rank },
        headers: getters.authHeader
      })
      .then(res => {
        commit('SET_REVIEW', res.data)
        router.push({
          name: 'CommunityView',
          params: { reviewPk: getters.review.pk }
        })
      })
    },
    deleteReview({ commit, getters }, reviewPk) {
      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.communities.community(reviewPk),
          method: 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('SET_REVIEW', {})
            router.push({ name: 'CommunityView' })
          })
          .catch(err => console.error(err.response))
      }
    },
    likeReview({ commit, getters }, reviewPk) {
      /* 좋아요
      POST: likeArticle URL(token)
        성공하면
          state.article 갱신
        실패하면
          에러 메시지 표시
      */
      axios({
        url: drf.communities.likeReview(reviewPk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEW', res.data))
        .catch(err => console.error(err.response))
    },
  },

}