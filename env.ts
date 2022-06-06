const envData = {
    development: {
        NODE_ENV: 'development',
        // 测试服务器地址
        API_BASE_URL: 'http://127.0.0.1:8000',
        API_BASE_SECRET: '5N1nibXzwFjhOHUv',
        DEBUG: true,
    },
    production: {
        NODE_ENV: 'production',
        // 正式服务器地址
        API_BASE_URL: 'http://www.xxx.com',
        API_BASE_SECRET: '4Hr9KXoA1n5bCxt7',
        DEBUG: false,
    },
}
const env = process.env.NODE_ENV ?? ''

export default envData[env]
