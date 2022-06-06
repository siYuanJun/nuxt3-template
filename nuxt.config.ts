import { defineNuxtConfig } from 'nuxt3'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import env from './env'

const pluginsLib = <string[]>[]
if (env.NODE_ENV === 'production') {
    pluginsLib.push('transform-remove-console')
}

declare module '@nuxt/schema' {
    interface NuxtConfig {
        intlify?: IntlifyModuleOptions
        experimental?: Object
        vueuse?: Object
        runtimeConfig?: Object
    }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Nuxt3 Starter',
        titleTemplate: '%s - Nuxt3 Starter',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt3 Starter',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // css
    css: ['@/assets/css/styles.css'],

    // plugins
    plugins: [
    ],

    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
        babel: {
            plugins: pluginsLib,
        },
    },

    // axios: {
    //     proxy: true, // 代理时本地测试域名无法访问
    //     prefix: '/', // proxy=true 生效
    //     baseURL: env.API_BASE_URL, // proxy=false 有效
    // },

    // test proxy
    // proxy: {
    //     '/api/': {
    //         target: API_BASE_URL,
    //         // secure: false,  // 如果是 https 接口，需要配置这个参数
    //         changeOrigin: true, // 如关闭可能接口出现异常
    //         pathRewrite: {
    //             '^/api': '/api',
    //             changeOrigin: true,
    //         },
    //     },
    //     '/uploads/': {
    //         target: API_BASE_URL,
    //         // secure: false,  // 如果是 https 接口，需要配置这个参数
    //         changeOrigin: true, // 如关闭可能接口出现异常
    //         pathRewrite: {
    //             '^/uploads': '/uploads',
    //             changeOrigin: true,
    //         },
    //     },
    // },

    // build modules
    buildModules: [
        '@nuxtjs/eslint-module',
        '@pinia/nuxt',
        '@intlify/nuxt3',
        '@vueuse/nuxt',
        // '@nuxtjs/axios'
    ],

    // experimental features
    experimental: { reactivityTransform: true },

    // auto import components
    components: true,

    // vite plugins
    // vite: {
    //     plugins: [],
    // },

    // localization - i18n config
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            locale: 'zh',
            fallbackLocale: 'zh',
            availableLocales: ['zh', 'en', 'id', 'ja'],
        },
    },

    // vueuse
    vueuse: {
        ssrHandlers: true,
    },

    runtimeConfig: {
        ...env
    },

    modules: [
        // ['@nuxtjs/axios', { proxyHeaders: false }]
    ],
})
