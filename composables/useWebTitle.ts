import { useI18n } from 'vue-i18n'

export const useWebTitle = (title): string => {
  const { t } = useI18n()
  const webTitle = t('webTitle')

  return title ? `${webTitle}-${title}` : webTitle
}
