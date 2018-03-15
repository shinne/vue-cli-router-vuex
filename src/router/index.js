import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import HomeDetail from '@/components/home/homeDetail/homeDetail'
import Score from '@/components/score/score'
import RightsList from '@/components/rightsList/rightsList'
import login from '@/components/login/login'
import store from '../store'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/home/homeDetail',
          name: 'HomeDetail',
          component: HomeDetail
        }
      ]
    },
    {
      path: '/score',
      name: 'Score',
      component: Score,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/rightsList',
      name: 'RightsList',
      component: RightsList,
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (window.token) {
      next()
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next()
  }
})

export default router
