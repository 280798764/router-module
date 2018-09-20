/* 运维管理 */
import layout from '@/components/layout/Index'

// 群组管理 人员管理 角色管理
const group = resolve => require(['@/components/pages/operations/group'], resolve)
const personnel = resolve => require(['@/components/pages/operations/personnel'], resolve)
const role = resolve => require(['@/components/pages/operations/role'], resolve)

const routes = [
  {
    path: '/operations',
    component: layout,
    children: [
      {
        path: 'group',
        component: group
      },
      {
        path: 'personnel',
        component: personnel
      },
      {
        path: 'role',
        component: role
      }
    ]
  }
]

export default routes
