<!--用户管理  企业绑定-->
<template>
  <section class="app-list-wrap">
    <!--过滤条件-->
    <section class="filter-wrapper" @keyup.enter="searchBtn">
      <div class="filter-line">
        <label>用户名称</label><input type="text" >
        <label>企业名称</label><input type="text" >
        <label>是否绑定企业</label>
        <!-- 是否绑定企业-->
        <div class="select-wrapper">
          <Select v-model="params.bindEnterprise" clearable>
            <Option v-for="item in params.bindEnterprises" :value="item.id" :key="item.id">{{item.name}}</Option>
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
        <Tab-pane label="全部(108)" key="key1"></Tab-pane>
      </Tabs>
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
        bindEnterprise: '', // 是否绑定企业
        bindEnterprises: [
          {name: '已绑定', id: '1'},
          {name: '未绑定', id: '2'}
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
