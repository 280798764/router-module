/* 常用过滤 */
import tool from './tool'

const filters = {
  formatDateYMD (date) {
    return tool.dateFormat(date, 'yyyy-MM-dd')
  },
  formatMoney (money) {
    return tool.formatMoney(money, 2)
  },
  // 更换单状态
  replacementStatusFilter (id) {
    return tool.getNameById(id, 'replacementStatus')
  },
  // 申请单状态码
  applyStatusFilter (id) {
    return tool.getNameById(id, 'applyStatus')
  },
  // 申请单申请类别 商务类
  applyTypeBusinessFilter (id) {
    return tool.getNameById(id, 'applyTypeBusiness')
  },
  // 申请单申请类别
  applyTypeFilter (id) {
    return tool.getNameById(id, 'applyType')
  },
  // 申请单申请类别
  applyTypeDetailFilter (id) {
    return tool.getNameById(id, 'applyTypeDetail')
  },
  // 需求单状态
  requireStatusFilter (id) {
    return tool.getNameById(id, 'requireStatus')
  },
  // 保修状态
  warrantyStatusFilter (id) {
    return tool.getNameById(id, 'warrantyStatus')
  },
  // 当前保修状态
  currentWarrantyStatusFilter (id) {
    return tool.getNameById(id, 'currentWarrantyStatus')
  },
  // 送修单状态码
  sendToRepairStatusFilter (id) {
    return tool.getNameById(id, 'sendToRepairStatus')
  },
  // 出库单备件去向
  wherePartGoneFilter (id) {
    return tool.getNameById(id, 'wherePartGone')
  },
  // 出库单状态
  stockOutStatusFilter (id) {
    return tool.getNameById(id, 'stockOutStatus')
  },
  // 入库单状态
  stockInStatusFilter (id) {
    return tool.getNameById(id, 'stockInStatus')
  },
  // 返修单状态列表
  repairReturnStatusFilter (id) {
    return tool.getNameById(id, 'repairReturnStatus')
  },
  // 商务类型
  businessTypeFilter (id) {
    return tool.getNameById(id, 'businessType')
  },
  // 商务单状态
  businessStatusFilter (id) {
    return tool.getNameById(id, 'businessStatus')
  },
  // 合同状态
  contractStatusFilter (id) {
    return tool.getNameById(id, 'contractStatus')
  },
  // 发货单状态
  stockDeliverListFilter (id) {
    return tool.getNameById(id, 'stockDeliverList')
  },
  // 是否维修
  doesRepairFilter (id) {
    return tool.getNameById(id, 'doesRepair')
  },
  // 备件状态
  partsStatusFilter (id) {
    return tool.getNameById(id, 'partsStatus')
  },
  /* 出库保修状态-带待定的 */
  stockOutWarrantyStatusFilter (id) {
    return tool.getNameById(id, 'stockOutWarrantyStatus')
  }
}

export default filters
