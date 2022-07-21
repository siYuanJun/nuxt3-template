<template>
    <div class="">
        <div class="text-blue-500 text-lg">pages-index</div>
        <div class="main-body">
            <a>hello world</a>
            <!-- {{ $t('pages.index.title') }} -->
        </div>
        <d-button>确定</d-button>
        <!-- {{res}} -->
    </div>
</template>

<script lang="ts">
export default {
    async setup() {
        useMeta({
            title: useWebTitle(),
        })

        console.log(requestCommon())

        // const res = await requestCommon().home({size: 100})
        // return {
        //     res
        // }
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
