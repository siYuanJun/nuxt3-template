import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'nuxt-title',
    },
    css: ['@/assets/css/styles.css'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },

    // runtimeConfig: {
    //   // The private keys which are only available within server-side
    //   apiSecret: '123',
    //   // Keys within public, will be also exposed to the client-side
    //   public: {
    //     apiBase: '/api'
    //   }
    // }
})
