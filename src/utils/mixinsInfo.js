import tool from '@/utils/tool'
import filters from '@/utils/filters'

export default {
  data () {
    return {
      roleType: '', // 登录角色
      pageType: 'add', // 页面类型：添加、编辑、展示
      levelOneId: '', // 一层页面id (单子id)
      levelTwoId: '', // 二层页面id
      levelThreeId: '', // 三层页面id
      firstLabelWid: '65px', // 第一列的标签宽度
      clientInputWid: '350px', // 客户名称的宽度
      isShowOperate: false, // 是否显示备件列表的编辑类按钮（编辑、删除）
      downloading: false, // 是否正在下载
      addPartIng: false, // 是否正在执行添加操作并跳转中
      canSaveFlag: true // 防止多次保存
    }
  },
  computed: {
    // 参数列表集合
    enumParams () { return tool.getEnumParams() },
    // 申请单状态码
    applyStatusList () { return this.enumParams.applyStatus },
    // 申请方式
    applyTypeDetailList () { return this.enumParams.applyTypeDetail },
    // 申请单申请类别
    applyTypeList () { return this.enumParams.applyType },
    // 申请单申请类别 商务类
    applyTypeBusinessList () { return this.enumParams.applyTypeBusiness },
    // 需求单状态
    requireStatusList () { return this.enumParams.requireStatus },
    // 送修单状态码
    sendToRepairStatusList () { return this.enumParams.sendToRepairStatus },
    // 保修状态
    warrantyStatusList () { return this.enumParams.warrantyStatus },
    // 更换单状态
    replacementStatusList () { return this.enumParams.replacementStatus },
    // 更换单状态(审核专用)
    replacementStatusAuditList () { return this.enumParams.replacementStatusAudit },
    // 出库单状态
    stockOutStatusList () { return this.enumParams.stockOutStatus },
    // 出库单类型
    stockOutTypeList () { return this.enumParams.stockOutType },
    // 入库单状态
    stockInStatusList () { return this.enumParams.stockInStatus },
    // 出库 备件去向
    wherePartGoneList () { return this.enumParams.wherePartGone },
    // 返修单状态
    repairReturnStatusList () { return this.enumParams.repairReturnStatus },
    // 商务类型
    businessTypeList () { return this.enumParams.businessType },
    // 商务单状态
    businessStatusList () { return this.enumParams.businessStatus },
    // 商务单状态
    contractStatusList () { return this.enumParams.contractStatus },
    // 发货单状态
    stockDeliverList () { return this.enumParams.stockDeliverList }
  },
  created () {
    this.roleType = sessionStorage.getItem('roleType')
    this.levelOneId = sessionStorage.getItem('levelOneId')
    this.levelTwoId = sessionStorage.getItem('levelTwoId')
    this.levelThreeId = sessionStorage.getItem('levelThreeId')
    // 返回最顶部
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  methods: {
    // 编辑按钮
    edit () {
      this.pageType = 'edit'
      sessionStorage.setItem('pageTypeLv1', 'edit')
      sessionStorage.setItem('pageTypeLv2', 'edit')
      // 部分页面（送修）
      this.loadMatching = true
    },
    // 添加备件按钮
    addPart (path) {
      if (!this.addPartIng) {
        console.log('addPartIng', this.addPartIng)
        this.addPartIng = true
        sessionStorage.removeItem('levelTwoId')
        sessionStorage.setItem('pageTypeLv2', 'add')
        // 第一次添加：保存0、提交1, 是否是添加按钮
        this.checkFields(0, true)
        setTimeout(() => {
          this.addPartIng = false
        }, 5000) // 理论上页面发生跳转，会重置该参数
      }
    },
    // 编辑备件按钮
    editPart (path) {
      // 编辑的场合
      sessionStorage.removeItem('levelTwoId')
      sessionStorage.setItem('pageTypeLv2', 'edit')
      this.$router.push(path)
    },
    // 编辑页面 保存按钮
    saveData () {
      // 防止多次提交
      if (this.canSaveFlag) {
        this.canSaveFlag = false
        this.checkFields(0, false)
        setTimeout(() => {
          this.canSaveFlag = true
        }, 5000)
      }
    },
    // 编辑页面 提交按钮
    submitData () {
      if (this.canSaveFlag) {
        this.canSaveFlag = false
        this.checkFields(1, false)
        setTimeout(() => {
          this.canSaveFlag = true
        }, 5000)
      }
    },
    // 直接调用接口, submitType: 保存0、提交1, addFlag: 添加按钮标识, path: 添加的场合跳转路径
    dispatchData (cmd, params, submitType, addFlag, path) {
      this.$store.dispatch(cmd, {...params, submit: submitType}).then(
        res => {
          if (addFlag) {
            sessionStorage.setItem('levelOneId', res)
            sessionStorage.removeItem('levelTwoId')
            sessionStorage.setItem('pageTypeLv1', 'edit')
            this.$router.push(path)
          } else {
            let msg = submitType === 1 ? '提交' : '保存'
            setTimeout(() => {
              this.$Modal.success({
                title: '提示',
                content: msg + '成功！',
                onOk: () => {
                  this.backForward() // 详情页跳转至列表页
                }
              })
            }, 300)
          }
        },
        rej => {
          this.clearNotice()
          this.alert(rej.errorInfo, 'error')
        }
      )
    },
    // 通用保存和成功后跳转方法
    saveDataCommon (cmd, params, cb) {
      this.$store.dispatch(cmd, params).then(
        res => {
          if (cb instanceof Function) {
            cb(res)
          } else {
            this.$Modal.success({
              title: '提示',
              content: '保存成功！',
              onOk: () => {
                this.backForward()
              }
            })
          }
        },
        rej => {
          this.clearNotice()
          this.alert('保存失败，' + rej.errorInfo, 'error')
        }
      )
    },
    // 导出公共方法
    exportFile (id, cmd) {
      if (!this.downloading) {
        this.downloading = true
        tool.downloadFileByIFrame(cmd + '?id=' + id + '&iToken=' + sessionStorage.getItem('token'))
        setTimeout(() => {
          this.downloading = false
        }, 3000)
      }
    },
    // 导出公共方法WMS
    exportFileWMS (id, cmd) {
      if (!this.downloading) {
        this.downloading = true
        tool.downloadFileByIFrame(cmd + '?id=' + id + '&iToken=' + sessionStorage.getItem('token'), 'wms')
        setTimeout(() => {
          this.downloading = false
        }, 3000)
      }
    },
    // 导出公共方法(带参数)
    exportFileWithParams (cmd, params) {
      if (!this.downloading) {
        let searchParams = ''
        for (let key in params) {
          if (params[key]) searchParams += '&' + key + '=' + params[key]
        }
        this.downloading = true
        tool.downloadFileByIFrame(cmd + '?iToken=' + sessionStorage.getItem('token') + searchParams)
        setTimeout(() => {
          this.downloading = false
        }, 3000)
      }
    }
  },
  filters: {
    formatDateYMD: filters.formatDateYMD,
    // 申请单状态码
    applyStatusFilter: filters.applyStatusFilter,
    // 申请方式
    applyTypeDetailFilter: filters.applyTypeDetailFilter,
    // 申请单申请类别 商务类
    applyTypeBusinessFilter: filters.applyTypeBusinessFilter,
    // 需求单状态
    requireStatusFilter: filters.requireStatusFilter,
    // 送修单状态码
    sendToRepairStatusFilter: filters.sendToRepairStatusFilter,
    // 保修状态
    warrantyStatusFilter: filters.warrantyStatusFilter,
    // 当前保修状态
    currentWarrantyStatusFilter: filters.currentWarrantyStatusFilter,
    // 更换单状态
    replacementStatusFilter: filters.replacementStatusFilter,
    // 出库单状态
    stockOutStatusFilter: filters.stockOutStatusFilter,
    // 出库单 备件去向
    wherePartGoneFilter: filters.wherePartGoneFilter,
    // 入库单状态
    stockInStatusFilter: filters.stockInStatusFilter,
    // 返修单状态
    repairReturnStatusFilter: filters.repairReturnStatusFilter,
    // 商务单类型
    businessTypeFilter: filters.businessTypeFilter,
    // 商务单状态
    businessStatusFilter: filters.businessStatusFilter,
    // 合同状态
    contractStatusFilter: filters.contractStatusFilter,
    // 发货状态
    stockDeliverListFilter: filters.stockDeliverListFilter,
    // 是否维修
    doesRepairFilter: filters.doesRepairFilter
  }
}
