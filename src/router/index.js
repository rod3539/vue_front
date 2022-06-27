import Vue from 'vue'
import VueRouter from 'vue-router'

import MovieDetail2 from '@/components/MovieDetail2.vue' 
import MovieDetail from '@/components/MovieDetail.vue'

import CommunityView from '@/views/Communities/CommunityView.vue'
import NewReview from '@/views/Communities/NewReview.vue'
import ReviewDetailView from '@/views/Communities/ReviewDetailView.vue'
import ReviewEditView from '@/views/Communities/ReviewEditView.vue'

import StartNow from '@/views/Accounts/StartNow.vue'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import LoginView from '@/views/Accounts/LoginView.vue'
import SignupView from '@/views/Accounts/SignupView.vue'
import NotFound404 from '@/views/Accounts/NotFound404.vue'
import RecommendView from '@/views/RecommendView.vue'
import store from '@/store'

Vue.use(VueRouter)

const requireAuth = () => (to, from, next) => {
  if (store.state.token !== '') {
    return next()
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'StartNow',
    component: StartNow
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
    beforeEnter: requireAuth()
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView,
    beforeEnter: requireAuth()
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail,
    beforeEnter: requireAuth()
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail2',
    component: MovieDetail2,
    beforeEnter: requireAuth()
  },
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView,
    beforeEnter: requireAuth()
  },
  {
    path: '/community/create',
    name: 'NewReview',
    component: NewReview,
    beforeEnter: requireAuth()
  },
  {
    path: '/community/:reviewPk',
    name: 'ReviewDetailView',
    component: ReviewDetailView,
    beforeEnter: requireAuth()
  },
  {
    path: '/community/:reviewPk/edit',
    name: 'ReviewEditView',
    component: ReviewEditView,
    beforeEnter: requireAuth()
  },
  {
    path:'/recommend',
    name:'recommendView',
    component: RecommendView,
    beforeEnter: requireAuth()
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const noAuthPages = ['StartNow' ,'LoginView', 'SignupView']
  if (noAuthPages.includes(to.name)) {
    if (token) {
      next({ name: 'HomeView' })
    }
  } else {
    if (!token) {
      next({ name: 'LoginView' })
    }
  }
  next()
})

export default router
