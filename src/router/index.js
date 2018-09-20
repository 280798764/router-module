import Vue from 'vue'
import Router from 'vue-router'
import iview from 'iview'
import login from './routes/login'
import homepage from './routes/homepage'
import demoPageOne from './routes/demoPageOne'
import application from './routes/application'
import order from './routes/order'
import user from './routes/user'
import devCertification from './routes/Dev-certification'
import devEnviApp from './routes/Dev-envi-app'
import devAppRelease from './routes/Dev-app-release'
import operations from './routes/operations'
import advertising from './routes/advertising'
import helpInformation from './routes/HelpInformation'
import financial from './routes/Financial'

Vue.use(Router)

const router = new Router({
  routes: [
    ...login,
    ...homepage,
    ...demoPageOne,
    ...application,
    ...order,
    ...user,
    ...devCertification,
    ...devEnviApp,
    ...devAppRelease,
    ...helpInformation,
    ...advertising,
    ...operations,
    ...financial,
    {
      path: '/*',
      redirect: to => {
        return '/index'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 页面调整 去除iview 提示信息
  iview.Notice.destroy()
  next()
})

export default router
