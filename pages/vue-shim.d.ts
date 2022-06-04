//ts识别全局方法/变量
import VueRouter, { Route } from 'vue-router'
import Vue from 'vue'
import { Store } from 'vuex'

declare module '*.vue' {
    export default Vue
}

// 识别 this.$route
declare module 'vue/types/vue' {
    interface Vue {
        $router: VueRouter // 这表示this下有这个东西
        $route: Route
        $store: Store<any>
    }
}
