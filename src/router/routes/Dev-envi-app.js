/* applicationManagement 备注 */
import layout from '@/components/layout/Index'

// 开发环境申请列表  开发环境申请详情-企业  开发环境申请详情-个人
const enterprise = resolve => require(['@/components/pages/dev-envi-app/enterprise'], resolve)
const person = resolve => require(['@/components/pages/dev-envi-app/person'], resolve)
const index = resolve => require(['@/components/pages/dev-envi-app/index'], resolve)

const routes = [
  {
    path: '/dev-envi-app',
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
