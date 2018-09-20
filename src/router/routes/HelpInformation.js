/* 帮助须知管理 */
import layout from '@/components/layout/Index'

// 帮助须知管理 一级目录 二级目录 新建帮助须知
const index = resolve => require(['@/components/pages/helpInformation/index'], resolve)
const stair = resolve => require(['@/components/pages/helpInformation/stair'], resolve)
const second = resolve => require(['@/components/pages/helpInformation/second'], resolve)
const newH = resolve => require(['@/components/pages/helpInformation/newH'], resolve)

const routes = [
  {
    path: '/helpInformation',
    component: layout,
    children: [
      {
        path: 'index',
        component: index
      },
      {
        path: 'newH',
        component: newH
      },
      {
        path: 'stair',
        component: stair
      },
      {
        path: 'second',
        component: second
      }
    ]
  }
]

export default routes
