import { LanguageManager } from './lang'

export interface IApp {
  name: string
  author: {
    name: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Nuxt 3 Starter',
    author: {
      name: 'siYuan',
    },
  }
  useState('appConfig', () => app)

  // use language manager
  const languageManager = LanguageManager()

  return {
    app,
    languageManager,
  }
}
