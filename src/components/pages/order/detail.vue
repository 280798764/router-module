<!--订单管理  订单详情-->
<template>
  <div class="appDetails">
    <header >基本信息</header>
    <div class="baseNews">
      <div>
        <p>订单编号：AS201810218864</p>
        <p>购买人：方园</p>
      </div>
      <div>
        <p>订单状态：已支付</p>
        <p>支付方式：微信支付</p>
      </div>
      <div>
        <p>下单时间：2018-02.21 14:21:43</p>
        <p>付款时间：2018-02.21 14:22:36</p>
      </div>
    </div>
    <header >商品信息</header>
    <div class="produceNews">
      <table>
        <tr>
          <td>应用图标</td>
          <td>应用名称</td>
          <td>单价(元)</td>
          <td>数量</td>
          <td>小计(元)</td>
        </tr>
        <tr>
          <td><img src="../../../assets/images/icons/icon-title.png" alt=""></td>
          <td>高级仿真配置</td>
          <td>￥15</td>
          <td>30</td>
          <td>￥450</td>
        </tr>
        <tr>
          <td><img src="../../../assets/images/icons/icon-title.png" alt=""></td>
          <td>高级仿真配置</td>
          <td>￥15</td>
          <td>30</td>
          <td>￥450</td>
        </tr>
      </table>

    </div>
    <header >优惠信息</header>
    <div class="specialOffer">
      <p>高级仿真配置9折券</p>
    </div>
    <header >费用信息</header>
    <div class="costInformation">
      <p>
        <span>订单总金额：￥900</span>
        <span>支付金额：￥900</span>
      </p>
    </div>
    <header >发票信息</header>
    <div class="invoiceInformation" >
      <div>
        <p>发票类型：增值税专用发票</p>
        <p>地址及电话：上海市杨浦区长阳路1687</p>
        <p>号西1号楼1106室  021-55886810</p>
      </div>
      <div>
        <p>公司名称：智能云科信息科技有限公司</p>
        <p>开户行及账号：浦发银行  9742326742762</p>
      </div>
      <div>
        <p>纳税人识别号：91310110350829361C</p>
      </div>
    </div>
    <header >地址信息</header>
    <div class="costInformation">
      <p>姜吕蒙 上海 杨浦区 城区 智能云科-长阳路1687号西1号楼1106室 182****3197</p>
    </div>
    <header >操作记录</header>
    <div class="operatingData">
      <table>
        <tr>
          <td>操作者</td>
          <td>操作时间</td>
          <td>订单状态</td>
          <td>备注</td>
        </tr>
        <tr>
          <td>林正茂</td>
          <td>2018-02-21 :14:31:56</td>
          <td>已收款</td>
          <td>线下汇款收款确认</td>
        </tr>
        <tr>
          <td>赵二清</td>
          <td>2018-02-21 :14:31:56</td>
          <td>已删除</td>
          <td>删除用户取消的订单</td>
        </tr>
      </table>
    </div>
    <div class="orderDetailBottom">
      <button>删除</button>
      <button>取消</button>
      <button>返回</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>

</style>
