/* 应用管理 详情页 */
<template>
<section class="appDetail-wrapper">
  <div class="page-title-wrapper">
    <span class="icon-title"></span>
    <span>应用详情</span>
  </div>
  <!-- 基本信息 -->
  <div class="info-wrapper lines-split text-display">
    <div class="line title">基本信息</div>
    <div class="base-info">
      <div class="base-info-img">
        <div class="img"></div>
      </div>
      <div>
        <p>高级仿真配置</p>
        <p>更新日期：2018-01-09</p>
        <p>大小：48.82MB</p>
      </div>
      <div>
        <p>版本：1.0.20171020</p>
        <p>兼容性： 依赖CNC</p>
        <p>￥ 18.00</p>
      </div>
      <div class="baseInfo-right">
        <p>审核通过时间：2018-02-21 14:21:31</p>
        <p>应用状态： 未上架</p>
        <p>已出售13次</p>
      </div>
      <div>
        <button >上架</button>
      </div>
    </div>
  </div>
  <!--应用截图-->
  <div class="info-wrapper lines-split text-display">
    <div class="line title">应用截图</div>
    <div class="app-img">
      <ul>
        <li>
          <p><span></span></p>
          <p><span>XXXXXXX.jpg</span></p>
        </li>
        <li>
          <p><span></span></p>
          <p><span>XXXXXXX.jpg</span></p>
        </li>
        <li>
          <p><span></span></p>
          <p><span>XXXXXXX.jpg</span></p>
        </li>
        <li>
          <p><span></span></p>
          <p><span>XXXXXXX.jpg</span></p>
        </li>
        <li>
          <p><span></span></p>
          <p><span>XXXXXXX.jpg</span></p>
        </li>
      </ul>
    </div>
  </div>
  <!--应用描述-->
  <div class="info-wrapper lines-split text-display">
    <div class="line title">应用描述</div>
    <div class="app-describe">
      <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
        luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</div>
    </div>
  </div>
  <!--开发者信息-->
  <div class="info-wrapper lines-split text-display">
    <div class="line title">开发者信息</div>
    <div class="dev-info">
      <div>
        <p>类型： 企业</p>
        <p>业务联系人：龙承东</p>
        <p>联系邮箱：longchengdong@163.com</p>
      </div>
      <div>
        <p>名称： 沈机（上海）智能系统研发设计有限公司</p>
        <p>手机号码：18221023197</p>
      </div>
      <div>
        <p>统一社会信用代码：91310110MA1G80WB0B</p>
        <p>法人代表：龙青松</p>
      </div>
    </div>
    <div class="show-hidden">
      <div>
        <div class="license">
          <p>营业执照</p>
          <div>
            <ul>
              <li>
                <p>1</p>
                <p>XXXXXXX.jpg</p>
              </li>
              <li>
                <p>2</p>
                <p>XXXXXXX.jpg</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="identity">
          <div>
            <p>法人身份证(护照)编号：15012219XXXXXXXXXX</p>
            <p>法人身份证(护照)：</p>
            <div class="id-img">
              <ul>
                <li>
                  <p>1</p>
                  <p>XXXXXXX.jpg</p>
                </li>
                <li>
                  <p>2</p>
                  <p>XXXXXXX.jpg</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>联系人身份证编号：15012219XXXXXXXXXX</p>
            <p>联系人身份证：</p>
            <div class="id-img">
              <ul>
                <li>
                  <p>1</p>
                  <p>XXXXXXX.jpg</p>
                </li>
                <li>
                  <p>2</p>
                  <p>XXXXXXX.jpg</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>收款方式：线下汇款</p>
        <p>开户行：招商银行徐家汇支行</p>
        <p>收款账号：XXXXXXXXXXXXXXXXXXXX</p>
        <p></p>
      </div>
    </div>
  </div>

</section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.appDetail-wrapper{
  background-color:  #F1F1F1;
  .base-info{
    .base-info-img{
      width: 15%;
      height: 110px;
      line-height: 110px;
      margin-top: 10px;
    }
    .img{
      width: 112px;
      height: 75px;
      border:1px solid;
    }
    .baseInfo-right{
      width: 25%;
    }
    overflow: hidden;
    div{
      width: 20%;
      float: left;
      box-sizing: border-box;
      padding: 10px;
      p{
        height: 30px;
        line-height: 30px;
      }
      &:nth-of-type(5){
        height: 110px;
        line-height: 110px;
        text-align: center;
        button{
          width: 120px;
          height: 30px;
          line-height: 30px;
          border-radius: 5px;
          outline: none;
          background-color: #FABF40;
          border: none;
        }
      }
    }
  }
  .app-img{
    overflow: hidden;
    ul li{
      list-style: none;
      float: left;
      text-align: center;
      width: 20%;
      box-sizing: border-box;
      padding: 20px 10px 10px 10px;
      p:nth-of-type(1){
        width: 170px;
        height: 115px;
        border:1px solid;
      }
      p:nth-of-type(2){
        height: 30px;
        line-height: 30px;
      }

    }
  }
  .app-describe{
    padding: 20px;
    p{
      height: 20px;
      line-height: 20px;
    }
  }
  .dev-info{
    overflow: hidden;
    div{
      float: left;
      width: 33.33%;
      box-sizing: border-box;
      padding: 10px;
      p{
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .show-hidden{
    padding: 0;
    .license{
      overflow: hidden;
      padding: 0;
      div{
        padding: 0;
        margin-top:10px;
      }
      div ul li{
        list-style: none;
        float: left;
        margin-right: 20px;
        text-align: center;
        p:nth-of-type(1){
          width:124px ;
          height: 74px;
          border: 1px solid;
        }
      }
    }
    .identity{
      overflow: hidden;
      padding: 0;
      div{
        overflow: hidden;
        width: 50%;
        float: left;
        .id-img{
          width: 100%;
          overflow: hidden;
          padding: 0;
          margin-top: 10px;
          ul li{
            float: left;
            list-style:none;
            margin-right: 20px;
            text-align: center;
            p:nth-of-type(1){
              width:124px ;
              height: 74px;
              border: 1px solid;
            }
            p:nth-of-type(2){
              height: 30px;
              line-height: 30px;
            }
          }
       }
      }
    }
    p{
      height: 30px;
      line-height: 30px;
    }
    div {
      padding: 10px;

      ui li{
        list-style: none;
        float: left;
      }
    }
  }
}
</style>
