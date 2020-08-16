const url = {
  getBoxInfo: '/apis/getBoxInfo', // 获取盒子信息
  initialization: '/apis/initialization', // 初始化盒子
  refreshBoxToken: '/apis/refreshBoxToken', // 重置Token
  importExcel: '/apis/importExcel',// 导入excel
  exportExcel: '/apis/exportExcel',// 导出excel
  // 用户管理
  login: '/apis/login',
  register: '/apis/register',
  deleteUser: '/apis/deleteUser',
  editUser: '/apis/editUser',
  editUserStatus: '/apis/editUserStatus',
  getUserList: '/apis/getUserList',
  getUserPageList: '/apis/getUserPageList',
  // 设备管理
  addDevice: '/apis/addDevice',
  getDeviceDataHistoryPageList: '/apis/getDeviceDataHistoryPageList',
  updateDevice: '/apis/updateDevice',
  switchDevice: '/apis/switchDevice',
  deleteDevice: '/apis/deleteDevice',
  getDevice: '/apis/getDevice',
  getDeviceList: '/apis/getDeviceList',
  getDevicePageList: '/apis/getDevicePageList',
  getDeviceType: '/apis/getDeviceType',
  getDeviceWsnBaudRateType: '/apis/getDeviceWsnBaudRateType',
  getDeviceWsnPrityType: '/apis/getDeviceWsnPrityType',
  getDeviceWsnModeType: '/apis/getDeviceWsnModeType',
  // 测点管理
  addDp: '/apis/addDp',
  updateDp: '/apis/updateDp',
  deleteDp: '/apis/deleteDp',
  getDp: '/apis/getDp',
  getDpList: '/apis/getDpList',
  getDpPageList: '/apis/getDpPageList', //分页查询测点列表
  getDpType: '/apis/getDpType', // 查询测点类型
  getDpDataType: '/apis/getDpDataType', // 查询测点数据类型
  getDpRWType: '/apis/getDpRWType', // 查询测点读写类型
  getDpFCType: '/apis/getDpFCType', // 查询测点功能码类型
  getDpRegionType: '/apis/getDpRegionType', // 查询测点存储器类型
  getS7RegionType: '/apis/getS7RegionType', //查询s7测点S7Region类型
  // 测点数据
  getDpDataHistoryList: '/apis/getDpDataHistoryList', //查询测点历史数据
  refreshDpData: '/apis/refreshDpData', //刷新测点数据
  getDpDataHistoryForChart: '/apis/getDpDataHistoryForChart', //数据绘图
  // 告警管理
  addDpAlarm: '/apis/addDpAlarm', //新增测点告警
  deleteDpAlarm: '/apis/deleteDpAlarm', //删除测点告警
  getDpAlarmPageList: '/apis/getDpAlarmPageList', //分页查询告警配置列表
  getAlarmHistoryList: '/apis/getAlarmHistoryList', //分页查询错误历史记录
  // 远程控制
  addDpRemote: '/apis/addDpRemote',
  updateDpRemote: '/apis/updateDpRemote',
  controlDpRemote: '/apis/controlDpRemote',
  deleteDpRemote: '/apis/deleteDpRemote',
  getDpRemoteList: '/apis/getDpRemoteList',
  getDpRemotePageList: '/apis/getDpRemotePageList',
  getDpRemoteHistoryPageList: '/apis/getDpRemoteHistoryPageList',
  // 测点联动
  addDpLinkage: '/apis/addDpLinkage',
  updateDpLinkage: '/apis/updateDpLinkage',
  deleteDpLinkage: '/apis/deleteDpLinkage',
  getDpLinkageList: '/apis/getDpLinkageList',
  getDpLinkagePageList: '/apis/getDpLinkagePageList',
  getDpLinkageHistoryPageList: '/apis/getDpLinkageHistoryPageList',
  // 测点联动分组
  addDpLinkageManager: '/apis/addDpLinkageManager',
  updateDpLinkageManager: '/apis/updateDpLinkageManager',
  deleteDpLinkageManager: '/apis/deleteDpLinkageManager',
  getDpLinkageManagerList: '/apis/getDpLinkageManagerList',
  getDpLinkageManagerPageList: '/apis/getDpLinkageManagerPageList',
  manualControlDpLinkageManager: '/apis/manualControlDpLinkageManager',
  // 数据表管理
  addDpDataForm: '/apis/addDpDataForm',
  updateDpDataForm: '/apis/updateDpDataForm',
  enableDpDataForm: '/apis/enableDpDataForm',
  deleteDpDataForm: '/apis/deleteDpDataForm',
  getDpDataFormList: '/apis/getDpDataFormList',
  getDpDataFormPageList: '/apis/getDpDataFormPageList',

}
export default url
