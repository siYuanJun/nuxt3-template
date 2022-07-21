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
        styleResources?: Object
        loading?: Object
    }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // buildDir: 'nuxt-build',
    meta: {
        // title: 'Nuxt3 Starter',
        // titleTemplate: '%s - Nuxt3 Starter',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: '****',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/static/plugins/swiper/swiper.min.css' },
        ],
        script: [
            { src: '/static/js/jquery.min.js' },
            { src: '/static/plugins/swiper/swiper.min.js' },
            { src: '/static/js/common.js' }
        ],
    },

    // css
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/scss/normailze.scss',
        'element-plus/dist/index.css',
        { ssr: false, src: 'vue-devui/style.css' },

        // 'fluid-player/src/css/fluidplayer.css',
    ],

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

    // build modules
    buildModules: [
        '@nuxtjs/eslint-module',
        '@pinia/nuxt',
        '@intlify/nuxt3',
        '@vueuse/nuxt',
    ],

    // experimental features
    experimental: { reactivityTransform: true },

    // auto import components
    components: true,

    // vite plugins
    vite: {
        plugins: [],
        css: {
            preprocessorOptions: {
                scss: {
                    charset: false,
                    additionalData: '@import "@/assets/scss/_variable.scss";@import "@/assets/scss/_mixins.scss";',
                },
            },
            postcss: {
                plugins: [
                    {
                        postcssPlugin: 'internal:charset-removal',
                        AtRule: {
                            charset: (atRule) => {
                                if (atRule.name === 'charset') {
                                    atRule.remove();
                                }
                            }
                        }
                    }
                ],
            },
        },
    },

    // localization - i18n config
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            locale: 'en',
            fallbackLocale: 'en',
            availableLocales: ['zh', 'en'],
            silentFallbackWarn: false,
            formatFallbackMessages: false,
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
    ],

    loading: {
        color: 'rgba(37, 28, 229, 0.66)',
        height: '2px',
        continuous: true,
        duration: 3000,
    },
})
