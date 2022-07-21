<template>
    <div class="error">
        <h1 class="code">{{ error.statusCode }}</h1>
        <h3 class="message">
            <template v-if="error.message && error.statusCode !== 404">{{ error.message }}</template>
            <template v-else>
                {{ '很抱歉，您访问的页面不存在' }}
            </template>
        </h3>
        <nuxt-link class="link" to="/">返回首页</nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Error',
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default() {
                return {}
            },
        },
    },
}
</script>

<style lang="scss" scoped>
$module-bg: rgba(#000, 0.6);
$transition-time-normal: 0.25s;
$z-index-top: 99999;
$text-secondary: rgba(#000, 0.54);
$font-light-color: #333;

.error {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    z-index: $z-index-top;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $module-bg;

    @keyframes error-item {
        0% {
            opacity: 0;
            transform: translate3d(0, -30%, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    .code,
    .link,
    .message {
        color: $text-secondary;
        animation: error-item ease-out both 0.6s $transition-time-normal;
    }

    @keyframes code-wave {
        0% {
            opacity: 0;
            background-position-y: 5rem;
        }
        100% {
            opacity: 1;
            background-position-y: 0;
        }
    }

    @keyframes code-wave-play {
        0% {
            background-position-x: 14%;
        }
        100% {
            background-position-x: 100%;
        }
    }

    .code {
        text-transform: uppercase;
        font-size: 10em;
        font-weight: normal;
        margin: 0;
        background-image: url('//huiyuanxitong.oss-cn-hangzhou.aliyuncs.com/mydcyj/static/wave.png');
        background-size: cover;
        background-repeat: repeat-x;
        background-position: center;
        background-clip: text;
        -webkit-background-clip: text;
        color: rgba(204, 204, 204, 0.2);
        animation: error-item ease-out both 0.6s $transition-time-normal, code-wave ease-out both 0.6s $transition-time-normal, code-wave-play linear 2s infinite;
    }

    .message {
        font-family: DINRegular;
        font-weight: normal;
        margin-top: 0;
        margin-bottom: 2rem;
    }

    .link {
        cursor: pointer;
        border-bottom: 1px solid;
        padding-bottom: 8px;
        margin-bottom: 4rem;
        @include color-transition();
        &:hover {
            color: $font-light-color;
        }
    }
}
</style>
