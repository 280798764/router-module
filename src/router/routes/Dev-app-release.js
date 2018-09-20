/* 开发者应用发布管理 */
import layout from '@/components/layout/Index'

// 应用发布申请列表  应用发布申请详情 - 企业  开应用发布申请详情 - 个人  历史版本  历史版本详情
const index = resolve => require(['@/components/pages/dev-app-release/index'], resolve)
const enterprise = resolve => require(['@/components/pages/dev-app-release/enterprise'], resolve)
const person = resolve => require(['@/components/pages/dev-app-release/person'], resolve)
const history = resolve => require(['@/components/pages/dev-app-release/history'], resolve)
const historyDetail = resolve => require(['@/components/pages/dev-app-release/historyDetail'], resolve)

const routes = [
  {
    path: '/dev-app-release',
    component: layout,
    children: [
      {
        path: 'enterprise',
        component: enterprise
      },
      {
        path: 'person',
        component: person
      },
      {
        path: 'index',
        component: index
      },
      {
        path: 'history',
        component: history
      },
      {
        path: 'historyDetail',
        component: historyDetail
      }
    ]
  }
]

export default routes
