import { PATH_TYPE, NODE_ENV } from '@/environment'

export interface apiConfigType {
  development: Object;
  test: Object;
  production: Object;
}

const apiConfig = <apiConfigType>{
  development: {
    BASE: 'http://deve.xxx.com/api',
  },
  test: {
    BASE: 'http://test.xxx.com/api',
  },
  production: {
    BASE: 'https://prod.xxx.com/api',
  },
}

export default apiConfig[PATH_TYPE || NODE_ENV]
