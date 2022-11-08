export interface dataType {
  meta: Object;
  color: Object;
  app: Object;
}

export const meta = {
  title: '明源云-深耕数字科技，引领产业升级',
  keywords: '明源云,erp管理系统,SAAS服务,房地产',
  description:
    '深圳市明源云科技有限公司是国内领先的地产生态链数字化服务商，秉承产品领先战略和让用户成功的经营理念，为全国超过6000家房地产企业提供智能商业解决方案和管理系统，实现对新房市场60%份额的覆盖。90%地产百强房企与明源云携手合作，成功推进数字化实践。',
}

export const color = {
  primary: '#0088f5',
}

export const app = {
  defaultPageSize: 18,
}

// export const feedback = {
//   gwzxbdID: 'a2b95192-5dae-4f11-b451-78d4688c01e6',
// }

export default <dataType>{ meta, color, app }
