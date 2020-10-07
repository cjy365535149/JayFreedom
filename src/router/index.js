import Vue from 'vue'
import VueRouter from 'vue-router'
import ActorSearch from '../views/ActorSearch.vue'
import ActorList from '../views/ActorList.vue'
import layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [

      {
        path: '/ActorSearch/:actorId?',
        name: 'ActorSearch',
        component: ActorSearch
      },
      {
        path: '/ActorList',
        name: 'ActorList',
        component: ActorList
      },
      {
        path: '/Echarts',
        name: 'Echarts',
        component: () => import(/* webpackChunkName: "about" */ '../views/Echarts.vue')
      },
      {
        path: '/Author',
        name: 'Author',
        component: () => import(/* webpackChunkName: "about" */ '../views/Author.vue')
      }

    ]
  },

]

const router = new VueRouter(

  {
    routes
  });

export default router