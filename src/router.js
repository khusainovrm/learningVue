import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import TasksList from './components/TasksList'

Vue.user(Router)

export default new Router({
  mode: 'history',
  routes:[
    {path: '/',
    component:Home},
    {path: '/tasks',
    component: () => import('./components/TasksList')}
  ]
})