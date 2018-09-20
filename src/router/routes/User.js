/* 用户管理 */
import layout from '@/components/layout/Index'

// 用户列表  企业绑定申请 审核详情
const index = resolve => require(['@/components/pages/user/index'], resolve)
const reviewDetails = resolve => require(['@/components/pages/user/detail'], resolve)
const enterpriseBind = resolve => require(['@/components/pages/user/enterpriseBind'], resolve)

const routes = [
  {
    path: '/user',
    component: layout,
    children: [
      {
        path: 'index',
        component: index
      },
      {
        path: 'reviewDetails',
        component: reviewDetails
      },
      {
        path: 'enterpriseBind',
        component: enterpriseBind
      }
    ]
  }
]

export default routes
