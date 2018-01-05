import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Balance from '@/pages/Balance'
import Portfolio from '@/pages/Portfolio'
import SupportUs from '@/pages/SupportUs'
import HallofFrame from '@/pages/HallofFrame'
import Settings from '@/pages/Settings'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/balance',
      name: 'Balance',
      component: Balance
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/support-us',
      name: 'SupportUs',
      component: SupportUs
    },
    {
      path: '/hall-of-frame',
      name: 'HallofFrame',
      component: HallofFrame
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
