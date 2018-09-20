<!-- 表单展示 -->
<template>
  <section class="table-wrapper wms-scroll" :class="{'scroll': scroll}">
  <!-- <section class="table-wrapper wms-scroll table-line-select" :class="{'scroll': scroll}"> -->
    <table>
      <thead>
        <tr>
          <th>
            <custom-radio :radioChecked="selectAll" @clickRadio="clickRadio"></custom-radio>
          </th>
          <th v-for="(colName,index) in thead" :key="index">{{colName}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tbody" @click="selectRecord(item)" :class="{'highlight': !!item.highlight}" :key="index">
          <slot name="item" :item="item" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import CustomRadio from './CustomRadio.vue'

export default {
  props: {
    thead: Array,
    tbody: Array,
    scroll: { // 是否横向滚动
      type: Boolean,
      default: false
    },
    selectAll: { // 是否全选
      type: Boolean,
      default: false
    }
  },
  components: {
    CustomRadio
  },
  methods: {
    // 选中记录
    selectRecord (item) {
      this.$emit('selectRecord', item)
    },
    // 全选、全不选
    clickRadio () {
      this.$emit('selectAllRecord', this.selectAll)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/styles/pages/customTable.less";

  .table-line-select tbody tr:hover {
    cursor: pointer;
  }
</style>
