import Http from '@/utils/http'

/**
 * 获取标签
 */
export const useGetTags = (params?: { size?: number, page?: number }) => {
  return Http.get('/app/v1/tags', params)
}
