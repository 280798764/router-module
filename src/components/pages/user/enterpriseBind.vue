<template>
  <div class="userLists_wrap" >
    <div class="userLists_nav">
      <div>
        <i-input :value.sync="value" placeholder="请输入申请人名称/企业名称" style="width: 300px"></i-input>
      </div>
      <div>
        <i-select :model.sync="model1" style="width:220px" v-model="patternPayments[0].value">
          <i-option v-for="(patternPayment,index) in patternPayments" :value="patternPayment.value" :key="index">{{ patternPayment.label }}</i-option>
        </i-select>
      </div>
      <div class="btn">
        <button>查 询</button>
      </div>
    </div>
    <div class="userLists_taps">
      <Tabs active-key="key1">
        <Tab-pane label="全部(108)" key="key1"></Tab-pane>
      </Tabs>
    </div>
    <div class="userLists_lists">
      <div class="userLists_lists_title">
        <ul>
          <li>ID</li>
          <li>审请人</li>
          <li>申请时间</li>
          <li>企业名称</li>
          <li>统一社会信用代码</li>
          <li>申请状态</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="userLists_lists_content">
        <ul>
          <li>401</li>
          <li>赵成厚</li>
          <li>2018-02-21 14:21:35</li>
          <li>XXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXX</li>
          <li>待审核</li>
          <li>审核</li>
        </ul>
        <ul>
          <li>401</li>
          <li>赵成厚</li>
          <li>2018-02-21 14:21:35</li>
          <li>XXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXX</li>
          <li>待审核</li>
          <li>审核</li>
        </ul>
        <ul>
          <li>401</li>
          <li>赵成厚</li>
          <li>2018-02-21 14:21:35</li>
          <li>XXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXX</li>
          <li>待审核</li>
          <li>审核</li>
        </ul>
        <ul>
          <li>401</li>
          <li>赵成厚</li>
          <li>2018-02-21 14:21:35</li>
          <li>XXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXX</li>
          <li>待审核</li>
          <li>审核</li>
        </ul>
        <ul>
          <li>401</li>
          <li>赵成厚</li>
          <li>2018-02-21 14:21:35</li>
          <li>XXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXX</li>
          <li>待审核</li>
          <li>审核</li>
        </ul>
        <ul>
          <li>401</li>
          <li>赵成厚</li>
          <li>2018-02-21 14:21:35</li>
          <li>XXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXX</li>
          <li>待审核</li>
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
      model1: '',
      value: '',
      devNames: [
        {
          value: 'name',
          label: '申请状态'
        }

      ],
      patternPayments: [
        {
          value: 'patternPayment',
          label: '待审核'
        },
        {
          value: 'WeChatPay',
          label: '已审核'
        },
        {
          value: 'WeChatPay2',
          label: '已驳回'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/pages/userManagement/enterpriseBind.less';
</style>
