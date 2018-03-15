import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import HomeDetail from '@/components/home/homeDetail/homeDetail'
import Score from '@/components/score/score'
import RightsList from '@/components/rightsList/rightsList'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
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
      component: Score
    },
    {
      path: '/rightsList',
      name: 'RightsList',
      component: RightsList
    }
  ]
})
