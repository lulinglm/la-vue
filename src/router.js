import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      hideInMenu: true,
      component: () => import('./layouts/UserLayout.vue')
    },
    {
      path: '/',
      component: () =>
      import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/home"
        },
        {
          path: "/home",
          name: "home",
          meta: { icon: "info-circle", title: "主页" },
          component: () => import('./views/Home.vue'),
        
        },{
          path: '/about',
          name: 'about',
          meta: { icon: "info-circle", title: "详情" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/about/1",
              name: "about1",
              meta: { title: "关于页" },
              component: () => import('./views/About.vue'),
            }
          ]
        },
      ]
    }
  ]
})

// 跳转加载NProgress
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  next()
})

// 跳转结束取消加载NProgress
router.afterEach(() => {
  NProgress.done()
})

export default router
