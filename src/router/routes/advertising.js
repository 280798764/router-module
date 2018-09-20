/* 广告管理 */
import layout from '@/components/layout/Index'

// 广告位 新建广告
const space = resolve => require(['@/components/pages/advertising/space'], resolve)
const newA = resolve => require(['@/components/pages/advertising/newA'], resolve)

const routes = [
  {
    path: '/advertising',
    component: layout,
    children: [
      {
        path: 'newA',
        component: newA
      },
      {
        path: 'space',
        component: space
      }

    ]
  }
]

export default routes
