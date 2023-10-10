import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: () => import('../views/Index'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home-page/Home.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'subscriptions',
        name: 'subscriptions',
        component: () => import('../views/subscriptions-page/Subscriptions.vue'),
        meta: {
          title: '首页'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    component: () => import('../views/result-page/404'),
    meta: {
      title: '404 Not Found'
    }
  },
  {
    path: '/:path',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    let token = localStorage.getItem('token')
    if (token !== null && token !== undefined && token !== '') {
    } else {
      router.push('/login?to=' + to.path)
    }
  }
  next()
})

router.afterEach((to, from) => {
  // 后置守卫一般用来 优化用户的体验 例如切换路由时更改页面的title
  document.querySelector('title').innerText = to.meta.title + ' - youtube'
})

export default router
