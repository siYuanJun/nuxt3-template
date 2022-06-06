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
</script>

<style lang="scss" scoped>
</style>
