import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";

const routes = [
  {
    path: '/',
    redirect: '/tests'
  },
  {
    path: '/tests',
    name: 'tests',
    component: () => import('@/views/Tests.vue')
  },
  {
    path: '/prof/:name',
    name: 'prof',
    component: () => import('@/views/ProfOrientation.vue'),
    props: true
  },
  {
    path: '/test/:name',
    name: 'test',
    component: () => import('@/views/Test.vue'),
    props: true
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/Result.vue')
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('@/views/Reset.vue')
  },
  {
    path: '/professions',
    name: 'Professions',
    component: () => import('@/views/Professions.vue')
  },
  {
    path: '/professions/:name',
    name: 'Exact_Professions',
    component: () => import('@/views/ExactProfessions.vue')
  },
  {
    path: '/professions/:name/:prof',
    name: 'Profession',
    component: () => import('@/views/Profession.vue')
  },
  {
    path: '/edu/:city',
    name: 'Edu',
    component: () => import('@/views/Edu.vue')
  },
  {
    path: '/university/:uniName',
    name: 'University',
    component: () => import('@/views/University.vue'),
    props: true
  },
  {
    path: '/request/:uniName',
    name: 'Request',
    component: () => import('@/views/Request.vue'),
    props: true
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FAQ.vue')
  },
  {
    path: '/search/:text',
    name: 'search',
    component: () => import('@/views/Search.vue'),
    props: true
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/Account.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/views/History.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin.vue'),
    exact: false,
    children: [
      {
        path: 'admin_prof',
        name: 'admin_prof',
        component: () => import('@/components/AdminProf.vue'),
        exact: true
      },
      {
        path: '',
        name: 'admin_user',
        component: () => import('@/components/AdminUser.vue'),
        exact: true
      },
      {
        path: 'admin_university',
        name: 'admin_university',
        component: () => import('@/components/AdminUniversity.vue'),
        exact: true
      },
      {
        path: 'admin_additional',
        name: 'admin_additional',
        component: () => import('@/components/AdminAdditional.vue'),
        exact: true
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('@/views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

// Validation for auth
// If the user is not logged in and tries to go to special pages for users, then he redirects to the tests page
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    if (localStorage.getItem('jwt_token'))
      next()
    else if(!store.getters.getAuth && !store.getters.getAdmin)
      next({ name: 'tests' })
    else
      next() // go to wherever I'm going
  }
  else
    next() // does not require auth, make sure to always call next()!

})

export default router
