/* 财务管理 */
import layout from '@/components/layout/Index'

// 收款管理 结算管理 发票申请管理
const receipt = resolve => require(['@/components/pages/financial/receipt'], resolve)
const accounts = resolve => require(['@/components/pages/financial/accounts'], resolve)
const invoice = resolve => require(['@/components/pages/financial/ invoice'], resolve)

const routes = [
  {
    path: '/financial',
    component: layout,
    children: [
      {
        path: 'receipt',
        component: receipt
      },
      {
        path: 'accounts',
        component: accounts
      },
      {
        path: 'invoice',
        component: invoice
      }
    ]
  }
]

export default routes
