<template>
  <section class="section_side">
    <navigation :navList="navList"></navigation>
  </section>
</template>

<script>
import { Navigation } from '@/components/modules'

const navList = [
  {
    name: '应用管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '应用列表',
        path: '/application/index'
      },
      {
        name: '应用详情',
        path: '/application/detail'
      }
    ]
  },
  {
    name: '订单管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '订单列表',
        path: '/order/index'
      },
      {
        name: '订单查询',
        path: '/order/detail'
      },
      {
        name: '订单评价审核',
        path: '/order/evaluationAudit'
      }
    ]
  },
  {
    name: '财务管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '收款管理',
        path: '/financial/receipt'
      },
      {
        name: '结算管理',
        path: '/financial/accounts'
      },
      {
        name: '发票申请管理',
        path: '/financial/invoice'
      }
    ]
  },
  {
    name: '用户管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '用户列表',
        path: '/user/index'
      },
      {
        name: '企业绑定申请',
        path: '/user/enterpriseBind'
      }
    ]
  },
  {
    name: '开发者认证管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '开发者认证列表',
        path: '/dev-certification/index'
      },
      {
        name: '认证详情-个人',
        path: '/dev-certification/person'
      },
      {
        name: '认证详情-企业',
        path: '/dev-certification/enterprise'
      }
    ]
  },
  {
    name: '开发环境申请管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '开发环境申请列表',
        path: '/dev-envi-app/index'
      },
      {
        name: '开发环境申请详情-企业',
        path: '/dev-envi-app/enterprise'
      },
      {
        name: '开发环境申请详情-个人',
        path: '/dev-envi-app/person'
      }

    ]
  },
  {
    name: '开发者应用发布管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '应用发布申请列表',
        path: '/dev-app-release/index'
      },
      {
        name: '应用发布申请详情 - 企业',
        path: '/dev-app-release/enterprise'
      },
      {
        name: '应用发布申请详情-个人',
        path: '/dev-app-release/person'
      },
      {
        name: '历史版本查看',
        path: '/dev-app-release/history'
      },
      {
        name: '历史版本详情',
        path: '/dev-app-release/historyDetail'
      }
    ]
  },
  {
    name: '广告管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '广告位管理',
        path: '/advertising/space'
      },
      {
        name: '新建广告',
        path: '/advertising/newA'
      }
    ]
  },
  {
    name: '帮助须知管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '帮助须知管理',
        path: '/helpInformation/index'
      },
      {
        name: '一级目录管理',
        path: '/helpInformation/stair'
      },
      {
        name: '二级目录管理',
        path: '/helpInformation/second'
      },
      {
        name: '新建帮助须知',
        path: '/helpInformation/newH'
      }
    ]
  },
  {
    name: '运营管理',
    icon: 'nav-apply-audit',
    isOpen: false,
    children: [
      {
        name: '运营管理 - 人员管理',
        path: '/operations/personnel'
      },
      {
        name: '运营管理 - 群组管理',
        path: '/operations/group'

      },
      {
        name: '运营管理 - 角色管理',
        path: '/operations/role'
      }
    ]
  }
]

export default {
  data () {
    return {
      navList: navList
    }
  },
  components: {
    Navigation
  }
}
</script>
<style>
  .section_side{
    min-height: 400px;  }
  navigation:hover{
    background-color: #fabf40;
  }

</style>
