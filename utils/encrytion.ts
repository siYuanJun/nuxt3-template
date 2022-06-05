import env from '../env'
const crypto = require('crypto')
const salt = env.API_BASE_SECRET // 定义盐值

export default {
    aesEncrypt(data) {
        try {
            const cipher = crypto.createCipher('aes192', salt) // 采用aes192加密方式
            let crypted = cipher.update(data, 'utf8', 'hex') // 加密
            crypted += cipher.final('hex')
            return crypted
        } catch (e) {
            // 加捕获是为了在验证失败的时候，直接让用户重新登陆
            // window.location.href = '/login'
        }
    },

    aesDecrypt(encrypted) {
        try {
            const decipher = crypto.createDecipher('aes192', salt) // 解密 aes192
            let decrypted = decipher.update(encrypted, 'hex', 'utf8') // 解密
            decrypted += decipher.final('utf8')
            return decrypted
        } catch (e) {
            // 加捕获是为了在验证失败的时候，直接让用户重新登陆
            // console.log("error*-**--*-")
            // window.location.href = '/login';
        }
    },
}
