<!--订单管理  列表页-->
<template>
  <section class="app-list-wrap">
    <!--过滤条件-->
    <section class="filter-wrapper" @keyup.enter="searchBtn">
      <div class="filter-line">
        <label>订单编号</label><input type="text" >
        <label>收货人姓名</label><input type="text" >
        <label>支付方式</label>
        <!-- 支付方式-->
        <div class="select-wrapper">
          <Select v-model="params.paymentMode" clearable>
            <Option v-for="item in params.paymentModes" :value="item.id" :key="item.id">{{item.name}}</Option>
          </Select>
        </div>
        <label>订单状态</label>
        <!-- 订单状态-->
        <div class="select-wrapper">
          <Select v-model="params.orderState" clearable>
            <Option v-for="item in params.orderStates" :value="item.id" :key="item.id">{{item.name}}</Option>
          </Select>
        </div>
      </div>
    </section>
    <!-- 功能按钮 -->
    <section class="func-btns-wrapper">
      <div  class="func-btn btn-search" @click="searchBtn"><i class="iconfont icon-btn-search"></i>查询</div>
    </section>
    <!--tab标签-->
    <section id="nav-tab">
      <Tabs active-key="key1">
        <Tab-pane label="全部订单(108)" key="key1"></Tab-pane>
        <Tab-pane label="待付款(3)" key="key2"></Tab-pane>
        <Tab-pane label="已完成(27)" key="key3"></Tab-pane>
        <Tab-pane label="已取消(27)" key="key3"></Tab-pane>
      </Tabs>
    </section>
    <!--过滤条件-->
    <section class="filter-wrapper" @keyup.enter="searchBtn">
      <div class="filter-line">
        <label>批量操作</label>
        <!-- 批量操作-->
        <div class="select-wrapper">
          <Select v-model="params.batchOperation" clearable>
            <Option v-for="item in params.batchOperations" :value="item.id" :key="item.id">{{item.name}}</Option>
          </Select>
        </div>
      </div>
    </section>
    <!-- 表单展示 -->
    <section class="list-wrapper">
      <wms-table-checkbox :thead="thead" :tbody="tbody" :scroll="true" :selectAll="selectAllFlag" @selectRecord="selectRecord" @selectAllRecord="selectAllRecord">
        <template slot="item" slot-scope="props">
          <td class="wid-30px"><div><custom-radio-for-table :radioChecked="props.item.selected" @clickRadio="selectRecord(props.item)" style="margin-top: 12px;"></custom-radio-for-table></div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.warehouseName}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.partName}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.partModel}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.materialSn}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.stock}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.newStock}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.repairedStock}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.faultStock}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.scrapStock}}</div></td>
          <td><div :class="{'highLight': (props.item.newStock + props.item.repairedStock) < props.item.safetyStock}">{{props.item.safetyStock}}</div></td>
          <td class="operations-td wid-100px">
            <div class="operations flex-center">
              <div v-permission="28020402" class="btn btn-detail" @click.stop="readRecord(props.item.id, '/stock-query/detail')">详情</div>
            </div>
          </td>
        </template>
      </wms-table-checkbox>
      <wms-pagination v-if="pageInfo.pages" :pageInfo="pageInfo" @pageChange="pageChange"></wms-pagination>
    </section>
  </section>
</template>
<script>
import mixinsTable from '@/utils/mixinsTable'
import mixinsInfo from '@/utils/mixinsInfo'
import { CustomRadioForTable, CustomTableCheckbox } from '@/components/modules'
const thead = ['应用图标', '应用名称', '开发者名称', '开发者类型', '价格', '审核通过时间', '应用状态', '操作']

export default {
  mixins: [mixinsTable, mixinsInfo],
  data () {
    return {
      thead: thead,
      tbody: [],
      selectAllFlag: false, // 是否全选
      params: {
        paymentMode: '', // 支付方式
        orderState: '', // 订单状态
        batchOperation: '', // 批量操作
        paymentModes: [
          {name: '微信支付', id: '1'},
          {name: '支付宝支付', id: '2'},
          {name: '线下汇款', id: '2'}
        ],
        orderStates: [
          {name: '已上架', id: '1'},
          {name: '未上架', id: '2'}
        ],
        batchOperations: [
          {name: '删除', id: '1'},
          {name: '取消', id: '2'}
        ]
      }

    }
  },
  methods: {
    showCheckboxes () {

    },
    // 选择记录
    selectRecord () {

    },
    selectAllRecord () {

    }
  },

  components: {
    CustomRadioForTable,
    'CustomTable': CustomTableCheckbox
  }
}
</script>

<style lang="less" scoped>
  .app-list-wrap{
    background-color:  #F1F1F1;
    #nav-tab{
      margin: 10px 0;
      background-color: #fff;
    }
  }

</style>
