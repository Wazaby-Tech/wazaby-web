const c1 = () => import(/* webpackChunkName: "page--src-pages-services-vue" */ "C:\\git\\wazaby-web\\site\\src\\pages\\Services.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-careers-vue" */ "C:\\git\\wazaby-web\\site\\src\\pages\\Careers.vue")

export default [
  {
    path: "/services/",
    component: c1
  },
  {
    path: "/careers/",
    component: c2
  }
]
