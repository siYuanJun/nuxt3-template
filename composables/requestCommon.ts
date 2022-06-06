import Http from '@/utils/http'

// const res = await useAsyncData('count', () => $fetch('http://127.0.0.1:8000/api/v1/web/home'))
// const res = await $fetch('http://127.0.0.1:8000/api/v1/web/home?debug=1')
// const res = await useFetch('http://127.0.0.1:8000/api/v1/web/home?debug=0', {params: {aaa: 1}})

export const requestCommon = () => ({
    /**
     * 获取标签
     */
    home(params?: { size?: number, page?: number }): Promise<any> {
        return Http.get('/api/v1/web/home?debug=1', params)
    }
})

