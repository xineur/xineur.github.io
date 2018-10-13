import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import axio from '@/components/document/axios/index'
import axiosIntroduction from '@/components/document/axios/introduction'
import axiosInstall from '@/components/document/axios/install'
import axiosApi from '@/components/document/axios/api'
import parameter from '@/components/document/axios/parameter'
import '@/assets/less/template.less'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/document/axios',
      name: 'axios',
      component: axio,
      redirect: '/document/axios/introduction',
      children: [{
        path: 'introduction',
        name: 'axiosIntroduction',
        component: axiosIntroduction
      }, {
        path: 'install',
        name: 'axiosInstall',
        component: axiosInstall
      }, {
        path: 'api/:api',
        name: 'axiosApi',
        component: axiosApi
      }, {
        path: '/document/axios/parameter/:parameter',
        name: 'parameter',
        component: parameter
      }]
    },
  ]
})
