/* 订单管理 */
import layout from '@/components/layout/Index'

// 订单列表  订单详情 订单评价审核
const index = resolve => require(['@/components/pages/order/index'], resolve)
const datail = resolve => require(['@/components/pages/order/detail'], resolve)
const evaluationAudit = resolve => require(['@/components/pages/order/evaluationAudit'], resolve)

const routes = [
  {
    path: '/order',
    component: layout,
    children: [
      {
        path: 'index',
        component: index
      },
      {
        path: 'detail',
        component: datail
      },
      {
        path: 'evaluationAudit',
        component: evaluationAudit
      }
    ]
  }
]

export default routes
