<template>
    <div class="">
        <div class="text-blue-500 text-lg">pages-index</div>
        <div class="main-body">
            <a>hello world</a>
            {{ $t('pages.index.title') }}
        </div>
    </div>
</template>

<script lang="ts">
export default {
    async setup() {

        // const { $request } = useNuxtApp()
        // let res = await $request.home()
        // console.log(res)
        // const res =  await $fetch('/api/v1/pages')
        // console.log(res)
    },
}
</script>

<style lang="scss" scoped>
.main-body {
    width: 100px;
    height: 100px;
    background-color: red;

    a {
        color: #fff;
    }
}
</style>
