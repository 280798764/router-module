<!-- 自定义radio和选中状态的radio样式 增加阻止冒泡事件 -->
<template>
  <div class="radio-wrapper" :class="{'cumtom-radio-checked': radioChecked, 'disabled': disabled}" @click.stop="clickHander">
    <span class="cumtom-radio">
      <span class="cumtom-radio-inner"></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    radioChecked: {
      type: [Boolean, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击事件
    clickHander () {
      if (!this.disabled) {
        this.$emit('clickRadio')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/styles/pages/customRadio.less";
</style>
