import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import emailInbox from '../components/email-inbox.vue'
import emailCompose from '../components/email-compose.vue'
import emailRead from '../components/email-read.vue'
import calendar from '../components/calendar.vue'
import tablesDatatable from '../components/tables-datatable.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/email-inbox',
    name: 'email-inbox',
    component: emailInbox
  },
  {
    path: '/email-compose',
    name: 'email-compose',
    component: emailCompose
  },
  {
    path: '/email-read',
    name: 'email-read',
    component: emailRead
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar
  },
  {
    path: '/tables-datatable',
    name: 'tablesDatatable',
    component: tablesDatatable
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
