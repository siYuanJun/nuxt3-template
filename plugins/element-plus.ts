import ElementPlus from 'element-plus/dist/index.full'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(ElementPlus)

    // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    //     // console.log(key, component)
    //     nuxtApp.vueApp.component(key, component)
    // }

})
