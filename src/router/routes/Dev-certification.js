/* 开发者认证管理 */
import layout from '@/components/layout/Index'

// 开发者认证列表  认证详情-个人  认证详情-企业
const index = resolve => require(['@/components/pages/dev-certification/index'], resolve)
const person = resolve => require(['@/components/pages/dev-certification/person'], resolve)
const enterprise = resolve => require(['@/components/pages/dev-certification/enterprise'], resolve)

const routes = [
  {
    path: '/dev-certification',
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
      }
    ]
  }
]

export default routes
