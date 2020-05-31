const c1 = () => import(/* webpackChunkName: "page--src-pages-services-vue" */ "C:\\git\\wazaby-web\\site\\src\\pages\\Services.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-careers-vue" */ "C:\\git\\wazaby-web\\site\\src\\pages\\Careers.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\git\\wazaby-web\\site\\src\\pages\\About.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\git\\wazaby-web\\site\\src\\pages\\404.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\git\\wazaby-web\\site\\src\\pages\\Index.vue")

export default [
  {
    path: "/services/",
    component: c1
  },
  {
    path: "/careers/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
