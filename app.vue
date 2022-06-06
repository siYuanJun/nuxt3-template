<template>
    <Html :lang="locale">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
AppSetup()
const locale = useState<string>('locale.setting')
console.log('当前语言:', locale.value)

</script>

<style lang="scss" scoped>
</style>
