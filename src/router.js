import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 动态生成
// 如果有接口，先拿后端接口后在动态生成

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      hideInMenu: true,
      component: () => import('./layouts/LoginLayout.vue')
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
          component: () => import('./views/form/Home.vue'),
        
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
