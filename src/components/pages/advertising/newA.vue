<!--广告管理 新建广告-->
<template>
<div class="newAdvertising_Wrap">
  <header>基本信息</header>
  <div>
    <div>
      <i-form :model="formItem" :label-width="80">
        <div>
          <Form-item label="广告名称：">
            <i-input :value.sync="formItem.input" placeholder="请输入广告名称"></i-input>
          </Form-item>
        </div>
        <div>
          <Form-item label="广告位置：">
            <i-select :model.sync="formItem.select" placeholder="首页" style="width: 300px">
              <i-option value="beijing">广告页面</i-option>
              <i-option value="shanghai">应用市场页面</i-option>
              <i-option value="shenzhen">应用详情页面</i-option>
              <i-option value="shenzhen1">帮助须知页面</i-option>
            </i-select>
          </Form-item>
          <Form-item label="" style="width: 300px">
            <i-select :model.sync="formItem.select" placeholder="首页Banner">
              <i-option value="beijing">广告位</i-option>
              <i-option value="shanghai">热门应用</i-option>
            </i-select>
          </Form-item>
          <Form-item>
            <i-button type="primary">新建</i-button>
          </Form-item>
        </div>
      </i-form>
    </div>
  </div>
  <header>广告内容</header>
  <div>
    <div class="newAdvertising_listsWrap">
      <div class="newAdvertising_title">
        <ul>
          <li>广告顺序</li>
          <li>广告图片</li>
          <li>广告链接</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="newAdvertising_lists_content">
        <ul>
          <li>1</li>
          <li>图片</li>
          <li>高保真模型</li>
          <li>
            <span>上移</span>
            <span>下移</span>
            <span>修改</span>
            <span>删除</span>
          </li>
        </ul>
        <ul>
          <li>1</li>
          <li>图片</li>
          <li>高保真模型</li>
          <li>
            <span>上移</span>
            <span>下移</span>
            <span>修改</span>
            <span>删除</span>
          </li>
        </ul>
        <ul>
          <li>1</li>
          <li>图片</li>
          <li>高保真模型</li>
          <li>
            <span>上移</span>
            <span>下移</span>
            <span>修改</span>
            <span>删除</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~@/assets/styles/pages/contentManagement/NewAdvertising.less';
</style>
