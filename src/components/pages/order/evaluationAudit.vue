<!--订单管理  订单请假审核-->
<template>
  <div class="appList_wrap" >
    <div class="appList_nav">
      <div>
        <i-input :value.sync="value" placeholder="1请输入订单编号" size="large" ></i-input>
      </div>
      <div>
        <i-input :value.sync="value" placeholder="请输入商品名称或开发者名称" style="width: 300px" size="large"></i-input>
      </div>
      <div>
        <i-select :model.sync="model1" style="width:220px" v-model="orderStatus[0].value">
          <i-option v-for="(orderStatu,index) in orderStatus" :value="orderStatu.value" :key="index">{{ orderStatu.label }}</i-option>
        </i-select>
      </div>
      <div class="btn">
        <button>查 询</button>
      </div>
    </div>
    <div class="appList_taps">
      <Tabs active-key="key1">
        <Tab-pane label="全部评价(108)" key="key1"></Tab-pane>
        <Tab-pane label="待审核(3)" key="key2"></Tab-pane>
        <Tab-pane label="已通过(27)" key="key3"></Tab-pane>
        <Tab-pane label="已驳回(16)" key="key4"></Tab-pane>
      </Tabs>
    </div>
    <div class="appList_lists">
      <div class="appList_lists_title">
        <ul>
          <li><input type="checkbox"></li>
          <li>订单编号</li>
          <li>应用名称</li>
          <li>开发者</li>
          <li>评价人</li>
          <li>评价状态</li>
          <li>提交时间</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="appList_lists_content">
        <ul>
          <li><input type="checkbox"></li>
          <li>AS201811213475</li>
          <li>高仿真模型</li>
          <li>赵成龙</li>
          <li>王一</li>
          <li>待审核</li>
          <li>2018-02-21 14:21:31</li>
          <li>审核</li>
        </ul>
        <ul>
          <li><input type="checkbox"></li>
          <li>AS201811213475</li>
          <li>高仿真模型</li>
          <li>赵成龙</li>
          <li>王一</li>
          <li>待审核</li>
          <li>2018-02-21 14:21:31</li>
          <li>审核</li>
        </ul>
        <ul>
          <li><input type="checkbox"></li>
          <li>AS201811213475</li>
          <li>高仿真模型</li>
          <li>赵成龙</li>
          <li>王一</li>
          <li>待审核</li>
          <li>2018-02-21 14:21:31</li>
          <li>审核</li>
        </ul>
        <ul>
          <li><input type="checkbox"></li>
          <li>AS201811213475</li>
          <li>高仿真模型</li>
          <li>赵成龙</li>
          <li>王一</li>
          <li>待审核</li>
          <li>2018-02-21 14:21:31</li>
          <li>审核</li>
        </ul>
        <ul>
          <li><input type="checkbox"></li>
          <li>AS201811213475</li>
          <li>高仿真模型</li>
          <li>赵成龙</li>
          <li>王一</li>
          <li>待审核</li>
          <li>2018-02-21 14:21:31</li>
          <li>审核</li>
        </ul>

      </div>
    </div>
    <div class="page">
      <Page :total="100"></Page>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      value: '',
      model1: '',
      devNames: [
        {
          value: 'name',
          label: '请输入订单编号'
        }

      ],
      patternPayments: [
        {
          value: 'patternPayment',
          label: '请输入商品名称或开发者名称'
        }
      ],
      orderStatus: [
        {
          value: 'orderStatus',
          label: '评价状态'
        },
        {
          value: 'obligation',
          label: '待审核'
        },
        {
          value: 'offTheStocks',
          label: '已通过'
        },
        {
          value: 'canceled',
          label: '已驳回'
        }
      ]

    }
  }
}
</script>

<style lang="less" scoped>

</style>
