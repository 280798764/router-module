// 应用管理
import layout from '@/components/layout/Index'

// 应用列表 应用详情
const index = resolve => require(['@/components/pages/application/index'], resolve)
const detail = resolve => require(['@/components/pages/application/detail'], resolve)

const routes = [
  {
    path: '/application',
    component: layout,
    children: [
      {
        path: 'index',
        component: index
      },
      {
        path: 'detail',
        component: detail
      }
    ]
  }
]

export default routes
